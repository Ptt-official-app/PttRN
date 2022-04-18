import React from "react"
import { Text, View } from "react-native"
import { BoardSummary } from "../model/board"
import Icon from "react-native-vector-icons/MaterialIcons"
import utils from "../util/utils"
import { Link } from "../../react-router"

import styles from './BoardListItem.style'

type Props = {
    board: BoardSummary
    idx: number
}

export default (props: Props) => {
    const board = props.board
    return (
        <Link key={props.idx} to={`${board.url}`} style={{ textDecoration: 'none' }}>
            <View style={styles.listItem}>
                <View style={styles.firstRow}>
                    <Text style={[styles.text, styles.primaryText]}>{board.brdname}</Text>
                    <Icon style={{ marginRight: 3 }}
                        name={board.nuser < 100 ? 'person' : 'people'}
                        size={24}
                        color={iconColor(board.nuser)} />
                    <Text style={styles.text}>{utils.numberWithCommas(board.nuser)}</Text>
                </View>
                <Text style={[styles.text, styles.title]}>{board.title}</Text>
            </View>
        </Link>
    )
}

const iconColor = (nuser: number): string => {
    if (nuser <= 10) {
        return '#CCC'
    } else if (nuser <= 50) {
        return '#CC0'
    } else if (nuser <= 99) {
        return '#D32'
    } else if (nuser <= 999) {
        return '#FFF'
    } else if (nuser <= 4999) {
        return '#F00'
    } else if (nuser <= 9999) {
        return '#00F'
    } else if (nuser <= 29999) {
        return '#0DF'
    } else if (nuser <= 59999) {
        return '#0F0'
    } else if (nuser <= 99999) {
        return '#FF0'
    } else {
        return '#F0F'
    }
}
