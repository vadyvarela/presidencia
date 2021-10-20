import '../../styles/tailwind.css'
import '../../styles/globals.css'
import '../../styles/styles.css'
import { DefaultSeo } from 'next-seo'
import ScrollToTop from '../components/Main/ScrollToTop'

function MyApp({ Component, pageProps, router  }) {
  const url = `https://presidencia.vercel.app/${router.route}`
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Presidencia"
        openGraph={{
          type: 'website',
          locale: 'pt',
          url,
          description: 'Descrisao...',
          site_name: 'Presidente | Cabo Verde',
          images: [],
        }}
        canonical={url}
      />
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  )
}

export default MyApp
