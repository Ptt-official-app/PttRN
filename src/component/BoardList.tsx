import React, { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { BoardSummary } from "../model/board"
import { SearchBar } from 'react-native-elements'
import BoardListItem from "./BoardListItem"
import { $t } from "../i18n"
import styles from './BoardList.style'

type Props = {
    boards: BoardSummary[]
    history: any
}

// TODO: Handle infinite pulling paging

export default (props: Props) => {
    const [search, setSearch] = useState('')
    const [displayBoards, setDisplayBoards] = useState(props.boards)

    useEffect(() => {
        setDisplayBoards(
            props.boards.filter((board) => board.brdname.toLowerCase().indexOf(search.toLowerCase()) >= 0)
        )
    }, [props.boards, search])

    return (
        <View style={styles.page}>
            <SearchBar
                style={styles.searchBar}
                placeholder={$t('board.searchBoard')}
                // @ts-ignore
                onChangeText={search => setSearch(search)}
                value={search}
            />
            <FlatList<BoardSummary> data={displayBoards}
                renderItem={(each) => <BoardListItem idx={each.index} board={each.item} />} />
        </View>
    )
}
