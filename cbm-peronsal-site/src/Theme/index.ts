import { PaletteColorOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomPalette {
    black: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

const MyTheme = createTheme({
  palette: {
    black: createColor('#000000'),
  },
});

export default MyTheme;
