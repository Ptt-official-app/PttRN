import userApi from "../api/userApi";
import BaseModel from "./baseModel";

class Account extends BaseModel {
    private static current: Account

    user_id: string
    access_token: string
    token_type: string

    constructor(jsonObject: object) {
        super(jsonObject);
    }

    static async login(username, password): Promise<void> {
        const res = await userApi.login(username, password);
        Account.current = new Account(res.data);
    }
}

export {Account}
