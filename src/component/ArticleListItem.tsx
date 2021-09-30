import React, {Component} from "react";
import {Article} from "../model/article";
import autoBind from 'react-autobind';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

export default class ArticleListItem extends Component<{
    article: Article
}, {}> {
    constructor(props) {
        super(props);
        autoBind(this);
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.openArticle}>
                <View style={styles.listItem}>
                    <View style={styles.firstRow}>
                        <Text style={[styles.text, styles.primaryText]}>{this.props.article.title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    openArticle() {

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
