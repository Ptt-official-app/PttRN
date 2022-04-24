import { NativeModules } from 'react-native'
import jest from 'jest'
import React from 'react'

/**
 * monkey patching the locale to avoid the error:
 * Something went wrong initializing the native ReactLocalization module
 * https://gist.github.com/MoOx/08b465c3eac9e36e683929532472d1e0
 */

NativeModules.RNLocalize = {
  initialConstants: {
    country: 'TW',
    currencies: 'TWD',
    locales: 'zhTW',
    temperatureUnit: 'C',
    timeZone: 'Asia/Taipei',
    uses24HourClock: false,
    usesMetricSystem: true,
    usesAutoDateAndTime: true,
    usesAutoTimeZone: true,
  }
}
