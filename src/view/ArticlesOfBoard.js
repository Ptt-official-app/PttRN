import ArticleList from "../component/ArticleList";
import {Article, FetchArticle, extractArticles} from "../model/article";
import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, View, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const FETCH_PAGE_SIZE = 10;

export default class ArticlesOfBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextStartIndex: '',
            articles: [],
            loading: true
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <Icon style={[styles.backIcon]} name={'arrow-back-ios'}
                          size={30} onPress={this.goBack.bind(this)}/>
                    <Text style={[styles.boardName]}>{this.props.match.params.bid}</Text>
                    {this.state.loading ? <ActivityIndicator size="large" style={[styles.loadingCircle]}/>  : null}
                </View>
                <ArticleList
                    style={[styles.articlesContainer]}
                    articles={this.state.articles}
                    scroll={this.fetchArticles.bind(this)}/>
            </View>
        );
    }

    async componentDidMount() {
        this.fetchArticles();
    }

    async fetchArticles() {
        this.setState({
            loading: true
        })
        const bid = this.props.match.params.bid;
        const res = await FetchArticle.inBoardPaged(bid, this.state.nextStartIndex, FETCH_PAGE_SIZE);
        const articles = extractArticles(res);
        this.setState({
            nextStartIndex: res.next_idx,
            articles: [...this.state.articles, ...articles],
            loading: false
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 14,
    },
    boardName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
        flex: 1,
    },
    loadingCircle: {
    },
    backIcon: {
        color: 'white',
        textAlignVertical: 'center'
    },
    articlesContainer: {
        flexShrink: 1,
    },
});
