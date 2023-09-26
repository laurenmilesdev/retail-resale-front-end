import type { AppProps } from 'next/app';
import { StyledEngineProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import NavLinkModel from '../models/nav-link';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const pages = [new NavLinkModel('Products', '/products'), new NavLinkModel('Listing Sites', '/')];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledEngineProvider injectFirst>
        <Head>
          <title>{pageProps.title ?? 'Retail Resale'}</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/public/favicon.ico" />
        </Head>

        <Layout pages={pages}>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
    </LocalizationProvider>
  );
}
