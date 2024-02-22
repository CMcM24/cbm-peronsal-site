'use client';
import LandingPage from '@/Pages/LandingPage/LandingPage';
import MyTheme from '@/Theme';
import { ThemeProvider } from '@mui/material';

export default function Home() {
  return (
    <ThemeProvider theme={MyTheme}>
      <LandingPage />
    </ThemeProvider>
  );
}
