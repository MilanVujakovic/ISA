import 'styled-components';

interface Palette {
    main: string
    dark: string
    light: string
    contrastText: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        colors: {
            primary: Palette
            secondary: Palette
            tertiary: {
                main: string
            }
            common: {
                whiteShade: string
                font: string
            }
        }
    }
}