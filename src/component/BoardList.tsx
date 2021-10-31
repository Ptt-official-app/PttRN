import React, {Component} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Board} from "../model/board";
import {SearchBar} from 'react-native-elements';
import BoardListItem from "./BoardListItem";
import {$t} from "../i18n";

// TODO: Handle infinite pulling paging
export default class BoardList extends Component<{
    boards: Board[]
}, {
    boardsShown: Board[],
    search: string
}> {
    constructor(props) {
        super(props);
        this.state = {
            boardsShown: this.props.boards,
            search: ''
        };
    }

    render() {
        return (
            <View style={styles.page}>
                <SearchBar
                    style={styles.searchBar}
                    placeholder={$t('board.searchBoard')}
                    // @ts-ignore
                    onChangeText={search => this.setState({search})}
                    value={this.state.search}
                />
                <FlatList data={this.state.boardsShown}
                          // @ts-ignore
                          renderItem={this.renderItem}/>
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.boards != prevProps.boards ||
            this.state.search != prevState.search) {
            this.setState({
                boardsShown: this.props.boards.filter(
                    board => board.brdname.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0)
            });
        }
    }

    renderItem = ({item}: { item: Board }, idx: number) => (
        <BoardListItem key={idx} board={item} />
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column'
    },
    searchBar: {
        padding: 0,
        margin: 0
    }
})
