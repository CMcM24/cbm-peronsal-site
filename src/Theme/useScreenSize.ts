import { useMediaQuery } from '@mui/material';
import MyTheme from '.';

const useScreenSize = () => {
  return {
    isXS: useMediaQuery(MyTheme.breakpoints.between(0, 600)),
    isSM: useMediaQuery(MyTheme.breakpoints.between(600, 900)),
    isMD: useMediaQuery(MyTheme.breakpoints.between(900, 1200)),
    isLG: useMediaQuery(MyTheme.breakpoints.between(1200, 1500)),
    isXL: useMediaQuery(MyTheme.breakpoints.between(1500, 9999)),
  };
};

export default useScreenSize;
