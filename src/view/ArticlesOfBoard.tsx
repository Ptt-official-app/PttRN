import ArticleList from "../component/ArticleList";
import {Article, FetchArticle} from "../model/article";
import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

export default class ArticlesOfBoard extends Component<{
    match: {
        params: {
            bid: string
        }
    }
}, {
    articles: Article[],
    loading: boolean,
}> {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                {this.state.loading && <ActivityIndicator size="large" style={{backgroundColor: '#000'}}/>}
                <ArticleList articles={this.state.articles}/>
            </View>
        );
    }

    async componentDidMount() {
        const bid = this.props.match.params.bid;
        const articles = await FetchArticle.ofBoard(bid)
        this.setState({
            articles,
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
