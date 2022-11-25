import Image from 'next/image'
import MultipleOrganisation from '/styles/Assets/team_management/multiple-organisational.svg'

function ProjectManagementSection() {
    return ( <>
    
            <div className="container-fluid bg-blue">
                <div className="container py-4 text-center">
                    <h5>Project Management</h5>
                    <p className="w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row d-flex align-items-start py-4'>  
                    <div className='col-lg-6 col-xs-12'>
                        <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                    </div>                  
                    <div className='col-lg-6 col-xs-12 px-5'>
                        <h6>Project Management</h6>
                        <ul className='pe-5 px-0 pt-3 custom-unorder'>
                            <li className='pb-3'>add new projects by opting for the Flat rate project or hourly project option.</li>
                            <li className='pb-3'>Link project to a specific client.</li>
                            <li className='pb-3'>Provide estimated rate, billability, and duration of the project.</li>
                            <li className='pb-3'>Map managers and team members to the project.</li>
                            <li className='pb-3'>Define the products and services offered to the client under the project.</li>
                            <li className='pb-3'>Select timesheet submission frequency and timesheet approvers up to 3 levels.</li>
                        </ul>
                    </div>
                   
                </div>
            </div>
            
            <div className='bg-gradient-blue'>
                <div className='container py-5'>
                    <div className='row d-flex align-items-start py-4'>                                  
                        <div className='col-lg-6 col-xs-12 px-5'>
                            <h6>Allocate team members</h6>
                            <ul className='pe-5 px-0 pt-3 custom-unorder'>
                                <li className='pb-3'>During project creation, assign a project manager, program manager, and team members to the project. </li>
                                <li className='pb-3'>Set specific start and end date of the member in the project approvers.</li>
                                <li className='pb-3'>Assign customized hourly rates to the team members along with their minimum and maximum hours required daily / weekly / monthly.</li>
                                <li className='pb-3'>Map members of the project as timesheet and time-off approvers and define their levels.</li>
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
                        <h6>Link tasks/timesheet to projects</h6>
                        <ul className='pe-5 px-0 pt-3 custom-unorder'>
                            <li className='pb-3'>No need to manually report tasks and timesheets to a project. ITP makes your work effortless by integrating all tasks and timesheets to the respective projects automatically.</li>
                            <li className='pb-3'>Gets all project's tasks and timesheets under a single tab and tracks them with ease in real-time.</li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div className='bg-gradient-blue'>
                <div className='container py-5'>
                    <div className='row d-flex align-items-start py-4'>                                  
                        <div className='col-lg-6 col-xs-12 px-5'>
                            <h6>Create detailed project reports</h6>
                            <ul className='pe-5 px-0 pt-3 custom-unorder'>
                                <li className='pb-3'>Estimate the potential costs of a new project by checking the estimated costs according to employees' hourly rates.</li>
                                <li className='pb-3'>Generates a detailed report with all the needed information of the project and divides each information separately for clear information.</li>
                                <li className='pb-3'>Check total team members assigned to a project, their allocation, leaves, activities, tasks, and hourly rate.</li>
                                <li className='pb-3'>Check collective time spent on the project and divide it up individually to see who has contributed and for how much time each based on allocated tasks.</li>
                                <li className='pb-3'>Check in-depth project billed and unbilled timesheet and work done.</li>
                                <li className='pb-3'>Track overall project progress, setback, and deadlines.</li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-xs-12'>
                            <Image src={MultipleOrganisation}  alt="Create multiple organisational units" />
                        </div>
                    </div>
                </div>
            </div>

    </> );
}

export default ProjectManagementSection;