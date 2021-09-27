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
                    <Icon style={{marginRight: 3}} name={'person'} size={24}
                          color={this.iconColor(this.props.board.nuser)}/>
                    <Text style={styles.text}>{utils.numberWithCommas(this.props.board.nuser)}</Text>
                </View>
                <Text style={[styles.text, styles.title]}>{this.props.board.title}</Text>
            </View>
        );
    }
    iconColor(nuser) {
        // TODO
        if (nuser < 11) {
            return '#CCC'
        }
        return '#F00'
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
