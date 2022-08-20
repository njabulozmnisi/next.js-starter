import '../styles/globals.css'
import * as React from 'react';
import Head from 'next/head';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import theme from '../src/core/lib/theme';
import * as gtag from '../src/core/lib/gtag';
import Layout from '../src/components/layout/layout'
import createEmotionCache from '../src/core/lib/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();

  useEffect(() => {
    
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }

  }, [router.events])
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js

  if (typeof window !== 'undefined') { 
    window.gtag('event', metric.name, {
      event_category:
      metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // values must be integers
      event_label: metric.id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    })
  }

}

export default MyApp