import React from "react";
import {Article} from "../model/article";
import {FlatList, StyleSheet, View} from "react-native";
import ArticleListItem from "./ArticleListItem";

export default function ArticleList(props: { articles: Article[], scroll: () => void }) {
    return (
        <View style={styles.page}>
            <FlatList
                data={props.articles}
                renderItem={({item}) => (<ArticleListItem article={item}/>)}
                onEndReached={props.scroll}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#000',
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    },
})
