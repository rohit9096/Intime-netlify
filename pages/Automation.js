import Header from "../components/Header";
import Script from 'next/script';
import Head from 'next/head'
import Footer from "../components/Footer";

function Automation() {
    return ( <>

        <Head>
            <title>Intime-Pros | Automation</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
        <Header />
    
        <div className="container">

        <h1>Automation</h1>

        </div>

        <Footer />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
      

    </> );
}

export default Automation;