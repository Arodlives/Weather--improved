import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import styles from '@/styles/Home.module.css'
import React from 'react';
//import InputWithButton  from  'components/search'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const bgColor = dark ? 'black' : 'white';

  return (
    <div className={styles.container} style={{ width: '100vw', height: '100vh', backgroundColor: bgColor }}>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        className={styles.icon}
      >
        {dark ? (
           <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
           <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
           <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
            </svg>
        ) : (
          <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
          <path d="M19 11h2m-1 -1v2"></path>
          </svg>
        )}
      </ActionIcon>

    </div>
  );
};

export default Home;

