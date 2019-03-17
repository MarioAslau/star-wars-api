const colors = {
  background: {
    darkSide: '#191919',
    black: '#1c1e22',
    darkBlue: '#282c34;',
    dark: 'rgba(0, 0, 0, 0.3)',
    lightRed: '#eb524a',
    white: '#dee0e2',
  },
  text: {
    black: '#000000',
    grey: '#999',
    white: ' #fff',
    gold: '#fae042',
  },
  white: {
    base: '#fff',
    light: '#F7F7F7',
    grey: '#cecece',
  },
  black: {
    base: '#1B1B1B',
    light: '#1B1B1B',
  },
};

const shadow = {
  dark: 'rgba(100, 100, 100, 0.2)',
  darkMedium: 'rgba(100, 100, 100, 0.4)',
  light: 'rgba(255, 255, 255, 0.2)',
};

const lightTheme = {
  background: {
    primary: `${colors.background.darkBlue}`,
    secondary: `${colors.background.dark}`,
    black: `${colors.background.black}`,
    lightRed: `${colors.background.lightRed}`,
    white: `${colors.background.white}`,
  },
  shadow: {
    dark: `${shadow.dark}`,
    medium: `${shadow.darkMedium}`,
    light: `${shadow.light}`,
  },
  text: {
    black: `${colors.text.black}`,
    grey: `${colors.text.grey}`,
    white: `${colors.text.white}`,
    gold: `${colors.text.gold}`,
  },
};

const darkTheme = {
  background: {
    primary: `${colors.background.darkSide}`,
    secondary: `${colors.background.dark}`,
    black: `${colors.background.black}`,
    lightRed: `${colors.background.lightRed}`,
    white: `${colors.background.white}`,
  },
  shadow: {
    dark: `${shadow.dark}`,
    medium: `${shadow.darkMedium}`,
    light: `${shadow.light}`,
  },
  text: {
    black: `${colors.text.black}`,
    grey: `${colors.text.grey}`,
    white: `${colors.text.white}`,
    gold: `${colors.text.gold}`,
  },
};

export { lightTheme, darkTheme };
