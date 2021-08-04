// this component initializes pages
// get passed in any page props
// what is returned will be on every page (but this project uses layout)
// only place to import global style sheets is here
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
