import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import LoginMain from "./LoginMain";
import PopularBoards from "./PopularBoards";

export default function Home() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={'熱門看板'}
                screenOptions={{headerShown: false}}
            >
                <Tab.Screen name={'熱門看板'} component={PopularBoards}/>
                <Tab.Screen name={'個人頁面'} component={LoginMain}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
