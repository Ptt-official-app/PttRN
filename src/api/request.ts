import axios, { AxiosRequestHeaders } from "axios"

const instance = axios.create({
    // FIXME: Change to config file
    baseURL: 'https://api.devptt.site:3457'
})

export default {
    get: async (path: string, headers: AxiosRequestHeaders = null, params: object = null) => {
        return instance.get(path, { headers, params })
    },
    post: async (path: string,
        body: string | object = null,
        headers: AxiosRequestHeaders = null,
        params: object = null) => {
        return instance.post(path, body, { headers, params })
    }
}
