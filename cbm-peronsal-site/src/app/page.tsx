'use client';
import Image from 'next/image';
import styles from './page.module.css';
import LandingPage from '@/Pages/LandingPage/LandingPage';
import { ThemeProvider } from '@mui/material';
import MyTheme from '@/Theme';

export default function Home() {
  return (
    <ThemeProvider theme={MyTheme}>
      <LandingPage />
    </ThemeProvider>
  );
}
