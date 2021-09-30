import BaseModel from "./baseModel";

class Article extends BaseModel {
    aid: string;
    bid: string;
    deleted: boolean;
    filename: string;
    create_time: number;
    modified: number;
    recommend: number;
    n_comments: number;
    owner: string;
    date: string;
    title: string;
    money: number;
    type: string;
    class: string;
    mode: number;
    url: string;
    read: boolean;
    idx: string;
    rank: number;
    subject_type: string

    constructor(jsonObject: object) {
        super(jsonObject);
    }
}

export {Article}
