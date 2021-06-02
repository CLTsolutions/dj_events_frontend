// brackets for dynamic routing ([] and whatever params you want)
// this file for /events/slug
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function EventPage({ evt }) {
  console.log(evt)
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  )
}

// building events for getStaticProps with getStaticPaths
// this returns an object with paths (arr of objs with params obj)
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  // mapping through events to create an arr of objs with slug (from evt slug)
  // - this creates the path of arrs
  const paths = events.map(evt => ({
    params: { slug: evt.slug },
  }))

  return {
    paths,
    fallback: false, //shows 404 if slug (path) isn't found
    // if true - will look for path even if not generated at build time and makes a new request
  }
}

// getStaticProps won't work because slug is dynamic (this doesn't have our data so can't pass in slug)
// filling params with paths from above (getStaticPaths)
export async function getStaticProps({ params: { slug } }) {
  console.log(slug)
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json() //arr of events with one event

  return {
    props: {
      evt: events[0],
    },
    //doesn't matter for server side - leaving for later
    revalidate: 1,
  }
}

// can pass a context into getServerSideProps
// using query which should give us the slug
// export async function getServerSideProps({ query: { slug } }) {
//   console.log(slug)
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json() //arr of events with one event

//   return {
//     props: {
//       evt: events[0],
//     },
//   }
// }
