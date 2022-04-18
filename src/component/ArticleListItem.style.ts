import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 14
    },
    text: {
        color: 'white'
    },
    primaryText: {
        flex: 1,
        fontSize: 20
    },
    secondaryText: {
        fontSize: 16,
        color: '#AAA',
        marginRight: 10
    },
    title: {
        color: '#AAA',
        fontSize: 10
    },
    firstRow: {
        flexDirection: 'row',
        textAlignVertical: 'center'
    },
    secondRow: {
        flexDirection: 'row',
    },
    thirdRow: {
        flexDirection: 'row',
    },
    icon: {
        color: 'white',
        marginRight: 3,
        textAlignVertical: 'center'
    }
})

export default styles
