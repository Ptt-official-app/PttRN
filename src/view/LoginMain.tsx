import React, {Component} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Account} from "../model/account";

export default class LoginMain extends Component<{}, {
    username: string,
    password: string,
    hidePassword: boolean
}> {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hidePassword: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>批踢踢實業坊<br/>Ptt.cc</Text>
                <View style={styles.loginBox}>
                    <TextInput onChangeText={username => this.setState({username})}
                               style={styles.loginInput} placeholder="使用者帳號"/>
                    <View style={styles.passwordOuter}>
                        <TextInput onChangeText={password => this.setState({password})}
                                   style={styles.passwordInput}
                                   placeholder="密碼"
                                   secureTextEntry={this.state.hidePassword}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    hidePassword: !this.state.hidePassword
                                });
                            }}>
                            <Icon
                                name={this.state.hidePassword ? 'visibility' : 'visibility-off'}
                                size={24}
                                color={'#EEE'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Button onPress={this.login} title="登入"/>
            </View>
        );
    }

    login = async () => {
        try {
            await Account.login(this.state.username, this.state.password)
            // @ts-ignore
            this.props.history.push('/home')
        } catch (e) {
            // TODO: Show error message
            console.error(e)
        }
    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 60,
        textAlignVertical: 'center'
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
