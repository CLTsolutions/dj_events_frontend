// metadata for seo from layout
import Layout from '@/components/Layout'
// link is similar to link in react router dom
// import Link from 'next/link'

// using uppercase page name convention
export default function AboutPage() {
  return (
    // can change title on individual pages (while still importing rest of metadata)
    // can pass keywords and description, too
    <Layout title='About DJ Events'>
      {/* use link over <a> in inner pages */}
      {/* <Link href='/'>Home</Link> */}
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events.</p>
      <p>Version: 1.0.0</p>
    </Layout>
  )
}
