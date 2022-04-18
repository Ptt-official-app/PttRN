import req from "./request"

// FIXME: Change to real client id/secret
const getClientId = () => 'test_client_id'
const getClientSecret = () => 'test_client_secret'

export default {
    login: async (username, password) => {
        return req.post('/api/account/login', {
            client_id: getClientId(),
            client_secret: getClientSecret(),
            username,
            password
        })
    }
}
