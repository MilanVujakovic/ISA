import { DefaultTheme } from 'styled-components';

export const myTheme: DefaultTheme = {
    borderRadius: '5%',
    colors: {
        primary: {
            main: '#006d77',
            dark: '#01575e',
            light: '#83c5be',
            contrastText: '#f1faee'
        },
        secondary: {
            main: '#b56576',
            dark: '#91505e',
            light: '#cc7084',
            contrastText: '#ffffff'
        },
        tertiary: {
            main: '#32dfba'
        },
        common: {
            whiteShade: '#f2f0f0',
            font: '#dbd9d9'
        }
    }
}

export const muiTheme = {
    typography: {
        htmlFontSize: 10,
    },
    palette: {
        primary: {
            main: '#006d77',
            dark: '#01575e',
            light: '#83c5be',
            contrastText: '#f1faee'
        },
        secondary: {
            main: '#b56576',
            dark: '#91505e',
            light: '#cc7084',
            contrastText: '#ffffff'
        }
    }
}