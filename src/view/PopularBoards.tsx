import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {Board, FetchBoard} from "../model/board";
import BoardList from "../component/BoardList";

export default class PopularBoards extends Component<{}, {
    boards: Board[]
    loading: boolean
}> {
    constructor(props) {
        super(props);
        this.state = {
            boards: [],
            loading: true
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                {this.state.loading && <ActivityIndicator size="large" style={{backgroundColor: '#000'}}/>}
                <BoardList boards={this.state.boards}/>
            </View>
        );
    }

    async componentDidMount() {
        const allBoards = await FetchBoard.popularBoards()
        allBoards.map((each, idx) => each.key = idx.toString())
        this.setState({
            boards: allBoards,
            loading: false
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
});
