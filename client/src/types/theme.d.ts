import 'styled-components';

interface IPalette {
    main: string
    dark: string
    light: string
    contrastText: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        colors: {
            primary: IPalette
            secondary: IPalette
            common: {
                whiteShade: string
            }
        }
    }
}