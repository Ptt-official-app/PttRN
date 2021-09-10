import React, {Component} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Account} from "../model/account";

export default class LoginMain extends Component<{}, {
    username: string,
    password: string,
    hidePassword: boolean
}> {
    constructor(props) {
        super(props);
        this.state ={
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
                    <TextInput onChangeText={password => this.setState({password})}
                               style={styles.loginInput} placeholder="密碼"
                               secureTextEntry={this.state.hidePassword}
                    />
                </View>
                <Button onPress={this.login} title="登入" />
            </View>
        );
    }

    login = async () => {
        try {
            await Account.login(this.state.username, this.state.password)
            // TODO: Move to home view
        } catch (e) {
            // TODO: Show error message
            console.error(e.response.status, e.response.data, e.response)
        }
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
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
        margin: 5
    }
})
