// brackets for dynamic routing ([] and whatever params you want)
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  )
}

// can pass a context into getServerSideProps
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[9],
    },
  }
}
