import req from "./request"

export default {
    all: async () => {
        return req.get('/api/boards')
    },
    popular: async () => {
        return req.get('/api/boards/popular')
    }
}
