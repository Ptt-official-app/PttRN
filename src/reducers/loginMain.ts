import { init as _init, setData as _setData, createReducer } from 'react-reducer-utils'

import userApi from '../api/userApi'

import { $t } from '../i18n'

import { Account } from '../model/account'

import { DispatchedAction, State, Thunk, Dispatch, GetClassState } from 'react-reducer-utils'
import { Err, TheDate } from './utils'

const myClass = 'PttRN/LoginMain'

export interface LoginMain extends State, Err, TheDate {
    account?: Account
}

// init
export const init = (doMe: DispatchedAction<LoginMain>): Thunk<LoginMain> => {
    let theDate = new Date()
    return (dispatch: Dispatch<LoginMain>, _: GetClassState<LoginMain>) => {
        dispatch(_init({ myClass, doMe, state: { theDate } }))
    }
}

export const Login = (myID: string, username: string, password: string): Thunk<LoginMain> => {
    return (dispatch: Dispatch<LoginMain>, _: GetClassState<LoginMain>) => (async () => {
        const [data, status, errmsg] = await userApi.login(username, password)

        if (status === 401) {
            dispatch(_setData(myID, { err: $t('error.PASSWORD') }))
            return
        }

        if (status !== 200) {
            if (errmsg) {
                dispatch(_setData(myID, { err: $t(`errmsg.${errmsg}`) }))
            } else {
                dispatch(_setData(myID, { err: $t('error.NETWORK') }))
            }
            return
        }

        dispatch(_setData(myID, { account: data }))
    })()
}

export const clearError = (myID: string): Thunk<LoginMain> => {
    return (dispatch: Dispatch<LoginMain>, _: GetClassState<LoginMain>) => {
        dispatch(_setData(myID, { err: '' }))
    }
}

export default createReducer()
