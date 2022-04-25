import { NumIdx } from './numidx'
import { Rune } from './rune'

export interface ArticleBlock {
    content: Rune[][]
    deleted: boolean
    create_time: number
    modified: number
    recommend?: number
    n_comments?: number
    owner?: string
    nickname?: string
    title?: string
    money?: number
    class?: string
    mode?: number
    ip?: string
    host?: string
    bbs?: string
    rank?: number
    next_idx: string
}

export interface ArticleSummary extends NumIdx {
    bid: string
    aid: string
    deleted: boolean
    create_time: number
    modified: number
    recommend: number
    n_comments: number
    owner: string
    title: string
    money: number
    class: string
    mode: number
    url: string
    read: boolean
    idx: string
    rank: number
    subject_type: number
}
