import BaseModel from "./baseModel";
import articleApi from "../api/articleApi";

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

async function fetchArticles(api: Promise<any>): Promise<Article[]> {
    const jArticles = (await api).data;
    const ret: Article[] = [];
    for (const json of jArticles.list) {
        ret.push(new Article(json));
    }
    return ret;
}


class FetchArticle {
    static async ofBoard(bid: string): Promise<Article[]> {
        return fetchArticles(articleApi.ofBoard(bid));
    }
}

export {Article, FetchArticle}
