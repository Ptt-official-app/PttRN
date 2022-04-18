export type ColorMap = number

export interface Color {
    foreground: ColorMap
    background: ColorMap
    blink: boolean
    highlight: boolean
    reset: boolean
}

export const COLOR_FOREGROUND_BLACK: ColorMap = 30
export const COLOR_FOREGROUND_RED: ColorMap = 31
export const COLOR_FOREGROUND_GREEN: ColorMap = 32
export const COLOR_FOREGROUND_YELLOW: ColorMap = 33
export const COLOR_FOREGROUND_BLUE: ColorMap = 34
export const COLOR_FOREGROUND_MAGENTA: ColorMap = 35
export const COLOR_FOREGROUND_CYAN: ColorMap = 36
export const COLOR_FOREGROUND_WHITE: ColorMap = 37
export const COLOR_BACKGROUND_BLACK: ColorMap = 40
export const COLOR_BACKGROUND_RED: ColorMap = 41
export const COLOR_BACKGROUND_GREEN: ColorMap = 42
export const COLOR_BACKGROUND_YELLOW: ColorMap = 43
export const COLOR_BACKGROUND_BLUE: ColorMap = 44
export const COLOR_BACKGROUND_MAGENTA: ColorMap = 45
export const COLOR_BACKGROUND_CYAN: ColorMap = 46
export const COLOR_BACKGROUND_WHITE: ColorMap = 47
export const COLOR_INVALID: ColorMap = -1

export const DEFAULT_COLOR: Color = {
    foreground: COLOR_FOREGROUND_WHITE,
    background: COLOR_BACKGROUND_BLACK,
    blink: false,
    highlight: false,
    reset: false,
}

export const INVALID_COLOR: Color = {
    foreground: COLOR_INVALID,
    background: COLOR_INVALID,
    blink: false,
    highlight: false,
    reset: false,
}

export const RESET_COLOR: Color = {
    foreground: COLOR_FOREGROUND_WHITE,
    background: COLOR_BACKGROUND_BLACK,
    blink: false,
    highlight: false,
    reset: true,
}
