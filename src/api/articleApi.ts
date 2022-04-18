import req from "./request"

export default {
    popular: async () => {
        return req.get('/api/articles/popular')
    },
    ofBoard: async (bid: string) => {
        return req.get(`/api/board/${bid}/articles`)
    },
    ofBoardPaged: async (bid: string, startIndex: string, limit: number) => {
        return req.get(`/api/board/${bid}/articles?start_idx=${startIndex}&limit=${limit}`)
    }
}
