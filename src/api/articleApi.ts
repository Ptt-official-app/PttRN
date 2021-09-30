import req from "./request";

export default {
    popular: async function() {
        return req.get('/api/articles/popular')
    },
    ofBoard: async function(bid: string) {
        return req.get(`/api/board/${bid}/articles`)
    }
}
