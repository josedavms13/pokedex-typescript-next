
interface SwitchToEnglish{
    type: 'set-to-english'
}
interface SwitchToSpanish{
    type: 'set-to-spanish'
}

export type languageActions = SwitchToEnglish | SwitchToSpanish