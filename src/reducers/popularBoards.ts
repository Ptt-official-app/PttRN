import { init as _init, setData as _setData, createReducer, genUUID } from 'react-reducer-utils'

import boardApi from '../api/boardApi'

import { $t } from '../i18n'
import { BoardSummary } from '../model/board'

import { sanitizeBoard } from './utils'

import { DispatchedAction, State, Thunk, Dispatch, GetClassState } from 'react-reducer-utils'
import { Err, TheDate } from './utils'

const myClass = 'PttRN/LoginMain'

export interface PopularBoards extends State, Err, TheDate {
    isLoading?: boolean
    boards?: BoardSummary[]
}

// init
export const init = (doMe: DispatchedAction<PopularBoards>, parentID?: string, doParent?: DispatchedAction<PopularBoards>): Thunk<PopularBoards> => {
    let myID = genUUID()
    let theDate = new Date()
    return (dispatch: Dispatch<PopularBoards>, _: GetClassState<PopularBoards>) => {
        dispatch(_init({ myID, myClass, doMe, parentID, doParent, state: { theDate } }))
        dispatch(getBoards(myID))
    }
}

export const getBoards = (myID: string): Thunk<PopularBoards> => {
    return (dispatch: Dispatch<PopularBoards>, _: GetClassState<PopularBoards>) => (async () => {

        dispatch(_setData<PopularBoards>(myID, { isLoading: true }))
        const [data_q, status, errmsg] = await boardApi.popular()
        if (status !== 200) {
            dispatch(_setData(myID, { err: $t(`errmsg.${errmsg}`) }))
            return
        }
        if (!data_q) {
            return
        }
        let data = data_q

        let boards = data.list || []
        boards = boards.map((each: BoardSummary) => sanitizeBoard(each))
        let toUpdate: PopularBoards = {
            boards,
            isLoading: false,
        }

        dispatch(_setData(myID, toUpdate))
    })()
}

export default createReducer()
