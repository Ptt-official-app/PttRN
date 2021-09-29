import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Board} from "../model/board";
import Icon from "react-native-vector-icons/MaterialIcons";
import utils from "../util/utils";

export default class BoardListItem extends Component<{
    board: Board
}, {}> {
    render() {
        return (
            <View style={styles.listItem}>
                <View style={styles.firstRow}>
                    <Text style={[styles.text, styles.primaryText]}>{this.props.board.brdname}</Text>
                    <Icon style={{marginRight: 3}}
                          name={this.props.board.nuser < 100 ? 'person' : 'people'}
                          size={24}
                          color={this.iconColor(this.props.board.nuser)}/>
                    <Text style={styles.text}>{utils.numberWithCommas(this.props.board.nuser)}</Text>
                </View>
                <Text style={[styles.text, styles.title]}>{this.props.board.title}</Text>
            </View>
        );
    }
    iconColor(nuser) {
        // TODO
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
    },
    firstRow: {
        flexDirection: 'row',
        textAlignVertical: 'center'
    }
})
