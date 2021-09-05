import req from "./request";

export default {
    popular: async function() {
        return req.get('/api/articles/popular')
    }
}
