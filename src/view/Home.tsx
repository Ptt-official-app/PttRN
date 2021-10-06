import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import LoginMain from "./LoginMain";
import PopularBoards from "./PopularBoards";
import { $t } from "../i18n";

export default function Home() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={$t('home.popularBoard')}
                screenOptions={{headerShown: false}}
            >
                <Tab.Screen name={$t('home.popularBoard')} component={PopularBoards}/>
                <Tab.Screen name={$t('home.myPage')} component={LoginMain}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
