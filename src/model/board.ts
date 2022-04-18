import { BoardStatAttr } from './board_stat_attr'
import { NumIdx } from './numidx'
import { PERM } from './perm'

export interface BoardSummary extends NumIdx {
    bid: string
    brdname: string
    title: string
    flag: number
    type: string
    class: string
    nuser: number
    moderators: string[]
    reason: string
    read: boolean
    total: number
    last_post_time: number
    stat_attr: BoardStatAttr
    level_idx: string

    gid: number
    pttbid: number

    url?: string

    idx: string
}

export interface BoardDetail {
    // BoardSummary
    bid: string
    brdname: string
    title: string
    flag: number
    type: string
    class: string
    nuser: number
    moderators: string[]
    reason: string
    read: boolean
    total: number
    last_post_time: number
    stat_attr: number
    level_idx: string

    gid: number
    pttbid: number

    idx: string

    // board-detail
    update_time: number
    vote_limit_logins: number
    post_limit_logins: number
    vote_limit_bad_post: number
    post_limit_bad_post: number

    vote: number
    vtime: number

    perm: PERM

    last_set_time: number
}
