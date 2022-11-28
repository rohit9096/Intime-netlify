import BookDemo from '@components/book-demo';
import Image from 'next/image'
import ContactBgImage from '/styles/Assets/contact_us_Assets/Contact_us_header.svg'

function ContactInfo() {
    return ( <>
    
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-xs-6 contact-bg d-flex align-items-end pb-5 pt-md-5 justify-content-xxl-center">
                        <div className="contact-img">
                            <Image src={ContactBgImage} alt="Contact Us background image" width={491} height={491} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-6">
                        <div className='row'>
                            <div className='col-lg-12 col-xs-12'>
                                <div className='px-5 pt-5 py-md-0 pb-5 sm-px-0 sm-py-0'>
                                    <div className='pb-5 pt-5'>
                                        <h6 className='pb-3 pt-5'>Talk to us</h6>
                                        <p className='mb-0 pe-5'>If you have any questions about In Time Pro, please contact us in English through the support chat or email us at</p>
                                        <a href='#' className='text-blue text-decoration-underline fw-semibold'>support@intimepro.com</a>
                                    </div>
                                    {/* <hr className='custom-hr' />
                                    <div className='pt-4'>
                                        <p className='mb-2 fs-5 fw-semibold'>Product Demo</p>
                                        <p>Our product specialist will give you a full run down of In Time Pro</p>
                                        <button className="btn btn-primary text-white rounded-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">BOOK DEMO</button>
                                        <BookDemo />
                                    </div> */}
                                </div>
                            </div>
                            <div className='col-lg-12 col-xs-12 contact-form-div px-5 pt-5 pb-3 mt-5 sm-px-1'>
                                    <form className='px-0' name="contact-form" method="POST" data-netlify="true" onSubmit="submit" netlify-honeypot="bot-field" action='/Thankyou'>
                                        <input type="hidden" name="form-name" value="contact-form" />  
                                        <div className='row'>
                                            <div className="col-lg-6 col-xs-12 mb-4">
                                                <input type="text" className="form-control rounded-0" id="Name" name="name" placeholder='Name *' required/>
                                            </div>
                                            <div className="col-lg-6 col-xs-12 mb-4">
                                                <input type="email" className="form-control rounded-0" id="Email" name="email" placeholder='Email *' required/>
                                            </div>
                                        </div>
                                        
                                        <div className='row'>
                                            <div className="col-lg-12 col-xs-12 mb-4">
                                                <textarea className="form-control rounded-0" id="Message" name='Message' rows="3" placeholder='Message'></textarea>
                                            </div>
                                        </div>
                                        <p class="hidden d-none">
                                            <label>
                                            Don't fill this out if you're human: <input name="bot-field" />
                                            </label>
                                        </p>
                                        <div className='row'>
                                            <div className='col-lg-12 col-xs-12 mb-4'>
                                                    <button type="submit" className="btn btn-primary text-white rounded-0">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </form>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        </section>


    </> );
}

export default ContactInfo;