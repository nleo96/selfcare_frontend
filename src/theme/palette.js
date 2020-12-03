import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const dark_selfcare = '#4cada4';
const main_selfcare = '#5cb7ae';
const light_selfcare = '#6ebfb7';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: dark_selfcare,
    main: main_selfcare,
    light: light_selfcare
  },
  secondary: {
    contrastText: white,
    dark: dark_selfcare,
    main: main_selfcare,
    light: light_selfcare
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: dark_selfcare,
    main: main_selfcare,
    light: light_selfcare
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]

    /* primary: dark_selfcare,
    secondary: main_selfcare,
    link: light_selfcare*/
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  //icon: colors.blueGrey[600],
  icon: main_selfcare,
  divider: colors.grey[200]
};
