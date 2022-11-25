// import Image from 'next/image'
// import logo from '/styles/Assets/logo.svg'
// import BannerImage from '/styles/Assets/Book_Demo_Overlay.svg'
import React from "react";
import { InlineWidget } from "react-calendly";

function BookDemo() {
    return ( <>
    
        {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl my-0">
                <div className="modal-content rounded-0">
                <div className="modal-body p-0">
                    <button type="button" className="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className='row'>
                        <div className='col-lg-7 col-xs-12 bg-blue px-5 pt-4 pb-5 vh-100'>
                            <div className='pb-4 pt-4'>
                                <Image src={logo}  alt="logo" width={150} height={50} /> 
                            </div> 
                            <div className='pt-4 mt-4 pb-4'>
                                <h6 className='fs-2 fw-semibold'>Say <span className='text-blue'>"HELLO"</span> to</h6>
                                <h6 className='fs-2 fw-semibold'>the new world of</h6>  
                                <h1 className='text-blue fw-semibold'>automated time tracking</h1>
                            </div>
                            <div className='pt-4 mt-4'>
                                <Image src={BannerImage}  alt="logo" width={574} height={300} /> 
                            </div>
                        </div>
                        <div className='col-lg-5 col-xs-12 px-5 pt-4 pb-5'>
                            <div className='pb-4 pt-4'>
                               <h6 className='fs-5 fw-semibold'>Book Demo</h6>
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
                                            <label htmlFor="TeamSize" className='mb-1'>Team Size <span className='required'>*</span></label>
                                            <select className="form-select rounded-0" aria-label="Default select example">
                                                <option>Please Select</option>
                                                <option defaultValue="1">&lt;20</option>
                                                <option defaultValue="2">21-50</option>
                                                <option defaultValue="3">51-200</option>
                                                <option defaultValue="4">201-500</option>
                                                <option defaultValue="5">&gt;500</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="DateTime" className='mb-1'>Date & Time <span className='required'>*</span></label>
                                            <input type="datetime-local" className='form-control rounded-0' id="DateTime" name="DateTime" />
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
                                            <button type="submit" className="btn btn-primary mb-3 w-100 rounded-0">BOOK DEMO</button>
                                        </div>
                                    </form>
                               </div>
                            </div> 
                        </div>  
                    </div>
                </div>
                </div>
            </div>
        </div> */}

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-fullscreen my-0">
                <div className="modal-content rounded-0">
                <div className="modal-header border-0">
                <button type="button" className="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pt-5">
                    <InlineWidget
                    url="https://calendly.com/intimepro/in-time-pro-demo" />
                </div>
                </div>
            </div>
        </div>
    
    </> );
}

export default BookDemo;