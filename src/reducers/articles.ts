import { init as _init, setData as _setData, createReducer, genUUID, getState } from 'react-reducer-utils'
import { $t } from '../i18n'

import articleApi from '../api/articleApi'

import { N_ARTICLES } from './constants'
import { ArticleSummary } from '../model/article'
import { mergeList } from './utils'

import { DispatchedAction, State, Thunk, Dispatch, GetClassState } from 'react-reducer-utils'
import { Err, TheDate } from './utils'

const myClass = 'PttRN/ArticlesOfBoard'

export interface Articles extends State, Err, TheDate {
    articles?: ArticleSummary[]
    bottomArticles?: ArticleSummary[]
    allArticles?: ArticleSummary[]

    isLoading?: boolean
    isNotFirst?: boolean

    isPreEnd?: boolean
    isNextEnd?: boolean
    lastSearchTitle?: string
    lastPre?: string
    lastNext?: string

    scrollToRow?: number

    preIdx?: string
    nextIdx?: string
}

// init
export const init = (doMe: DispatchedAction<Articles>, bid: string, parentID?: string, doParent?: DispatchedAction<Articles>): Thunk<Articles> => {
    let myID = genUUID()
    let theDate = new Date()
    return (dispatch: Dispatch<Articles>, _: GetClassState<Articles>) => {
        dispatch(_init({ myID, myClass, doMe, parentID, doParent, state: { theDate } }))
        dispatch(getBottomArticles(myID, bid))
        dispatch(getArticles(myID, bid, '', '', false, false))
    }
}

const getBottomArticles = (myID: string, bid: string): Thunk<Articles> => {
    return (dispatch: Dispatch<Articles>, getClassState: GetClassState<Articles>) => (async () => {
        const [data_q, status, errmsg] = await articleApi.loadBottomArticles(bid)
        if (status !== 200) {
            dispatch(_setData(myID, errmsg))
            return
        }
        if (!data_q) {
            return
        }
        let data = data_q

        let bottomArticles = data.list || []
        bottomArticles.map((each: ArticleSummary) => each.numIdx = -1)
        bottomArticles.map((each: ArticleSummary) => each.url = `/board/${bid}/article/${each.aid}`)

        let state = getClassState()
        let me_q = getState(state, myID)
        if (!me_q) {
            return
        }
        let me = me_q
        let articles = me.articles || []
        let isNextEnd = me.isNextEnd || false
        let lastSearchTitle = me.lastSearchTitle || ''

        let allArticles = (isNextEnd && !lastSearchTitle) ? articles.concat(bottomArticles) : articles

        let toUpdate: Articles = { bottomArticles, allArticles }
        // If regular article list is already loaded, add list length to scroll position
        if (me.scrollToRow) {
            toUpdate.scrollToRow = me.scrollToRow + bottomArticles.length
        }

        dispatch(_setData(myID, toUpdate))
    })()
}

export const getArticles = (myID: string, bid: string, search: string, startIdx: string, desc: boolean, isExclude: boolean): Thunk<Articles> => {
    return (dispatch: Dispatch<Articles>, getClassState: GetClassState<Articles>) => (async () => {
        //check busy
        let state = getClassState()
        let me_q = getState(state, myID)
        if (!me_q) {
            return
        }
        let me = me_q
        let myArticles = me.articles || []

        // check busy
        if (me.isLoading) {
            return
        }

        // check search title
        let lastSearchTitle = me.lastSearchTitle || ''
        let lastPre = me.lastPre || ''
        let lastNext = me.lastNext || ''
        let isPreEnd = me.isPreEnd || false
        let isNextEnd = me.isNextEnd || false
        let isNotFirst = me.isNotFirst || false
        if (search !== lastSearchTitle) {
            myArticles = []
            lastPre = ''
            lastNext = ''
            isPreEnd = false
            isNextEnd = false
            isNotFirst = false
        }

        // check end
        if (desc) {
            if (isPreEnd) {
                return
            }
        } else {
            if (isNextEnd) {
                return
            }
        }

        // check repeated
        if (desc) {
            if (isNotFirst && lastPre === startIdx) {
                return
            }
        } else {
            if (isNotFirst && lastNext === startIdx) {
                return
            }
        }

        dispatch(_setData(myID, { isLoading: true }))
        const [data_q, status, errmsg] = await articleApi.loadArticles(bid, startIdx, N_ARTICLES)
        if (status !== 200) {
            dispatch(_setData(myID, { err: $t(`errmsg.${errmsg}`) }))
            return
        }
        if (!data_q) {
            return
        }
        let data = data_q

        state = getClassState()
        me_q = getState(state, myID)
        if (!me_q) {
            return
        }
        me = me_q
        let bottomArticles = me.bottomArticles || []

        let articles = data.list || []
        articles.map((each: ArticleSummary) => each.url = `/board/${bid}/article/${each.aid}`)

        let startNumIdx = 1

        let newArticles = mergeList(myArticles, articles, desc, startNumIdx, isExclude)

        // to update
        let toUpdate: Articles = {
            lastSearchTitle: search,
            articles: newArticles,
            isLoading: false,

            lastPre: lastPre,
            lastNext: lastNext,
            isPreEnd: isPreEnd,
            isNextEnd: isNextEnd,
            isNotFirst: true,
        }

        if (!desc) {
            toUpdate.nextIdx = data.next_idx
            toUpdate.lastNext = startIdx
            if (!data.next_idx) {
                toUpdate.isNextEnd = true
                isNextEnd = true
            }
            if (!startIdx) {
                toUpdate.isPreEnd = true
                isPreEnd = true
            }
        } else {
            toUpdate.preIdx = data.next_idx
            toUpdate.scrollToRow = articles.length - 1 //only dataList.length - 1 new items.
            toUpdate.lastPre = startIdx
            toUpdate.isLoading = false
            if (!data.next_idx) {
                toUpdate.isPreEnd = true
                isPreEnd = true
            }
            if (!startIdx) {
                toUpdate.isNextEnd = true
                isNextEnd = true
            }
        }

        let allArticles = (isNextEnd && !search) ? newArticles.concat(bottomArticles) : newArticles
        toUpdate.allArticles = allArticles

        dispatch(_setData(myID, toUpdate))
    })()
}

export default createReducer()
