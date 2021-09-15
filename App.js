import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Route, Router} from './react-router';
import PopularBoards from "./src/view/PopularBoards";
import LoginMain from "./src/view/LoginMain";
import Home from "./src/view/Home";

const App = () => (
    <Router>
        <View style={styles.container}>
            <Route exact path="/" component={LoginMain}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/popularBoards" component={PopularBoards}/>
        </View>
    </Router>
);

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

export default App;
