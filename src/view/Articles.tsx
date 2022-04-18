import ArticleList from "../component/ArticleList"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, View, Text } from "react-native"
import { useParams } from 'react-router-dom'
import Icon from "react-native-vector-icons/MaterialIcons"
import styles from './Articles.style'

import * as DoArticles from '../reducers/articles'
import { Articles } from '../reducers/articles'

import { useReducer, getRootState } from "react-reducer-utils"

import Empty from '../component/Empty'

type Props = {
    history: any
    match: any
}

export default (props: Props) => {
    const [stateArticles, doArticles] = useReducer(DoArticles)
    const [displayArticles, setDisplayArticles] = useState([])
    const [nextStartIdx, setNextStartIdx] = useState('')

    //init
    // @ts-ignore
    let { bid } = useParams()
    useEffect(() => {
        doArticles.init(doArticles, bid)
    }, [])


    //get me
    let me_q = getRootState<Articles>(stateArticles)
    let isLoading = me_q?.isLoading
    useEffect(() => {
    }, [isLoading])

    let allArticles = me_q?.allArticles || []
    useEffect(() => {
        if (!allArticles || !allArticles.length) {
            return
        }
        // @ts-ignore
        setDisplayArticles(allArticles)
    }, [allArticles])

    if (!me_q) {
        return <Empty />
    }
    let me = me_q

    // event-handlers
    let goBack = () => {
        props.history.goBack()
    }

    let onScroll = () => {

    }

    // render
    return (
        <View style={[styles.container]}>
            <View style={styles.header}>
                <Icon style={[styles.backIcon]} name={'arrow-back-ios'}
                    size={30} onPress={goBack} />
                <Text style={[styles.boardName]}>{bid}</Text>
                {isLoading ? <ActivityIndicator size="large" style={[styles.loadingCircle]} /> : null}
            </View>
            <ArticleList
                articles={displayArticles}
                scroll={onScroll} />
        </View>
    )
}
