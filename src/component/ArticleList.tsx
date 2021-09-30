import React, {Component} from "react";
import {Article} from "../model/article";
import {FlatList, StyleSheet, View} from "react-native";
import ArticleListItem from "./ArticleListItem";

export default class ArticleList extends Component<{
    articles: Article[]
}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.page}>
                <FlatList data={this.props.articles} renderItem={this.renderItem}/>
            </View>
        );
    }

    renderItem = ({item}: { item: Article }) => (
        <ArticleListItem article={item}/>
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
