import React, { useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"
import BoardList from "../component/BoardList"
import styles from './PopularBoards.style'

import * as DoPopularBoards from '../reducers/popularBoards'

import { PopularBoards } from "../reducers/popularBoards"

import { useReducer, getRootState } from 'react-reducer-utils'

import Empty from '../component/Empty'

type Props = {
    history: any
}

export default (props: Props) => {
    const [statePopularBoards, doPopularBoards] = useReducer(DoPopularBoards)

    useEffect(() => {
        doPopularBoards.init(doPopularBoards)
    }, [])

    //get me
    let me_q = getRootState<PopularBoards>(statePopularBoards)
    let isLoading = me_q?.isLoading
    useEffect(() => {
    }, [isLoading])

    if (!me_q) {
        return <Empty />
    }
    let me = me_q

    // render
    return (
        <View style={[styles.container]}>
            <BoardList boards={me.boards || []} history={props.history} />
            {isLoading && <ActivityIndicator size="large" style={{ backgroundColor: '#000' }} />}
        </View>
    )
}
