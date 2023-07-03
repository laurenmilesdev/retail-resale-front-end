import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Tab from '../models/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [pageValue, setPageValue] = useState<number>(0);
  const pages = [
    new Tab('Home', 'Home', <>Home</>),
    new Tab('Products', 'Products', <>Products</>),
  ];

  function handlePageChange(event: React.SyntheticEvent, newValue: number) {
    setPageValue(newValue);
  }

  return (
    <>
      <Head>
        <title>{`Retail Resale${pageProps.title ? ` - ${pageProps.title as string}` : ''}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Navigation
        labels={pages.map((page) => page.label)}
        pageValue={pageValue}
        handleChange={handlePageChange}
      />

      <Component {...pageProps} pageValue={pageValue} pages={pages} />

      <Footer />
    </>
  );
}
