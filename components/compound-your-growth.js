import Image from 'next/image'
import ProductOptimsation from '/styles/Assets/Home_Assets/Productivity-Optimisation.svg'
import ClientManagement from '/styles/Assets/Home_Assets/Client-Management.png'
import LeaveManagement from '/styles/Assets/Home_Assets/Leave-Management.png'

function ComoundYourGrowth() {
    return ( <>

        <div className='container'>
           <div className='compound-row pt-5 mt-4'>
                <h3 className='text-center pt-3 underline-text position-relative'>How in time pro can help <sapn className="underline pb-1">compound your growth</sapn></h3>
                <div className='row pt-5 mt-5'>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={ProductOptimsation} alt="Feature Integration" width={760} height={466} />
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <p className='text-blue mb-2 blue-title'>SEAMLESS</p>
                        <h6>Productivity Optimisation</h6>
                        <p className='pe-5 me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <div className="unordered-list list-unstyled">
                            <ul className='px-4 pt-4'>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Allocate team members to project</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Link tasks to project</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Detailed project report</li>
                            </ul>
                        </div>
                        <div className='pt-4 d-flex gap-4 align-items-center'>
                            <a href="#" className='primary-link'>Learn More &gt;&gt;</a>
                            <a href="#"><button className="btn btn-primary text-white">START OPTIMISING</button></a>
                        </div>
                    </div>       
                </div>
           </div>
           <div className='compound-row py-5 mt-4'>
                <div className='row pt-5'>
                    <div className='col-lg-6 col-xs-12'>
                        <p className='text-blue mb-2 blue-title'>STREAMLINED</p>
                        <h6>Client Management</h6>
                        <p className='pe-5 me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <div className="unordered-list list-unstyled">
                            <ul className='px-4 pt-4'>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Invite clients</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Link multiple projects to a client</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Manage multiple clients</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Easy invoicing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={ClientManagement} alt="Feature Integration" width={570} height={491} />
                    </div>       
                </div>
           </div>
           <div className='compound-row py-5 mt-4'>
                <div className='row pt-5'>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={LeaveManagement} alt="Feature Integration" width={550} height={491} />
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <p className='text-blue mb-2 blue-title'>EFFICIENT</p>
                        <h6>Time-off / Leave Management</h6>
                        <p className='pe-5 me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <div className="unordered-list list-unstyled">
                            <ul className='px-4 pt-4'>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Time-off customisation</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Generate custom leave reports</li>
                                <li className="d-flex align-items-center gap-2 mb-2 fw-bold">Location based public holidays</li>
                            </ul>
                        </div>
                        <div className='pt-4 d-flex gap-4 align-items-center'>
                            <a href="#" className='primary-link'>Learn More &gt;&gt;</a>
                            <a href="#"><button className="btn btn-primary text-white">START FREE TRIAL</button></a>
                        </div>
                    </div>       
                </div>
           </div>
        </div>

    
    </> );
}

export default ComoundYourGrowth;