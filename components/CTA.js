import Image from 'next/image'
import TrialDemo from './trial-demo';
import CtaImage from '/styles/Assets/Home_Assets/cta.svg'

function CTA() {
    return ( <>
    
        <section className='my-5 pt-4 pb-5 pt-md-0 pt-lg-0 pt-xxl-4 pt-xl-4 px-sm-4'>
            <div className="container cta mb-4 mt-5">
                <div className="row d-flex pt-5 pt-sm-0 cta-row px-5 pt-md-0 px-md-3 pt-xxl-4 pt-xl-4">
                    <div className="col-lg-4 col-md-4 col-xs-12 d-md-none d-sm-none d-xxl-block d-xl-block">
                       <div className='position-relative cta-image-div'>
                        <Image src={CtaImage}  alt="CTA Image" className='cta-image' width={410} height={430} />
                       </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-xs-12 d-flex justify-content-center justify-content-md-start justify-content-lg-around pt-xxl-3">
                        <div>
                        <h5 className="text-white pb-4 pt-3">Boosting Productivity was never so easy.</h5>
                        <div className='d-flex gap-3 pb-md-3 pb-sm-3 sm-d-block align-items-baseline' id="smblock">
                            <div className="mb-3">
                                {/* <input type="email" input-group mb-3 input-max className="form-control primary-outline rounded-0" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" /> */}
                                <button className="btn btn-outline-secondary btn-success rounded-0 text-white" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book a demo</button>
                            </div>
                            <div>
                            <a href="#" type='button' className='fw-light text-decoration-none' data-bs-toggle="modal" data-bs-target="#staticBackdrop1"><button className="btn rounded-0 bg-transparent border-0  text-white text-decoration-none p-0">Start a free trial &gt;&gt;</button></a>
                            </div>
                        </div>
                        <TrialDemo />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    </> );
}

export default CTA;