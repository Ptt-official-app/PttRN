import BaseModel from "./baseModel";
import boardApi from "../api/boardApi";
import {Article} from "./article";
import articleApi from "../api/articleApi";

class Board extends BaseModel {
    bid: string;
    brdname: string;
    title: string;
    flag: number;
    type: string;
    class: string;
    nuser: number;
    moderators: [
        string
    ];
    reason: string;
    read: true;
    total: number;
    last_post_time: number;
    stat_attr: number;
    level_idx: string;
    gid: number;

    constructor(jsonObject: object) {
        super(jsonObject);
    }

    async fetchArticles(): Promise<Article[]> {
        const jArticles = (await articleApi.ofBoard(this.bid)).data;
        const ret: Article[] = [];
        for (const json of jArticles.list) {
            ret.push(new Article(json))
        }
        return ret;
    }
}

async function fetchBoards(api: Promise<any>): Promise<Board[]> {
    const jBoards = (await api).data;
    const ret: Board[] = [];
    for (const jBoard of jBoards.list) {
        ret.push(new Board(jBoard));
    }
    return ret;
}

class FetchBoard {
    static async allBoards(): Promise<Board[]> {
        return fetchBoards(boardApi.all());
    }
    static async popularBoards(): Promise<Board[]> {
        return fetchBoards(boardApi.popular());
    }
}

export {Board, FetchBoard};
