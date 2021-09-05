import React, {Component} from "react";
import {FlatList, ListRenderItem, Text} from "react-native";
import {Board, FetchBoard} from "../model/board";

export default class AllBoards extends Component<{}, {
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
            <>
                <Text>看板列表</Text>
                <FlatList data={this.state.boards} renderItem={this.renderItem} />
            </>
        );
    }
    renderItem = ({ item }: { item: Board }) => (
        <Text>{item.title}</Text>
    );
    async componentDidMount() {
        const allBoards = await FetchBoard.allBoards()
        this.setState({
            boards: allBoards
        })
    }
}
