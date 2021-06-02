// events homepage (url: /events)
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'

export default function EventsPage({ events }) {
  return (
    // wrapping content in layout instead of div
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show.</h3>}

      {events.map(evt => (
        <EventItem key={evt.id} evt={evt} />
      ))}
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
    revalidate: 1, // revalidate every sec only if data has changed
  }
}
