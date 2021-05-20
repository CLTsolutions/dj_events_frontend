import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function HomePage({ events }) {
  return (
    // wrapping content in layout instead of div
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  )
}

// can be above or below component
// 'server side' runs every time go to page
// 'static' makes request at build time and then will build out static pages
// if someone updates event, won't see because it ran at build time (revalidated)
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1, // only if data has changed
  }
}
