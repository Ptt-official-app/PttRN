//https://github.com/zoontek/react-native-localize/blob/master/example/src/SyncExample.js
import memoize from 'lodash.memoize'
import i18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

const translationGetters = {
    zhTW: () => require('../src/locales/zhTW.json'),
}

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => {
        if (!config) {
            return key
        }
        return key + JSON.stringify(config)
    },
)

const setI18nConfig = () => {
    const fallback = { languageTag: 'zhTW' }
    const { languageTag } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback
    translate.cache.clear()
    i18n.translations = { [languageTag]: translationGetters[languageTag]() }
    i18n.locale = languageTag
}

export { RNLocalize, translate as $t, setI18nConfig }
