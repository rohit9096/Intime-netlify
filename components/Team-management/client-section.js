import Image from 'next/image'
import MultipleOrganisation from '/styles/Assets/team_management/multiple-organisational.svg'


function ClientSection() {
    return ( <>
    
        {/* <section> */}
            <div className="container-fluid bg-blue">
                <div className="container py-4 text-center">
                    <h5>Client Management</h5>
                    <p className="w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row d-flex align-items-start py-4'>                    
                    <div className='col-lg-6 col-xs-12 px-5'>
                        <h6>Manage multiple clients</h6>
                        <ul className='pe-5 px-0 pt-3 custom-unorder'>
                            <li className='pb-3'>Provides a platform to help businesses efficiently engage with their customers</li>
                            <li className='pb-3'>Manage multiple clients with ease and build long-term relationships that are mutually profitable</li>
                            <li className='pb-3'>Optimize your end-to-end business process, and offer relevant insights to personalize every client engagement, so you can drive more sales and improve your revenue.</li>
                            <li className='pb-3'>Edit the client details and manage their profiles easily.</li>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                    </div>
                </div>
            </div>
            
            <div className='bg-gradient-blue'>
                <div className='container py-5'>
                    <div className='row d-flex align-items-start py-4'>                  
                        <div className='col-lg-6 col-xs-12'>
                            <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                        </div>
                        <div className='col-lg-6 col-xs-12 px-5'>
                            <h6>Link multiple projects to a client</h6>
                            <ul className='pe-5 px-0 pt-3 custom-unorder'>
                                <li className='pb-3'>Working on multiple projects for a client at the same time requires extreme dedication and skills. By using In Time Pro software, you can make your life easier.</li>
                                <li className='pb-3'>Tenants can integrate multiple projects to a client</li>
                                <li className='pb-3'>Generate project-based reports for each client. This makes it easier to organize multiple projects under a single client.</li>
                                <li className='pb-3'>Integrate clients and projects and make the necessary information available to them.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row d-flex align-items-start py-4'>
                    <div className='col-lg-6 col-xs-12 px-5'>
                        <h6>Easy invoicing</h6>
                        <ul className='pe-5 px-0 pt-3 custom-unorder'>
                            <li className='pb-3'>Effective & automated client billing and invoicing. </li>
                            <li className='pb-3'>It simplifies and streamlines your business invoicing process </li>
                            <li className='pb-3'>Easily track overdue, indraft, outstanding and unbilled time</li>
                            <li className='pb-3'>Apply taxes and charge a late fee if applicable</li>
                            <li className='pb-3'>Customize currency based on the client’s requirement</li>
                        </ul>
                    </div>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                    </div>
                </div>
            </div>
        {/* </section> */}
    
    
    </> );
}

export default ClientSection;