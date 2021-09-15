import React, {Component} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import LoginMain from "./LoginMain";
import PopularBoards from "./PopularBoards";

export default class Home extends Component<{}, {}> {
    render() {
        const Tab = createBottomTabNavigator();
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={'熱門看板'}
                    screenOptions={{headerShown: false}}
                >
                    <Tab.Screen name="熱門看板" component={PopularBoards}/>
                    <Tab.Screen name="個人頁面" component={LoginMain}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
