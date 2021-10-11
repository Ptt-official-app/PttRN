import ArticleList from "../component/ArticleList";
import {Article, FetchArticle} from "../model/article";
import React, {Component} from "react";
import {ActivityIndicator, StyleSheet, View, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ArticlesOfBoard extends Component<{
    history: any,
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
