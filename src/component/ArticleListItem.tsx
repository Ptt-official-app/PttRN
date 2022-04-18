import React from "react";
//import { Article } from "../model/article";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import utils from "../util/utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from './ArticleListItem.style'

export default function ArticleListItem(props) {
    const a = props.article;
    const createTime = new Date(a.create_time * 1000);
    return (
        <TouchableWithoutFeedback onPress={openArticle}>
            <View style={styles.listItem}>
                <View style={styles.firstRow}>
                    <Text style={[styles.text, styles.secondaryText]}>[{a.class}]</Text>
                    <Icon style={[styles.icon]} name={'schedule'} size={16} />
                    <Text style={[styles.text, styles.secondaryText]}>{
                        `${utils.timestampToMonth(createTime)}-${utils.timestampToDay(createTime)}`}</Text>
                    <Icon style={[styles.icon]} name={'person'} size={16} />
                    <Text style={[styles.text, styles.secondaryText]}>{a.owner}</Text>
                </View>
                <View style={styles.secondRow}>
                    <Text style={[styles.text, styles.primaryText]}>{a.title}</Text>
                </View>
                <View style={styles.thirdRow}>
                    <Icon style={[styles.icon]} name={'upgrade'} size={16} />
                    <Text style={[styles.text, styles.secondaryText]}>{a.recommend}</Text>
                    <Icon style={[styles.icon]} name={'chat-bubble-outline'} size={16} />
                    <Text style={[styles.text, styles.secondaryText]}>{a.n_comments}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const openArticle = () => {
}
