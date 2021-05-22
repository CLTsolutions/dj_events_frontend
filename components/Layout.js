// layout component prevents us from having to put metadata in every page
// head comes from nextjs
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

// passing children because layout wraps page content (children is whatever is wrapped))
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      {/* want header and footer on every page so putting in layout */}
      <Header />

      {/* Only want image on homepage so using router */}
      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

// below is React (nothing to do with Next itself)
Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events.',
  keywords: 'music, dj, edm, events',
}
