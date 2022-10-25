import Image from 'next/image'
import BannerImage from '/styles/Assets/Home_Assets/Home_banner.png'
import PowerBi from '/styles/Assets/Home_Assets/Power-BI.png'
import PowerPages from '/styles/Assets/Home_Assets/Power-Pages.png'
import PowerVirtualAgents from '/styles/Assets/Home_Assets/Power-Virtual-Agents.png'
import PowerApps from '/styles/Assets/Home_Assets/Power-Apps.png'
import PowerAutomates from '/styles/Assets/Home_Assets/Power-Automate.png'

function Banner() {
    return ( <>
    
        <div className='container'>
            <div className='row py-5 my-4'>
                <div className='col-lg-6 col-xs-12'>
                    <div className='pb-5'>
                        <h1 className='pb-3'>
                            <div className='fw-light pb-2'>Build Trust.</div>
                            <span className='text-blue fw-bold'>Gain Insight. Win Customers</span>
                        </h1>
                        <p>Tune out distractions by empowering employees for better performance.</p>
                    </div>
                    <div className='d-flex gap-4 align-items-center shadow p-3 rounded w-75'>
                        <p className='mb-0'>Power Platform</p>
                        <div className='d-flex gap-3'>
                            <Image src={PowerBi} alt="Power BI logo" className='banner-logo' />
                            <Image src={PowerPages} alt="Power Pages logo" className='banner-logo' />
                            <Image src={PowerVirtualAgents} alt="Power Virtual Agents logo" className='banner-logo' />
                            <Image src={PowerApps} alt="Power Apps logo" className='banner-logo'  />
                            <Image src={PowerAutomates} alt="Power Automates logo" className='banner-logo' />
                        </div>
                    </div>
                    <div className='pt-5 mt-4 d-flex gap-3'>
                        <a href="#"><button className="btn btn-primary text-white">START FREE TRIAL</button></a>
                        <a href="#"><button className="btn btn-primary-outline">BOOK DEMO</button></a>
                    </div>
                </div>
                <div className='col-lg-6 col-xs-12'>
                    <Image src={BannerImage} alt="Home Banner" width={1300} height={800} />
                </div>
            </div>
        </div>
        
    </> );
}

export default Banner;