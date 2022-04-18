import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 14,
    },
    boardName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
        flex: 1,
    },
    loadingCircle: {
    },
    backIcon: {
        color: 'white',
        textAlignVertical: 'center'
    },
    articlesContainer: {
        flexShrink: 1,
    },
})

export default styles