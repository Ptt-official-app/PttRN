import { NumIdx } from "../model/numidx"
import { BoardSummary } from "../model/board"
import { NBRD_BOARD, NBRD_LINE, NBRD_FOLDER, NBRD_FAV } from "../model/board_stat_attr"

export interface TheDate {
    theDate?: Date
}

export interface Err {
    err?: string
}

// mergeList
// given that the origList is in ascending order
// concat the origList and newList accordingly.
export const mergeList = <T extends NumIdx>(origList: T[], newList: T[], isDescNewList: boolean, startNumIdx?: number, isExclude?: boolean): T[] => {

    if (isExclude) { //desc not include start-item
        newList = newList.slice(1)
    }

    if (newList.length === 0) {
        return origList
    }

    if (isDescNewList) {
        let newStartNumIdx = origList.length ? ((origList[0].numIdx || 0) - 1) : (startNumIdx || newList.length - 1)

        newList.map((each, idx) => each.numIdx = newStartNumIdx - idx)
        newList = newList.reverse()

        return newList.concat(origList)
    } else {
        let newStartNumIdx = origList.length ? ((origList[origList.length - 1].numIdx || 0) + 1) : (startNumIdx || 0)
        newList.map((each, idx) => each.numIdx = newStartNumIdx + idx)
    }
    return origList.concat(newList)
}

/////
// board
/////
const invalidBoard = {
    bid: '',
    brdname: '',
    title: '<目前無法看到此板>',
    flag: 0,
    type: '',
    class: '',
    nuser: 0,
    moderators: [],
    reason: '',
    read: false,
    total: 0,
    last_post_time: 0,
    stat_attr: 0,
    level_idx: '',

    gid: 0,
    pttbid: 0,

    url: '',

    idx: '',
}


export const sanitizeBoard = (board?: BoardSummary | null): BoardSummary => {
    if (!board) {
        return invalidBoard
    }

    board.url = boardURL(board)

    if (board.type === 'Σ') {
        if (board.gid === 1) {
            board.brdname = ''
            board.class = ''
        }
        board.nuser = 0
        return board
    }

    switch (board.stat_attr) {
        case NBRD_LINE:
            board.brdname = '------------'
            board.title = '--------------------------------------------------'
            board.nuser = 0
            board.moderators = ['-----------']
            board.type = '--'
            break
        case NBRD_FOLDER:
            board.type = '□'
            board.brdname = 'MyFavFolder'
            board.nuser = 0
            break
        default:
            break
    }

    return board

}

const boardURL = (board: BoardSummary) => {
    if (board.type === 'Σ') {
        return `/cls/${board.pttbid}`
    }

    switch (board.stat_attr) {
        case NBRD_LINE:
            return ''
        case NBRD_FAV:
            return `/board/${board.bid}/articles`
        case NBRD_BOARD:
            return `/board/${board.bid}/articles`
        //case NBRD_FOLDER:
        //    return window.location.pathname + `?level=${board.level_idx}`
        default:
            return ''
    }
}
