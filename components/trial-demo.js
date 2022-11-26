import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import BannerImage from '/styles/Assets/Book_Demo_Overlay.svg'
import Link from 'next/link'


function TrialDemo() {
    return ( <>
    
    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
            <div className="modal-dialog modal-xl my-0">
                <div className="modal-content rounded-0">
                <div className="modal-body p-0">
                    <button type="button" className="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className='row'>
                        <div className='col-lg-7 col-xs-12 bg-blue px-5 pt-4 pb-5 vh-100 vh-md-auto' id='free-tri'>
                            <div className='pb-4 pt-4'>
                                <Image src={logo}  alt="logo" width={150} height={50} /> 
                            </div> 
                            <div className='pt-4 mt-4 pb-4 sm-py-0'>
                                <h6 className='fs-2 fw-semibold'>Say <span className='text-blue'>"HELLO"</span> to</h6>
                                <h6 className='fs-2 fw-semibold'>the new world of</h6>  
                                <h1 className='text-blue fw-semibold'>automated time tracking</h1>
                            </div>
                            <div className='pt-4 mt-4'>
                                <Image src={BannerImage}  alt="logo" width={574} height={300} /> 
                            </div>
                        </div>
                        <div className='col-lg-5 col-xs-12 px-5 pt-4 pb-5 bg-white'>
                            <div className='pb-4 pt-4'>
                               <h6 className='fs-5 fw-semibold'>Start your FREE 14-Days Trial</h6>
                               <div className='book-demo-form pt-3'>
                                    <form className="row g-3">
                                        <div>
                                            <label htmlFor="Name" className='mb-1'>Name</label>
                                            <input type="text" className="form-control rounded-0" id="Name" placeholder='Amelia Miles' />
                                        </div>
                                        <div>
                                            <label htmlFor="Email" className='mb-1'>Email Address <span className='required'>*</span></label>
                                            <input type="Email" className="form-control rounded-0" id="Email" placeholder="amelia.miles@organization.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="CompanyName" className='mb-1'>Company Name <span className='required'>*</span></label>
                                            <input type="text" className="form-control rounded-0" id="CompanyName" placeholder="Organization Pvt. Ltd." />
                                        </div>
                                        <div>
                                            <label htmlFor="Password" className='mb-1'>Password <span className='required'>*</span></label>
                                            <input type="password" className="form-control rounded-0" id="Password" placeholder="Enter 8 or more characters" />
                                        </div>
                                        <div>
                                            <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                            <label className="form-check-label" htmlFor="inlineFormCheck">
                                                <small>I agree to the terms & privacy policy</small>
                                            </label>
                                        </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary mb-3 w-100 rounded-0">Start Your FREE 14-Days Trial</button>
                                        </div>
                                        <div className='text-center'>
                                            <p>Already have account? <Link href='/signin'><a className='text-blue'>Sign In</a></Link></p>
                                        </div>
                                    </form>
                               </div>
                            </div> 
                        </div>  
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    
    
    </> );
}

export default TrialDemo;