import Image from 'next/image'
import MultipleOrganisation from '/styles/Assets/team_management/multiple-organisational.svg'

function TeamSection() {
    return ( <>
    
        {/* <section> */}
            <div className="container-fluid bg-blue">
                <div className="container py-4 text-center">
                    <h5>Team Management</h5>
                    <p className="w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row d-flex align-items-start py-4'>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                    </div>
                    <div className='col-lg-6 col-xs-12 px-5'>
                        <h6>Create multiple organisational units</h6>
                        <ul className='pe-5 px-0 pt-3 custom-unorder'>
                            <li className='pb-3'>If working on multiple projects for the same client, tenants can integrate multiple projects to a client.</li>
                            <li className='pb-3'>This allows the Admin to generate project-based reports for each client, thus making it easier to organize multiple projects under a single client.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='bg-gradient-blue'>
                <div className='container py-5'>
                    <div className='row d-flex align-items-start py-4'>
                        <div className='col-lg-6 col-xs-12 px-5'>
                            <h6>Invite and manage users</h6>
                            <ul className='pe-5 px-0 pt-3 custom-unorder'>
                                <li className='pb-3'>Admin can create multiple Clients working with the organization. </li>
                                <li className='pb-3'>Each Client will have a primary contact assigned and multiple support contacts.</li>
                                <li className='pb-3'>This helps to set multiple contacts for each Client company. The added contacts can be tagged as Technical Contact & Billing Contact. </li>
                                <li className='pb-3'>Furthermore, the Admin can customize payment currency, late payment charge fees, and set up customized payment reminders.</li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-xs-12'>
                            <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row d-flex align-items-start py-4'>
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                    </div>
                    <div className='col-lg-6 col-xs-12 px-5'>
                        <h6>Shift scheduling</h6>
                        <ul className='pe-5 px-0 pt-3 custom-unorder'>
                            <li className='pb-3'>From this page the Admin can create shift timings and can create shift templates (working hours).</li>
                            <li className='pb-3'>When employees work overtime, Admin can create separate tracking time to track extra efforts/hours.</li>
                            <li className='pb-3'>Shift scheduling can be done at the Company level, location/time zone, or can even be user specific.</li>
                        </ul>
                    </div>
                </div>
            </div>
        {/* </section> */}
    
    </> );
}

export default TeamSection;     