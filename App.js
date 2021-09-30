import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import PopularBoards from "./src/view/PopularBoards";
import LoginMain from "./src/view/LoginMain";
import Home from "./src/view/Home";
import ArticlesOfBoard from "./src/view/ArticlesOfBoard";
import {Route, Router} from './react-router';
import * as RNLocalize from 'react-native-localize';
import {setI18nConfig} from "./src/i18n";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";

export default class App extends Component {
    constructor(props) {
        super(props);
        setI18nConfig();
    }

    render() {
        return (
            <Router>
                <View style={styles.container}>
                    <Route exact path="/" component={LoginMain}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/popularBoards" component={PopularBoards}/>
                    <Route exact path="/articles/:bid" component={ArticlesOfBoard}/>
                </View>
            </Router>
        )
    }

    componentDidMount() {
        RNLocalize.addEventListener('change', this.handleLocalizationChange)
    }

    componentWillUnmount() {
        RNLocalize.removeEventListener('change', this.handleLocalizationChange)
    }

    handleLocalizationChange = () => {
        setI18nConfig();
        this.forceUpdate();
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'black',
        height: '100%',
        width: '100%'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
