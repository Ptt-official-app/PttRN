import req, { Resp } from "./request"

import { Account } from '../model/account'

// FIXME: Change to real client id/secret
const getClientId = () => 'test_client_id'
const getClientSecret = () => 'test_client_secret'

export type LoginResult = Account

export default {
    login: async (username: string, password: string): Promise<Resp<Account>> => {
        return req.post('/api/account/login', {
            client_id: getClientId(),
            client_secret: getClientSecret(),
            username,
            password
        })
    }
}
