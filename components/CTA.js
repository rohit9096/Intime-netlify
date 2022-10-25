import Image from 'next/image'
import CtaImage from '/styles/Assets/Home_Assets/cta.svg'

function CTA() {
    return ( <>
    
        <section className='my-5 pt-4 pb-5'>
            <div className="container cta mb-4 mt-5">
                <div className="row d-flex pt-5 cta-row px-5">
                    <div className="col-lg-8 col-xs-12">
                        <h5 className="text-white pb-4 pt-3">Boosting Productivity was never so easy.</h5>
                        <button className='bg-white rounded btn btn-secondary text-blue'>START FREE TRIAL</button>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                       <div className='position-relative cta-image-div'>
                        <Image src={CtaImage}  alt="CTA Image" className='cta-image' width={547} height={527} />
                       </div>
                    </div>
                </div>
            </div>
        </section>

    </> );
}

export default CTA;