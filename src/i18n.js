//https://github.com/zoontek/react-native-localize/blob/master/example/src/SyncExample.js
import memoize from 'lodash.memoize'
import i18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

const translationGetters = {
    zhTW: () => require('../src/locales/zhTW.json'),
}

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
)

const setI18nConfig = () => {
    const fallback = {languageTag: 'zhTW'}

    const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback
    translate.cache.clear()
    console.log('setI18nConfig: languageTag:', languageTag)
    i18n.translations = {[languageTag]: translationGetters[languageTag]()}
    i18n.locale = languageTag
}

export {RNLocalize, translate as $t, setI18nConfig}
