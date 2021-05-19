import Layout from '@/components/Layout'
// import Link from 'next/link'

export default function AboutPage() {
  return (
    // can change title on individual pages (while still importing rest of metadata)
    <Layout title='About DJ Events'>
      {/* <Link href='/'>Home</Link> */}
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events.</p>
      <p>Version: 1.0.0</p>
    </Layout>
  )
}
