// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { events } = require('./data.json')

export default (req, res) => {
  // limiting method to 'get' only
  if (req.method === 'GET') {
    res.status(200).json(events)
  } else {
    // allow is an arr of methods which are allowed
    // allow is currently only a get request but could set to other methods
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
