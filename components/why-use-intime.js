import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import bettergovernance from '/styles/Assets/better-governance.svg'
import buildtrust from '/styles/Assets/build-trust.svg'
import performanceexcellence from '/styles/Assets/performance-excellence.svg'
import workanalytics from '/styles/Assets/work-analytics.svg'
import productivityoptimization from '/styles/Assets/productivity-optimization.svg'
import workautomation from '/styles/Assets/work-automation.svg'
import Head from 'next/head'



function WhyUseIntime() {
    return ( <>

        <Head>
       
        </Head>

        <div className='container pt-5'>
            <h3 className="text-center pt-3 text-muted fw-light mb-5">Why Use<span> <Image src={logo}  alt="logo" width={140} /></span></h3>
            <div className='row mb-4 pt-4'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className='why-card rounded px-5 py-5 h-100'>
                        <Image src={buildtrust}  alt="logo" width={70} height={60} />
                        <h6 className="pt-4">Builds Trust</h6>
                        <p className='text-muted fs-5 fw-light'>Experience a transparent and healthy work environment.</p>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className='why-card rounded px-5 py-5 h-100'>
                        <Image src={performanceexcellence}  alt="logo" width={65} height={65} />
                        <h6 className="pt-4">Performance Excellence</h6>
                        <p className='text-muted fs-5 fw-light'>Tune out distractions by empowering employees for better performance.</p>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className='why-card rounded px-5 py-5 h-100'>
                        <Image src={workanalytics}  alt="logo" width={65} height={60} />
                        <h6 className="pt-4">Work Analytics</h6>
                        <p className='text-muted fs-5 fw-light'>Actionable data that provides deep insights for effective decision making.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className='why-card rounded px-5 py-5 h-100'>
                        <Image src={bettergovernance}  alt="logo" width={65} height={60} />
                        <h6 className="pt-4">Better Governance</h6>
                        <p className='text-muted fs-5 fw-light'>Seamless collaboration for a better process and project management.</p>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3'>
                    <div className='why-card rounded px-5 py-5 h-100'>
                        <Image src={productivityoptimization}  alt="logo" width={65} height={60} />
                        <h6 className="pt-4">Productivity Optimization</h6>
                        <p className='text-muted fs-5 fw-light'>Solution that returns thousands of productive work hours to the business.</p>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                    <div className='why-card rounded px-5 py-5 h-100 mask-monkey'>
                        <Image src={workautomation}  alt="logo" width={65} height={60} />
                        <h6 className="pt-4">Work Automation</h6>
                        <p className='text-muted fs-5 fw-light'>Discover business challenges and overcome inefficiencies using our Automation as a service.</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <button className="btn btn-cta btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Book a demo</button>
            </div>
        </div>

        
    
    
    </> );

    
}

export default WhyUseIntime;