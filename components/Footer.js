import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import Link from 'next/link'
import YoutubeLogo from '/styles/Assets/youtube-light.svg'
import LinkdenLogo from '/styles/Assets/linkedin-light.svg'
import ViemoLogo from '/styles/Assets/vimeo-light.svg'
import MicrosoftLogo from '/styles/Assets/microsoft-store.png'
import AppletLogo from '/styles/Assets/Apple.png'
import GooglePlayLogo from '/styles/Assets/google-play-store.png'
import MobileAppLogo from '/styles/Assets/mobile-app.png'
import LinuxLogo from '/styles/Assets/Home_Assets/linux.png'
import ITPLightLogo from '/styles/Assets/logo.svg'
import BookDemo from './book-demo'
import { useEffect } from "react";
import $ from "jquery"
import TrialDemo from './trial-demo'

function Footer() {

    useEffect(() => {
        // var selector = '.footer-feature li a';

        // $(selector).on('click', function(){
        //     $('features-pill').removeClass('active');
        //     $(this).addClass('active');
        // });

    })
    
    return ( <>

        <div className="pt-4 main-footer">
            <div className="container">
            <div className="d-flex justify-content-between align-items-center border-bottom border-opacity-50 border-dark border-1 pb-4 pt-2">
                <div>
                    <Image src={ITPLightLogo}  alt="logo" width={130} height={25} />
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <div className='social-bg'>
                        <a href='#'>
                        <Image src={LinkdenLogo} className="social-img"  alt="Linkedin logo" width={55} height={55} />
                        </a>
                    </div>
                    <div className='social-bg'>
                         <a href='#'>
                         <Image src={ViemoLogo} className="social-img"  alt="Vimeo logo" width={55} height={55} />
                         </a>
                    </div>
                    <div className='social-bg'>
                        <a href='#'>
                        <Image src={YoutubeLogo} className="social-img"  alt="Youtube logo" width={55} height={55} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row pt-4 border-bottom border-opacity-50 border-dark border-1 pb-4 page-footer d-lg-flex flex-lg-nowrap">
                <div className="col-lg-2 col-xs-12 about-company">
                    <p className='text-dark fw-bold mb-3'>Features</p>
                    <ul className="m-0 p-0 list-unstyled footer-feature">
                        <li className='mb-3'><Link href='/#teams-management' scroll={false}><a className='fw-light text-decoration-none' >Teams Management</a></Link></li>
                        <li className='mb-3'><Link href='/#clients-management' scroll={false}><a className='fw-light text-decoration-none tab-link'>Clients Management</a></Link></li>
                        <li className='mb-3'><Link href='/#projects-management' scroll={false}><a className='fw-light text-decoration-none'>Projects Management</a></Link></li>
                        <li className='mb-3'><Link href='/#task-management' scroll={false}><a className='fw-light text-decoration-none'>Task Management</a></Link></li>
                        <li className='mb-3'><Link href='/#timesheet-management' scroll={false}><a className='fw-light text-decoration-none'>Timesheet Management</a></Link></li>
                        <li className='mb-3'><Link href='/#employee-monitoring' scroll={false}><a className='fw-light text-decoration-none'>Employee Monitoring</a></Link></li>
                        <li className='mb-3'><Link href='/#timeoff-management' scroll={false}><a className='fw-light text-decoration-none'>Time off Management</a></Link></li>
                        <li className='mb-3'><Link href='/#easy-invoicing' scroll={false}><a className='fw-light text-decoration-none'>Easy Invoicing</a></Link></li>
                        <li className='mb-3'><Link href='/#productivity' scroll={false}><a className='fw-light text-decoration-none'>Productivity & Calculations</a></Link></li>
                        <li className='mb-3'><Link href='/#cross-platform' scroll={false}><a className='fw-light text-decoration-none'>Desktop / Mobile Apps</a></Link></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-xs-12 links ps-5 ps-md-2 ms-md-1 ps-sm-2 ms-sm-1">
                    <p className=' text-dark fw-bold mb-3'>Company</p>
                        <ul className="m-0 p-0 list-unstyled">
                            <li className='mb-3'><Link href='/#home-price' scroll={false}><a className=' fw-light text-decoration-none'>Pricing</a></Link></li>
                            <li className='mb-3'><Link href='#' scroll={false}><a className=' fw-light text-decoration-none'>Terms & Conditions</a></Link></li>
                            <li className='mb-3'><Link href='#' scroll={false}><a className=' fw-light text-decoration-none'>Privacy Policy</a></Link></li>
                            {/* <li className='mb-3'><a type='button' className=' fw-light text-decoration-none' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request Demo</a></li> */}
                            <li className='mb-3'><a type='button' className=' fw-light text-decoration-none' data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Free Trial</a></li>
                        </ul>
                </div>
                <div className="col-lg-2 col-xs-12 links">
                    <p className='text-dark fw-bold mb-3'>Support</p>
                        <ul className="m-0 p-0 list-unstyled">
                            <li className='mb-3'><Link href="/contact"><a className=' fw-light text-decoration-none'> Contact Us</a></Link></li>
                            <li className='mb-3'><Link href="#"><a className=' fw-light text-decoration-none'> Raise Ticket</a></Link></li>
                            <li className='mb-3'><Link href="/faq"><a  className=' fw-light text-decoration-none'>FAQ`s</a></Link></li>
                        </ul>
                </div>
                <div className='col-lg-6'>
                        <div className=''>
                                <div className='row pb-4 border-b-dashed'>
                                <p className='text-dark fw-bold mb-3'>Downloads</p>
                                        <div className=''>
                                            <p className='fw-light'> Desktop Application :</p>
                                            {/* <p className='mb-0'></p> */}
                                        </div>
                                        <div className='col-lg-4 download-card mb-3'>
                                            <div className='bg-white shadow rounded px-3 d-flex align-items-end justify-content-center'>
                                                <Link href='/download-windows'>
                                                    <a className='d-flex align-items-center gap-2 text-decoration-none py-2'>
                                                        <div className='mt-1'>
                                                            <Image src={MicrosoftLogo} alt="Microsoft logo" width={26} height={26} />
                                                        </div>
                                                        <div>
                                                            {/* <small className='text-muted download-text'>Download on the</small> */}
                                                            <p className='mb-0 fw-semibold lh-1'>Windows</p>
                                                        </div>       
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 download-card mb-3'>
                                            <div className='bg-white shadow rounded d-flex align-items-end justify-content-center'>
                                                <Link href='/download-macOS'>
                                                    <a className='d-flex align-items-center gap-2 text-decoration-none py-2'>
                                                        <div className=''>
                                                            <Image src={AppletLogo} alt="Microsoft logo" width={26} height={30} />
                                                        </div>
                                                        <div className='pe-1'>
                                                            {/* <small className='text-muted download-text'>Download on the</small> */}
                                                            <p className='mb-0 fw-semibold lh-1'>Mac OS</p>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>    
                                        <div className='col-lg-4 download-card mb-3'>
                                            <div className='bg-white shadow rounded px-3 d-flex align-items-end justify-content-center'>
                                                <Link href='/download-iOS'>
                                                    <a className='d-flex align-items-center gap-2 text-decoration-none py-2'>
                                                        <div className='mt-1'>
                                                            <Image src={LinuxLogo} alt="Microsoft logo" width={32} height={30} />
                                                        </div>
                                                        <div className='pe-1'>
                                                            {/* <small className='text-muted download-text'>Download on the</small> */}
                                                            <p className='mb-0 fw-semibold lh-1'>Linux</p>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                                <div className='row pt-4'>
                                        <div className=''>
                                            <p className='fw-light'>Mobile Application :</p>
                                            {/* <p className='mb-0'></p> */}
                                        </div>
                                        
                                        <div className='col-lg-4 download-card'>
                                            <div className='bg-white shadow rounded px-4 d-flex align-items-end justify-content-center'>
                                            <Link href='/download-android'>
                                                <a className='d-flex align-items-center gap-2 text-decoration-none py-2'>
                                                    <div className='mt-1'>
                                                        <Image src={GooglePlayLogo} alt="Microsoft logo" width={26} height={26} />
                                                    </div>
                                                    <div className='pe-1'>
                                                        {/* <small className='text-muted download-text'>Download on the</small> */}
                                                        <p className='mb-0 fw-semibold lh-1'>Play Store</p>
                                                    </div>      
                                                </a>
                                            </Link>
                                            </div>
                                        </div>
                                        <div className='col-lg-4 download-card'>
                                            <div className='bg-white shadow rounded px-3 d-flex align-items-end justify-content-center'>
                                                <Link href='/download-iOS'>
                                                    <a className='d-flex align-items-center gap-2 text-decoration-none py-2'>
                                                        <div className='mt-1'>
                                                            <Image src={MobileAppLogo} alt="Microsoft logo" width={18} height={26} />
                                                        </div>
                                                        <div className='pe-1'>
                                                            {/* <small className='text-muted download-text'>Download on the</small> */}
                                                            <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='visibility-hidden col-lg-4 download-card'>
                                            <div className='bg-white shadow download-card rounded d-flex align-items-end justify-content-center'>
                                                <Link href='/download-macOS'>
                                                    <a className='d-flex align-items-center gap-2 text-decoration-none py-2'>
                                                        <div className=''>
                                                            <Image src={AppletLogo} alt="Microsoft logo" width={26} height={30} />
                                                        </div>
                                                        <div className='pe-1'>
                                                            
                                                            <p className='mb-0 fw-semibold lh-1'>Mac OS</p>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                        </div>
                </div>
                  
                </div>
            <div className="row py-3">
                <div className="col copyright text-end">
                    <p className="mb-0"><small className="">© 2022 WAi Technologies initiative. All rights Reserved</small></p>
                </div>
            </div>
            </div>
        </div>

        
        
        
    </> );
}

export default Footer;