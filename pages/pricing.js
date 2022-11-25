import Header from "../components/Header";
import Script from 'next/script';
import Head from 'next/head'
import CTA from '../components/CTA'
import Link from 'next/link'
import Image from 'next/image'
import MicrosoftLogo from '/styles/Assets/microsoft-store.png'
import AppletLogo from '/styles/Assets/Apple.png'
import GooglePlayLogo from '/styles/Assets/google-play-store.png'
import MobileAppLogo from '/styles/Assets/mobile-app.png'
import Footer from "../components/Footer";
import PriceTable from "@components/price-table";
import BookDemo from "@components/book-demo";

function Pricing() {
    return ( <>
    
        <Head>
            <title>Intime-Pros | Pricing</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
        <Header />

        {/* banner section */}


        <section className="team-banner mb-5 pb-5">
            <div className="container py-4">
                <div className="">
                <div className="text-center text-white py-5 px-5">
                    <h1 className="fs-1 fw-semibold text-white">Pricing</h1>
                    <p className="text-white mb-0 w-50 mx-auto px-5">Learn about the features of in time Pro, a smart solution for High Performing distributing teams.</p>
                    <div className="d-flex gap-4 align-items-center py-4 justify-content-center">
                    <div className="">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">BOOK DEMO</button>
                    </div>
                    <div>          
                    <Link href='/faq'><button className="btn btn-cta bg-white">FAQ</button></Link>
                    </div>
                </div>
                </div>
                </div>
            </div> 
        </section> 
        <div className="container-fluid box-wave wave-stat">
            <div className="box-wave-inner"></div>
        </div>
        <BookDemo />


        {/* pricing table section */}


        <PriceTable />
        


        {/* download logos section */}

        <section>
            <div className='container py-5 mt-4'>
                <h3 className='text-center pt-3 underline-text position-relative'>We got you covered with <span className="underline pb-1">Multiplatform Solution</span></h3>
                <div className='d-flex justify-content-between align-items-center pt-5 mt-4 w-75 mx-auto'>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 px-3 d-flex align-items-end justify-content-center'>
                                <Link href='/download-windows'>
                                    <a className='d-flex align-items-end gap-2'>
                                        <div className='h-32'>
                                        <Image src={MicrosoftLogo} alt="Microsoft logo" width={30} height={32} />
                                        </div>
                                        <div>
                                            <small className='text-muted download-text'>Download on the</small>
                                            <p className='mb-0 fw-semibold lh-1'>Windows Store</p>
                                        </div>       
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 d-flex align-items-end justify-content-center'>
                                <Link href='/download-macOS'>
                                    <a className='d-flex align-items-end gap-2'>
                                        <div className='ps-1 h-32'>
                                            <Image src={AppletLogo} alt="Microsoft logo" width={25} height={30} />
                                        </div>
                                        <div className='pe-1'>
                                            <small className='text-muted download-text'>Download on the</small>
                                            <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 px-4 d-flex align-items-end justify-content-center'>
                               <Link href='/download-android'>
                                <a className='d-flex align-items-end gap-2'>
                                    <div className='ps-1'>
                                        <Image src={GooglePlayLogo} alt="Microsoft logo" width={20} height={20} />
                                    </div>
                                    <div className='pe-1'>
                                        <small className='text-muted download-text'>Download on the</small>
                                        <p className='mb-0 fw-semibold lh-1'>Play Store</p>
                                    </div>      
                                </a>
                               </Link>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 px-3 d-flex align-items-end justify-content-center'>
                                <Link href='/download-iOS'>
                                    <a className='d-flex align-items-end gap-2'>
                                        <div className='ps-1 h-35'>
                                            <Image src={MobileAppLogo} alt="Microsoft logo" width={20} height={35} />
                                        </div>
                                        <div className='pe-1'>
                                            <small className='text-muted download-text'>Download on the</small>
                                            <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                   </div>
            </div>
        </section>



        {/* CTA section */}

        <section className='my-5 pt-1 pb-5'>
                <div className="container cta mb-4 mt-5 py-2">
                    <div className="d-flex ps-4 gap-4 align-items-center py-4">
                        <div className="">
                            <p className="text-white mb-0">Questions? Refer our FAQ's</p>
                        </div>
                        <div className="ps-4 me-3">
                        <Link href='/faq'><button className="btn btn-cta bg-white">FAQ</button></Link>
                        </div>
                        <div>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">BOOK DEMO</button>
                        </div>
                    </div>
                </div>
        </section>

        <Footer />

    

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>

    
    
    </> );
}

export default Pricing;