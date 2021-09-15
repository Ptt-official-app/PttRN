import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Board} from "../model/board";

export default class BoardListItem extends Component<{
    board: Board
}, {}> {
    render() {
        return (
            <View style={styles.listItem}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.text, styles.primaryText]}>{this.props.board.brdname}</Text>
                    <Text style={styles.text}>{this.props.board.nuser}</Text>
                </View>
                <Text style={[styles.text, styles.title]}>{this.props.board.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 14
    },
    text: {
        color: 'white'
    },
    primaryText: {
        flex: 1,
        fontSize: 22
    },
    title: {
        color: '#AAA',
        fontSize: 10
    }
})
