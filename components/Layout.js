// layout component prevents us from having to put below in every page
import Head from 'next/head'
import styles from '../styles/Layout.module.css'

// children because layout wraps page content (children is whatever is wrapped))
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <div className={styles.container}>{children}</div>
    </div>
  )
}

// below is React (nothing to do with Next itself)
Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events.',
  keywords: 'music, dj, edm, events',
}
