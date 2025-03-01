import { definePreset, palette } from '@primeuix/themes'
import Material from '@primeuix/themes/material'

export const CustomPreset = definePreset(Material, {
  semantic: {
    primitive: {
      50: '#e4f1fc',
      100: '#bddcf8',
      200: '#94c7f3',
      300: '#6cb1ed',
      400: '#51a0ea',
      500: '#3c91e6',
      600: '#3783d8',
      700: '#3172c5',
      800: '#2c61b3',
      900: '#224394',
    },
    colorScheme: {
      light: {
        surface: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#f0f0f0',
          400: '#dedede',
          500: '#c2c2c2',
          600: '#979797',
          700: '#818181',
          800: '#606060',
          900: '#3c3c3c',
        },
      },
      dark: {
        surface: {
          50: '#f5f7ef',
          100: '#eaede5',
          200: '#dcdfd7',
          300: '#c9cbc3',
          400: '#a3a69e',
          500: '#82847d',
          600: '#5b5d57',
          700: '#494b44',
          800: '#2b2d27',
          900: '#090c02',
        },
      },
    },
  },
})

export const CustomPreset2 = definePreset(Material, {
  primitive: {
    dominant: palette('7692ff'),
    // {
    //   50: '#eaeefd',
    //   100: '#c0cdf8',
    //   200: '#96acf4',
    //   300: '#6c8bef',
    //   400: '#426aeb',
    //   500: '#1949e6',
    //   600: '#143bbd',
    //   700: '#102e93',
    //   800: '#0b2169',
    //   900: '#07143f',
    //   950: '#020715',
    // },
    secondary: palette('21897E'),
    // {
    //   50: '#eff1f8',
    //   100: '#cfd5ea',
    //   200: '#aebadc',
    //   300: '#8e9ece',
    //   400: '#6e82c0',
    //   500: '#4d67b2',
    //   600: '#3f5491',
    //   700: '#314171',
    //   800: '#232f51',
    //   900: '#151c30',
    //   950: '#070910',
    // },
    background: palette('040f13'),
    //background: palette('090c02'),
    // {
    //   50: '#f7fceb',
    //   100: '#e6f5c3',
    //   200: '#d6ee9c',
    //   300: '#c5e874',
    //   400: '#b4e14c',
    //   500: '#a4db24',
    //   600: '#86b31e',
    //   700: '#86b31e',
    //   800: '#4a6311',
    //   900: '#2d3c0a',
    //   950: '#0f1403',
    // },
    font: palette('fafdfe'),
    // {
    //   50: '#e8fff6',
    //   100: '#b9ffe3',
    //   200: '#8bffd1',
    //   300: '#5dffbe',
    //   400: '#2effac',
    //   500: '#00ff99',
    //   600: '#00d17d',
    //   700: '#00a261',
    //   800: '#007446',
    //   900: '#00462a',
    //   950: '#00170e',
    // },
  },
  semantic: {
    primary: {
      50: '{dominant.50}',
      100: '{dominant.100}',
      200: '{dominant.200}',
      300: '{dominant.300}',
      400: '{dominant.400}',
      500: '{dominant.500}',
      600: '{dominant.600}',
      700: '{dominant.700}',
      800: '{dominant.800}',
      900: '{dominant.900}',
      950: '{dominant.950}',
    },
    colorScheme: {
      light: {
        surface: {
          50: '{background.950}',
          100: '{background.900}',
          200: '{background.800}',
          300: '{background.700}',
          400: '{background.600}',
          500: '{background.500}',
          600: '{background.400}',
          700: '{background.300}',
          800: '{background.200}',
          900: '{background.100}',
          950: '{background.50}',
          inverted: '#000',
        },
        primary: {
          color: '{dominant.700}',
          contrastColor: '#ffffff',
          hoverColor: '{dominant.800}',
          activeColor: '{dominant.700}',
        },
        text: {
          color: '#000',
          hoverColor: '{surface.800}',
          mutedColor: '{surface.400}',
          hoverMutedColor: '{surface.600}',
          inverted: '#fff',
        },
        content: {
          background: '{surface.50}',
        },
      },
      dark: {
        surface: {
          50: '{background.50}',
          100: '{background.100}',
          200: '{background.200}',
          300: '{background.300}',
          400: '{background.400}',
          500: '{background.500}',
          600: '{background.600}',
          700: '{background.700}',
          800: '{background.800}',
          900: '{background.900}',
          950: '{background.950}',
          inverted: '#fff',
        },
        primary: {
          color: '{dominant.300}',
          contrastColor: '{dominant.900}',
          hoverColor: '{dominant.400}',
          activeColor: '{dominant.300}',
        },
        text: {
          color: '#fff',
          hoverColor: '{surface.800}',
          mutedColor: '{surface.200}',
          hoverMutedColor: '{surface.600}',
          inverted: '#000',
        },
        content: {
          background: '{surface.900}',
        },
      },
    },
  },
  components: {
    chip: {
      colorScheme: {
        dark: {
          root: {
            // background: '{primary.900}',
            // color: '#f00',
            background: '{primary.900}',
            color: '{text.50}',
          },
        },
      },
    },
  },
  css: ({ dt }) => `
    /* Global CSS */
    .p-inverted {
      --text: ${dt('text.inverted')};

      background: ${dt('surface.inverted')};
      color: ${dt('text.inverted')};
    }

    html {
      --text: ${dt('text')};
    }
  `,
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
