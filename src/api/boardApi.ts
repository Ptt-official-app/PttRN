import req from "./request";

export default {
    all: async function() {
        return req.get('/api/boards')
    },
    popular: async function() {
        return req.get('/api/boards/popular')
    }
}
