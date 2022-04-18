import React from "react";
import {Article} from "../model/article";
import {FlatList, StyleSheet, View} from "react-native";
import ArticleListItem from "./ArticleListItem";

export default function ArticleList(props) {
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
        flexDirection: 'column'
    },
})
