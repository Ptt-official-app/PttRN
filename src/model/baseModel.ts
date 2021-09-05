export default class BaseModel {
    constructor(jsonObject: object) {
        Object.assign(this, jsonObject)
    }
}
