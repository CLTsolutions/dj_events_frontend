// index.js is homepage
import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'

export default function HomePage({ events }) {
  // console log here will be on the client side (not server side like below)
  // console.log(events)
  return (
    // wrapping content in layout instead of div
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show.</h3>}

      {events.map(evt => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}
    </Layout>
  )
}

// can be above or below component
// can still use 'useEffect' (like in reg React), but have additional data fetching
//- properties when initially visit page
// 'server side' runs every time go to page
// 'static' makes request at build time and then will build out static pages
// if someone updates event, won't see because it ran at build time (revalidated)
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  // runs on server first if getServerSideProps (logs in console not client)
  // console.log(events)

  // get server props has to return an object
  return {
    // limiting how many events show on the homepage (will change with Strapi)
    props: { events: events.slice(0, 3) },
    revalidate: 1, // revalidate every sec only if data has changed
  }
}
