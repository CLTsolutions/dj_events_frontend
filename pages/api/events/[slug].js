// allows us to use any slug after events/
const { events } = require('./data.json')

export default (req, res) => {
  // evt gives arr with single event slug (to not change anything later with Strapi)
  const evt = events.filter(ev => ev.slug === req.query.slug)

  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    // limiting methods to only 'get' below
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
