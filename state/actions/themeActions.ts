


interface SwitchToDarkTheme{
    type: 'dark-theme'
}
interface SwitchToLightTheme{
    type: 'light-theme'
}

export type themeAction = SwitchToDarkTheme | SwitchToLightTheme