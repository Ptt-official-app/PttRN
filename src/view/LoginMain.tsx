import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Account} from "../model/account";
import {$t} from "../i18n";

export default function LoginMain(props: { history: any }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const login = async () => {
        try {
            await Account.login(username, password)
            props.history.push('/home');
        } catch (e) {
            // TODO: Show error message
            console.error(e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>{$t('login.logoText')}</Text>
            <View style={styles.loginBox}>
                <TextInput onChangeText={username => setUsername(username)}
                           style={styles.loginInput} placeholder={$t('login.username')}/>
                <View style={styles.passwordOuter}>
                    <TextInput onChangeText={password => setPassword(password)}
                               style={styles.passwordInput}
                               placeholder={$t('login.password')}
                               secureTextEntry={hidePassword}
                    />
                    <TouchableOpacity
                        onPress={() => {setHidePassword(!hidePassword)}}>
                        <Icon
                            name={hidePassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            color={'#EEE'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Button onPress={login} title={$t('login.login')}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 60,
        textAlignVertical: 'center',
        backgroundColor: 'black',
        flex: 1
    },
    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
        marginVertical: 10
    },
    loginBox: {
        marginVertical: 30
    },
    loginInput: {
        color: 'white',
        backgroundColor: 'rgb(50, 50, 50)',
        fontSize: 20,
        padding: 5,
        margin: 5,
    },
    passwordOuter: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(50, 50, 50)',
        padding: 5,
        margin: 5,
    },
    passwordInput: {
        flex: 1,
        color: 'white',
        backgroundColor: 'rgb(50, 50, 50)',
        fontSize: 20,
    },
})
