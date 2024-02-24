import { useMediaQuery } from '@mui/material';
import MyTheme from '.';

type tSizeQuery = {
  isXS: boolean;
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
};
const useScreenSize = () => {
  const sizeQueries: tSizeQuery = {
    isXS: useMediaQuery(MyTheme.breakpoints.between(0, 600)),
    isSM: useMediaQuery(MyTheme.breakpoints.between(600, 900)),
    isMD: useMediaQuery(MyTheme.breakpoints.between(900, 1200)),
    isLG: useMediaQuery(MyTheme.breakpoints.between(1200, 1500)),
    isXL: useMediaQuery(MyTheme.breakpoints.between(1500, 9999)),
  };
  const determineSize = (obj: tSizeQuery) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value) {
        return key as keyof tSizeQuery;
      }
    }
    return 'isXL';
  };
  return {
    ...sizeQueries,
    screensize: determineSize(sizeQueries),
  };
};

export default useScreenSize;
