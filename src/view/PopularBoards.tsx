import React, {Component} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {Board, FetchBoard} from "../model/board";
import BoardListItem from "../component/BoardListItem";

export default class PopularBoards extends Component<{}, {
    boards: Board[]
}> {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        }
    }
    render() {
        return (
            <View style={styles.page}>
                <FlatList data={this.state.boards} renderItem={this.renderItem} />
            </View>
        );
    }
    renderItem = ({ item }: { item: Board }) => (
        <BoardListItem board={item}/>
    );
    async componentDidMount() {
        const allBoards = await FetchBoard.popularBoards()
        this.setState({
            boards: allBoards
        })
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        height: '100%',
        width: '100%'
    }
})
