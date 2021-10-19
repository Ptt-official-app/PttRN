import ArticleList from "../component/ArticleList";
import {Article, FetchArticle, extractArticles} from "../model/article";
import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, View, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const FETCH_PAGE_SIZE = 10;

export default class ArticlesOfBoard extends Component<{
    history: any,
    match: {
        params: {
            bid: string
        }
    }
}, {
    nextStartIndex: string,
    articles: Article[],
    loading: boolean,
}> {
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
                <View style={{flexDirection: 'row', marginHorizontal: 14}}>
                    <Icon style={[styles.backIcon]} name={'arrow-back-ios'}
                          size={30} onPress={this.goBack.bind(this)}/>
                    <Text style={[styles.boardName]}>{this.props.match.params.bid}</Text>
                </View>
                <ArticleList articles={this.state.articles} scroll={this.fetchArticles.bind(this)}/>
                {this.state.loading && <ActivityIndicator size="large" style={{backgroundColor: '#000'}}/>}
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
        justifyContent: "center"
    },
    boardName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5
    },
    backIcon: {
        color: 'white',
        textAlignVertical: 'center'
    }
});
