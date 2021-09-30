import React from "react";
import {Article} from "../model/article";
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

export default function ArticleListItem(props: { article: Article }) {
    return (
        <TouchableWithoutFeedback onPress={openArticle}>
            <View style={styles.listItem}>
                <View style={styles.firstRow}>
                    <Text style={[styles.text, styles.primaryText]}>{props.article.title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function openArticle() {

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
