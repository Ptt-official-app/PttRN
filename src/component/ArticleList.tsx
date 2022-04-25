import React from "react"
import { ArticleSummary } from "../model/article"
import { FlatList, View } from "react-native"
import ArticleListItem from "./ArticleListItem"
import styles from './ArticleList.style'

type Props = {
    articles: ArticleSummary[]
    scroll: () => any
}

export default (props: Props) => {
    return (
        <View style={styles.page}>
            <FlatList<ArticleSummary>
                data={props.articles}
                renderItem={(each) => (<ArticleListItem key={each.index} article={each.item} />)}
                onEndReached={props.scroll}
            />
        </View>
    )
}
