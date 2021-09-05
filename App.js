import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Route, Router} from './react-router';
import AllBoards from "./src/components/AllBoards";

const About = () => <Text>About Component</Text>;

const App = () => (
  <Router>
    <View style={styles.nav}>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/about">
        <Text>About</Text>
      </Link>
    </View>
    <View style={styles.container}>
      <Route exact path="/" component={AllBoards} />
      <Route exact path="/allBoards" component={AllBoards} />
      <Route path="/about" component={About} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
