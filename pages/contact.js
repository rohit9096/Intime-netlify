import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from 'next/head'
import ContactInfo from "../components/Contact/contactInfo";
import Script from 'next/script';

export default function Contact (){
    return (
        <>
        <Head>
            <title>Contact Us | Intime-Pros</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
        <Header />
        <main>
            <ContactInfo />
        </main>
        <Footer />
        
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
        </>
    )
} 