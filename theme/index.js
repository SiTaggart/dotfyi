import { DefaultTheme } from '@twilio-paste/theme';
export const PortfolioTheme = {
  ...DefaultTheme,
  fonts: { fontFamilyText: '"Inter", sans-serif' },
  fontSizes: {
    fontSize10: '14px',
    fontSize20: '16px',
    fontSize30: '18px',
    fontSize40: '20px',
    fontSize50: '24px',
    fontSize60: '28px',
    fontSize70: '32px',
    fontSize80: '40px',
    fontSize90: '44px',
    fontSize100: '48px',
    fontSize110: '72px',
  },
  // Very messy overrides. Need to systemize this better.
  fontWeights:{
    fontWeightBold: `756`
  },
  colors:{
    colorBackgroundBrand: `#fce2e0`,
    colorBackgroundBrandHighlight: `#F03838`,
    colorTextLink: `#2c3e50`
  },
  // backgroundColors:{
  //   colorBackgroundBrand: `#2c3e50`,
  //   colorBackgroundBrandHighlight: `#F03838`
  // },
  textColors:{
    colorText: `#2c3e50`,
  }, 
  lineHeights: {
    lineHeight0: '0',
    lineHeight10: '24px',
    lineHeight20: '28px',
    lineHeight30: '28px',
    lineHeight40: '28px',
    lineHeight50: '32px',
    lineHeight60: '36px',
    lineHeight70: '40px',
    lineHeight80: '52px',
    lineHeight90: '56px',
    lineHeight100: '60px',
    lineHeight110: '92px',
  },
  space: {
    space0: '0',
    space10: '0.5rem',
    space20: '0.75rem',
    space30: '1rem',
    space40: '1.25rem',
    space50: '1.5rem',
    space60: '1.75rem',
    space70: '2rem',
    space80: '2.25rem',
    space90: '2.5rem',
    space100: '2.75rem',
    space110: '3rem',
    space120: '3.25rem',
    space130: '3.5rem',
    space140: '3.75rem',
    space150: '4rem',
    space160: '4.25rem',
    space170: '4.5rem',
    space180: '4.75rem',
    space190: '5rem',
    space200: '5.25rem',
  },
};      