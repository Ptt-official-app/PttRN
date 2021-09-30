const memoize = require("lodash.memoize");
const i18nJS = require("i18n-js");
const RNLocalize = require("react-native-localize");

const translationGetters = {
    zhTW: () => require('../src/locales/zhTW.json'),
}

const translate = memoize(
    (key, config) => i18nJS.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
)

const setI18nConfig = () => {
    const fallback = {languageTag: 'zhTW'}
    const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback
    translate.cache.clear()
    i18nJS.translations = {[languageTag]: translationGetters[languageTag]()}
    i18nJS.locale = languageTag
}

export {RNLocalize, translate as $t, setI18nConfig}
