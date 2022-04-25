import React, { useEffect, useState } from "react"
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './LoginMain.style'

import * as DoLoginMain from '../reducers/loginMain'

import { LoginMain } from "../reducers/loginMain"

import { useReducer, getRoot } from 'react-reducer-utils'

import { $t } from "../i18n"

import Empty from '../component/Empty'
import ErrMsg from "../component/ErrMsg"

export default (props: { history: any }) => {
    const [stateLoginMain, doLoginMain] = useReducer<LoginMain>(DoLoginMain)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(true)

    //init
    useEffect(() => {
        doLoginMain.init(doLoginMain)
    }, [])

    //get me
    let me = getRoot<LoginMain>(stateLoginMain)
    let account = me?.state?.account

    // useEffect on me
    useEffect(() => {
        if (!account) {
            return
        }
        props.history.push('/home')
    }, [account])

    // defensive programming for no me yet
    if (!me) {
        return <Empty />
    }

    // get data
    let myID = me.id

    //handler
    let login = () => {
        doLoginMain.Login(myID, username, password)
    }

    let onChangeUsername = (username: string) => {
        doLoginMain.clearError(myID)
        setUsername(username)
    }

    let onChangePassword = (password: string) => {
        doLoginMain.clearError(myID)
        setPassword(password)
    }

    let onSetHidePassword = () => {
        doLoginMain.clearError(myID)
        setHidePassword(!hidePassword)
    }

    return (
        <View style={[styles.container]}>
            <Text style={[styles.logoText]}>{$t('login.logoText')}</Text>
            <View style={[styles.loginBox]}>
                <TextInput onChangeText={onChangeUsername}
                    style={[styles.loginInput]} placeholder={$t('login.username')} autoCapitalize='none' />
                <View style={[styles.passwordOuter]}>
                    <TextInput onChangeText={onChangePassword}
                        style={[styles.passwordInput]}
                        placeholder={$t('login.password')}
                        secureTextEntry={hidePassword}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity
                        onPress={onSetHidePassword}>
                        <Icon
                            name={hidePassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            color={'#EEE'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Button onPress={login} title={$t('login.login')} />
            <ErrMsg err={me.state.err} />
        </View>
    )
}
