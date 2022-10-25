import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import Link from 'next/link'
import YoutubeLogo from '/styles/Assets/youtube.png'
import LinkdenLogo from '/styles/Assets/linkedin.png'
import ViemoLogo from '/styles/Assets/vimeo.png'
import MicrosoftLogo from '/styles/Assets/microsoft-store.png'
import AppletLogo from '/styles/Assets/Apple.png'
import GooglePlayLogo from '/styles/Assets/google-play-store.png'
import MobileAppLogo from '/styles/Assets/mobile-app.png'
import ITPLightLogo from '/styles/Assets/ITP-Light-logo.png'

function Footer() {
    return ( <>

        <div className="pt-4 main-footer">
            <div className="container">
            <div className="d-flex justify-content-between align-items-center border-bottom border-opacity-50 border-light border-1 pb-4 pt-2">
                <div>
                    <Image src={ITPLightLogo}  alt="logo" width={130} height={25} />
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <div className='social-bg'>
                        <a href='#'>
                        <Image src={LinkdenLogo} className="social-img"  alt="Linkedin logo" width={20} height={20} />
                        </a>
                    </div>
                    <div className='social-bg'>
                         <a href='#'>
                         <Image src={ViemoLogo} className="social-img"  alt="Vimeo logo" width={25} height={25} />
                         </a>
                    </div>
                    <div className='social-bg'>
                        <a href='#'>
                        <Image src={YoutubeLogo} className="social-img"  alt="Youtube logo" width={25} height={25} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row pt-4 border-bottom border-opacity-50 border-light border-1 pb-4 page-footer">
                <div className="col-lg-3 col-xs-12 about-company">
                    <p className='footer-subtitle fw-bold mb-3'>Features</p>
                    <ul className="m-0 p-0 list-unstyled">
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Teams Management</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Clients Management</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Projects Management</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Task Management</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Timesheet Management</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Employee Monitoring</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Time off Management</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Easy Invoicing</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Productivity & Calculations</a></li>
                        <li className='mb-3'><a href="#" className='text-white fw-light'>Desktop / Mobile Apps</a></li>
                    </ul>
                </div>
                <div className="col-lg-9 col-xs-12 links">
                   <div className='row'>
                        <div className='col-lg-3'>
                            <p className='footer-subtitle fw-bold mb-3'>Pricing</p>
                            <ul className="m-0 p-0 list-unstyled">
                                <li className='mb-3'><a href="#" className='text-white fw-light'>Pricing</a></li>
                                <li className='mb-3'><a href="#" className='text-white fw-light'>Request Demo</a></li>
                                <li className='mb-3'><a href="#" className='text-white fw-light'>Free Trial</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                            <p className='footer-subtitle fw-bold mb-3'>About Us</p>
                            <ul className="m-0 p-0 list-unstyled">
                                <li className='mb-3'><a href="#" className='text-white fw-light'>Company Info</a></li>
                                <li className='mb-3'><a href="#" className='text-white fw-light'>Customer Feedback</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                            <p className='footer-subtitle fw-bold mb-3'>Support</p>
                            <ul className="m-0 p-0 list-unstyled">
                                <li className='mb-3'><Link href="/contact" className='text-white fw-light'>Contact Us</Link></li>
                                <li className='mb-3'><Link href="/faq"><a  className='text-white fw-light'>FAQ`s</a></Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                        </div>
                   </div>
                   <div className='d-flex justify-content-between align-items-center position-relative top-50'>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-1 pb-2 px-3 d-flex align-items-end gap-2 justify-content-center'>
                                <div className='h-32'>
                                    <Image src={MicrosoftLogo} alt="Microsoft logo" width={30} height={32} />
                                </div>
                                <div>
                                    <small className='text-muted download-text'>Download on the</small>
                                    <p className='mb-0 fw-semibold lh-1'>Windows Store</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-1 pb-2 px-4 d-flex align-items-end gap-2 justify-content-center'>
                                <div className='ps-1 h-32'>
                                    <Image src={AppletLogo} alt="Microsoft logo" width={25} height={30} />
                                </div>
                                <div className='pe-1'>
                                    <small className='text-muted download-text'>Download on the</small>
                                    <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-1 pb-2 px-4 d-flex align-items-end gap-2 justify-content-center'>
                                <div className='ps-1'>
                                    <Image src={GooglePlayLogo} alt="Microsoft logo" width={20} height={20} />
                                </div>
                                <div className='pe-1'>
                                    <small className='text-muted download-text'>Download on the</small>
                                    <p className='mb-0 fw-semibold lh-1'>Play Store</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-1 pb-2 px-3 d-flex align-items-end gap-2 justify-content-center'>
                                <div className='ps-1 h-35'>
                                    <Image src={MobileAppLogo} alt="Microsoft logo" width={20} height={35} />
                                </div>
                                <div className='pe-1'>
                                    <small className='text-muted download-text'>Download on the</small>
                                    <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col copyright text-end">
                    <p className="mb-0"><small className="text-white-50">© 2022 WAi Technologies initiative. All rights Reserved</small></p>
                </div>
            </div>
            </div>
        </div>

    </> );
}

export default Footer;