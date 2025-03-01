import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

export const CustomPreset = definePreset(Material, {
    semantic: {
        primitive: {
            50: "#e4f1fc",
            100: "#bddcf8",            
            200: "#94c7f3",
            300: "#6cb1ed",
            400: "#51a0ea",
            500: "#3c91e6",
            600: "#3783d8",
            700: "#3172c5",
            800: "#2c61b3",
            900: "#224394"
        },
        colorScheme: {
            light: {
                surface: {
                    50: "#ffffff",
                    100: "#fafafa",            
                    200: "#f5f5f5",
                    300: "#f0f0f0",
                    400: "#dedede",
                    500: "#c2c2c2",
                    600: "#979797",
                    700: "#818181",
                    800: "#606060",
                    900: "#3c3c3c"
                }
            },
            dark: {
                surface: {
                    50: "#f5f7ef",
                    100: "#eaede5",
                    200: "#dcdfd7",
                    300: "#c9cbc3",
                    400: "#a3a69e",
                    500: "#82847d",
                    600: "#5b5d57",
                    700: "#494b44",
                    800: "#2b2d27",
                    900: "#090c02"
                }
            }
        }
    }
})

/*
To retrieve the theme, use https://zenoo.github.io/mui-theme-creator/

With the following:

palette: {
    mode: 'dark',
    primary: {
      main: '#3c91e6',
    },
    secondary: {
      main: '#04b768',
    },
    success: {
      main: '#3be441',
    },
    background: {
      paper: '#090C02',
      default: '#090C02',
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#3c91e6',
    },
},

In case you need the full color palette, use https://m2.material.io/inline-tools/color/
*/