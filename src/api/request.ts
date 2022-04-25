import axios, { AxiosRequestHeaders } from "axios"

const instance = axios.create({
    // FIXME: Change to config file
    baseURL: 'https://api.devptt.site:3457'
})

// Resp: data, status-code, errmsg
export type Resp<T> = [T | null, number, string]

export default {
    get: async <T>(path: string, headers?: AxiosRequestHeaders, params?: any): Promise<Resp<T>> => {
        let theData: T | null = null
        let theStatus = 0
        let theErr = ''
        await instance.get(path, { headers, params })
            .then((resp) => {
                const { data, status } = resp
                theData = data
                theStatus = status
            })
            .catch((err) => {
                if (err.response) {
                    theStatus = err.response.status
                    theErr = err.response.data
                } else {
                    theErr = err.message
                }
            })

        return [theData, theStatus, theErr]
    },
    post: async <T>(path: string,
        body?: string | object | null,
        headers?: AxiosRequestHeaders,
        params?: any): Promise<Resp<T>> => {
        let theData: T | null = null
        let theStatus = 0
        let theErr = ''
        await instance.post(path, body, { headers, params })
            .then((resp) => {
                const { data, status } = resp
                theData = data
                theStatus = status

            })
            .catch((err) => {
                if (err.response) {
                    theStatus = err.response.status
                    theErr = err.response.data
                } else {
                    theErr = err.message
                }
            })

        return [theData, theStatus, theErr]
    }
}
