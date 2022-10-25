import Image from 'next/image'
import tistione from '/styles/Assets/Home_Assets/testione.png' 

function Testimonials() {
    return ( <>
    
    <section className='primary-bg-color'>
        <div className='container py-5'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide testimonials" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <div className="d-flex align-items-center mx-5 px-5 gap-4">
                        <div>
                            <Image src={tistione} alt="Home Banner" className='Power BI' width={200} height={200} />
                        </div>
                        <div>
                            <p className='text-white w-75'><sup className='quote'>&ldquo;</sup>Lorem ipsum dolor sit amet, conset adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolo magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <p className='text-white pt-5 mb-0'>Mrs. Lorem Ipsum</p>
                            <small className='testimonial-profile'>CEO, XYZ</small>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <div className="d-flex align-items-center mx-5 px-5 gap-4">
                        <div>
                            <Image src={tistione} alt="Home Banner" className='Power BI' width={200} height={200} />
                        </div>
                        <div>
                            <p className='text-white w-75'><sup className='quote'>&ldquo;</sup>Lorem ipsum dolor sit amet, conset adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolo magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <p className='text-white pt-5 mb-0'>Mrs. Lorem Ipsum</p>
                            <small className='testimonial-profile'>CEO, XYZ</small>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="d-flex align-items-center mx-5 px-5 gap-4">
                        <div>
                            <Image src={tistione} alt="Home Banner" className='Power BI' width={200} height={200} />
                        </div>
                        <div>
                            <p className='text-white w-75'><sup className='quote'>&ldquo;</sup>Lorem ipsum dolor sit amet, conset adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolo magna aliqua. Ut enim ad veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <p className='text-white pt-5 mb-0'>Mrs. Lorem Ipsum</p>
                            <small className='testimonial-profile'>CEO, XYZ</small>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    </> );
}

export default Testimonials