import { StyleSheet } from "react-native"

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

export default styles
