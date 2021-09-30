import React, {Component} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import LoginMain from "./LoginMain";
import PopularBoards from "./PopularBoards";
import {NavigationScreenProp} from "react-navigation";

const TopNavigatorContext = React.createContext(null);

export default class Home extends Component<{
    navigation: NavigationScreenProp<any>
}, {}> {
    render() {
        const Tab = createBottomTabNavigator();
        return (
            <NavigationContainer independent={true}>
                <TopNavigatorContext.Provider value={this.props.navigation}>
                    <Tab.Navigator
                        initialRouteName={'熱門看板'}
                        screenOptions={{headerShown: false}}
                    >
                        <Tab.Screen name="熱門看板" component={PopularBoards}/>
                        <Tab.Screen name="個人頁面" component={LoginMain}/>
                    </Tab.Navigator>
                </TopNavigatorContext.Provider>
            </NavigationContainer>
        );
    }
}

export {TopNavigatorContext}
