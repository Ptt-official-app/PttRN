import { BoardSummary } from "../model/board"
import req, { Resp } from "./request"

export type AllResult = {
    list: BoardSummary[]
    next_idx: string
}

export type PopularResult = {
    list: BoardSummary[]
}

export default {
    all: async (): Promise<Resp<AllResult>> => {
        return req.get('/api/boards')
    },
    popular: async (): Promise<Resp<PopularResult>> => {
        return req.get('/api/boards/popular')
    }
}
