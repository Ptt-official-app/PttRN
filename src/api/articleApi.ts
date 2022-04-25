import { ArticleSummary } from "../model/article"
import req, { Resp } from "./request"

export type LoadArticlesResult = {
    list: ArticleSummary[]
    next_idx: string
}

export type LoadBottomArticlesResult = {
    list: ArticleSummary[]
}

export default {
    loadArticles: async (bid: string, startIndex: string, limit: number): Promise<Resp<LoadArticlesResult>> => {
        return req.get(`/api/board/${bid}/articles?start_idx=${startIndex}&limit=${limit}`)
    },
    loadBottomArticles: async (bid: string): Promise<Resp<LoadBottomArticlesResult>> => {
        return req.get(`/api/board/${bid}/bottomarticles`)
    },
}
