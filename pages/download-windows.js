import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script';
import Image from 'next/image'
import windows from '../styles/Assets/download_page/Windows_White.svg'
import appleDesktop from '../styles/Assets/download_page/MacBook_Greyscale.svg'
import MacLogo from '../styles/Assets/download_page/Apple_Greyscale.svg'
import IosMobileLogo from '../styles/Assets/download_page/iOs_Greyscale.svg'
import AndroidMobileLogo from '../styles/Assets/download_page/Android_Greyscale.svg'
import BookDemo from "@components/book-demo";

function DownloadWindows() {
    return ( <>
    
    <Head>
        <title>In Time Pros | Download Windows</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
    </Head>
    
    <Header />

    {/* banner section */}

    <section className="download banner cta rounded-0">
        <div className="container py-4">
            <div className="text-center text-white py-5 px-5">
                <h1 className="fs-2 fw-semibold">Download In Time Pro</h1>
                <p className="text-white mb-0 w-50 mx-auto px-5">Manage your workforce with a simple, lightweight software built to help you work better</p>
            </div>
        </div>
    </section> 


    {/* stable version section */}

    <section>
        <div className="container py-5">
            <div className="row d-flex align-items-center py-5">
                <div className="col-lg-6 col-xs-12">
                    <h4 className="fw-semibold">In Time Pro for Windows</h4>
                    <p className="pb-3">Built to run on any Windows - Windows 2000/XP or newer</p>
                    <button className="btn btn-primary d-flex gap-2 align-items-center rounded-0">
                        <Image src={windows}  alt="apple logo" /><span className="text-white fw-light">Download for Windows</span>
                    </button>
                    <p className="text-muted mb-2 pt-1">Version 1.6.7 (Stable)</p>
                    <div className="pt-3">
                        <a href="#" className="text-blue">In Time Pro account</a><span> required to use apps</span>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <Image src={appleDesktop}  alt="apple desktop" />
                </div>
            </div>
        </div>
    </section>



    {/* another device section */}

    <section>
        <div className="container">
            <h4 className="fw-light text-center">Looking for another device?</h4>
            <div className="d-flex justify-content-center gap-5 py-5 mb-5">
            <div className="text-center border rounded py-4 px-5 border-info device-card">
                    <Image src={MacLogo}  alt="window logo" width={40} height={40} />
                    <p className="mb-1 pt-2 fs-5 fw-light">Mac OS</p>
                    <hr className="m-0 w-25 mx-auto text-blue download-hr" />
                </div>
                <div className="text-center border rounded py-4 px-5 border-info device-card">
                    <Image src={IosMobileLogo}  alt="window logo" width={40} height={40} />
                    <p className="mb-1 pt-2 fs-5 fw-light">iOS Mobile App</p>
                    <hr className="m-0 w-25 mx-auto text-blue download-hr" />
                </div>
                <div className="text-center border rounded py-4 px-5 border-info device-card">
                    <Image src={AndroidMobileLogo}  alt="window logo" width={40} height={40} />
                    <p className="mb-1 pt-2 fs-5 fw-light">Android Mobile App</p>
                    <hr className="m-0 w-25 mx-auto text-blue download-hr" />
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
                       <Link href='/faq'><button className="btn btn-cta bg-white rounded-0">FAQ</button></Link>
                    </div>
                    {/* <div>
                        <button className="btn btn-primary rounded-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">BOOK DEMO</button>
                        <BookDemo />
                    </div> */}
                </div>
            </div>
    </section>



    <Footer />

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
    
    
    </> );
}

export default DownloadWindows;