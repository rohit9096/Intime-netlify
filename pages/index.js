import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import Image from 'next/image'
import Banner from '@components/banner'
import Logo from '../components/logo'
// import List from './Components/Lists/list'
import WhatIsIntime from '../components/what-is-intime'
import FeatureIntegration from '../components/feature-integration'
import ComoundYourGrowth from '../components/compound-your-growth'
import Script from 'next/script';
import CTA from '../components/CTA'
import Testimonials from '../components/testimonials'

export default function Home() {
  return (
    
    <>
      <Head>
        <title>Home | Intime-Pros</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
      </Head>
      <Header/>
      <div>
        <Banner />
        <Logo />
        <WhatIsIntime />
        <FeatureIntegration />
        <Testimonials />
        <ComoundYourGrowth />
        <CTA />
      </div>
      <footer>
        <Footer />
      </footer>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
    
    </>
  )
}

