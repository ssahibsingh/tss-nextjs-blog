import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script';



function MyApp({ Component, pageProps }) {
  return <>
    <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
