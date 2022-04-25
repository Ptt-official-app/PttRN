import React from "react"
import { Text, View } from "react-native"
import styles from './ErrMsg.style'

type Props = {
    err: string | null | undefined
}

export default (props: Props) => {
    return (
        <View style={[props.err ? styles.err : styles.hide]}>
            <Text>{props.err}</Text>
        </View>
    )
}
