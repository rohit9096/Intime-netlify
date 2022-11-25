import Header from "../components/Header";
import Script from 'next/script';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Footer from "../components/Footer";
import CTA from '../components/CTA'
import MicrosoftLogo from '/styles/Assets/microsoft-store.png'
import Faqbanner from '/styles/Assets/faq-banner.svg'
import AppletLogo from '/styles/Assets/Apple.png'
import BannerImage from '/styles/Assets/Home_Assets/Home-banner.svg'
import GooglePlayLogo from '/styles/Assets/google-play-store.png'
import MobileAppLogo from '/styles/Assets/mobile-app.png'

function FAQ() {
    return ( <>

        <Head>
            <title>FAQ's | Intime-Pros</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
        <Header />

        <div className='container pb-5 mb-3'> 
            <div className='row py-5 my-4 align-items-center sm-py-0'>
                <div className='col-lg-5 col-sm-12 mb-4'>
                    <div className='pb-5'>
                        <h1 className='fw-bold gradient-one banner-heading mb-0 sm-g-one'>Frequently</h1>
                        <h2 className='banner-heading mb-0'>Asked</h2>
                        <h2 className='gradient-two banner-heading mb-0'>Questions</h2>
                        {/* <p>Tune out distractions by empowering employees for better performance.</p> */}
                        <p className='text-muted banner-paragraph pt-2'>Get the most out of In Time Pro and learn everything about our features through these FAQ's</p>
                    </div>
                    <div className='d-flex gap-3 pe-5 sm-pe-0'>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control primary-outline rounded-0" placeholder="What are you looking for ?" aria-label="What are you looking for ?" aria-describedby="button-addon2" />
                            <button className="btn btn-cta btn-outline-secondary btn-success rounded-0 text-white" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12 text-end'>
                    <Image src={Faqbanner} alt="Home Banner" width={600} height={400} />
                </div>
            </div>
        </div>
    
        <section className="pt-5 sm-py-0">
            <div className="container text-center">
                <h5 className="pt-4 pb-5 fw-bold">Categories</h5>
            </div>
            <div className="container p-4 mb-5 ">
                <div className="d-flex align-items-start row">
                    <div className="nav flex-column nav-pills features-pill col-lg-2 col-xs-12 pe-4 sm-pe-0 mb-4 pe-md-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-General-tab" data-bs-toggle="pill" data-bs-target="#v-pills-general" type="button" role="tab" aria-controls="v-pills-General" aria-selected="true">General</button>
                        <button className="nav-link" id="v-pills-Started-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Started" type="button" role="tab" aria-controls="v-pills-Started" aria-selected="false">Getting Started</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                        <button className="nav-link" id="v-pills-company-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-company-profile" type="button" role="tab" aria-controls="v-pills-company-profile" aria-selected="false">Company Profile</button>
                        <button className="nav-link" id="v-pills-organization-unit-tab" data-bs-toggle="pill" data-bs-target="#v-pills-organization-unit" type="button" role="tab" aria-controls="v-pills-organization-unit" aria-selected="false">Organization Unit</button>
                        <button className="nav-link" id="v-pills-agent-app-tab" data-bs-toggle="pill" data-bs-target="#v-pills-agent-app" type="button" role="tab" aria-controls="v-pills-agent-app" aria-selected="false">Download Agent App</button>
                        <button className="nav-link" id="v-pills-time-off-tab" data-bs-toggle="pill" data-bs-target="#v-pills-time-off" type="button" role="tab" aria-controls="v-pills-time-off" aria-selected="false">Time Off</button>
                        <button className="nav-link" id="v-pills-services-tab" data-bs-toggle="pill" data-bs-target="#v-pills-services" type="button" role="tab" aria-controls="v-pills-services" aria-selected="false">Products & Services</button>
                        <button className="nav-link" id="v-pills-projects-tab" data-bs-toggle="pill" data-bs-target="#v-pills-projects" type="button" role="tab" aria-controls="v-pills-projects" aria-selected="false">Projects</button>
                        <button className="nav-link" id="v-pills-productivity-tab" data-bs-toggle="pill" data-bs-target="#v-pills-productivity" type="button" role="tab" aria-controls="v-pills-productivity" aria-selected="false">App Productivity</button>
                        <button className="nav-link" id="v-pills-tracking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tracking" type="button" role="tab" aria-controls="v-pills-tracking" aria-selected="false">Time Tracking</button>
                        <button className="nav-link" id="v-pills-timesheet-tab" data-bs-toggle="pill" data-bs-target="#v-pills-timesheet" type="button" role="tab" aria-controls="v-pills-timesheet" aria-selected="false">Timesheet</button>
                        <button className="nav-link" id="v-pills-users-tab" data-bs-toggle="pill" data-bs-target="#v-pills-users" type="button" role="tab" aria-controls="v-pills-users" aria-selected="false">Manage Users</button>
                        <button className="nav-link" id="v-pills-client-tab" data-bs-toggle="pill" data-bs-target="#v-pills-client" type="button" role="tab" aria-controls="v-pills-client" aria-selected="false">Client's</button>
                        <button className="nav-link" id="v-pills-acivities-tab" data-bs-toggle="pill" data-bs-target="#v-pills-acivities" type="button" role="tab" aria-controls="v-pills-acivities" aria-selected="false">Activities</button>
                    </div>
                    <div className="tab-content col-lg-10 col-xs-12 px-5 sm-px-0 px-md-0 px-lg-5" id="v-pills-tabContent">
                        <div className="tab-pane fade show active border-0 card" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is In Time Pro?</span>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        IN TIME Pro (ITP) is a desktop & cloud and subscription-based product which allows businesses to manage all their key tasks in a single integrated platform. 
                                        </p>
                                        <p className="mb-0">
                                        ITP is the only software solution your business will ever need. Simple yet powerful software to manage your entire business. 
                                        </p>
                                        <p className="mb-0">
                                        ITP is here to help you transform your business to make it future-ready by providing efficient clients and projects management with easy invoicing. It is a one-stop solution designed to manage and access all your employee's data from a centralized location. 
                                        </p>
                                        <p className="mb-0">
                                        ITP is aimed at effective time-tracking, employees activity tracking, timesheet/time-off management. This in turn increases your company’s overall productivity, minimizes business losses, and streamlines all your business processes.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How much does ITP cost?</span>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            ITP is free to try for 14 days (about 2 weeks), pricing starts from $5/mo./user and can go as high as $10/mo./user for the Enterprise version. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How can I subscribe to ITP?</span>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        On the ITP website, click on “Add payment method,” choose the payment type - Credit card or bank transfer, enter billing details and click on “Save payment method.” The selected payment method will be automatically charged each billing cycle. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="h4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#c4" aria-expanded="false" aria-controls="c4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is the difference between monthly & annual billing?</span>
                                    </button>
                                    </h2>
                                    <div id="c4" className="accordion-collapse collapse" aria-labelledby="h4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            The monthly billing plan charges your payment method on the first day of the month. The annual payment method charges once a year on the date when the plan was started. The annual subscription comes with a discounted rate, depending on the number of users that will use the platform. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="h5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#c5" aria-expanded="false" aria-controls="c5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How can I add or remove users from my plan?</span>
                                    </button>
                                    </h2>
                                    <div id="c5" className="accordion-collapse collapse" aria-labelledby="h5" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            To add or remove users from your plan, click on the “Settings” icon in the top right corner of the website, then select “Manage Users,” to add a user, click on “Invite User” option to invite user to register. Similarly, search for users you want to delete by clicking on “Filter by Role” option and click on the “delete” icon.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-Started" role="tabpanel" aria-labelledby="v-pills-Started-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample2">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga1" aria-expanded="true" aria-controls="cga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="cga1" className="accordion-collapse collapse show" aria-labelledby="hga1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <div>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </div>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <div>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </div>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga2" aria-expanded="false" aria-controls="cga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="cga2" className="accordion-collapse collapse" aria-labelledby="hga2" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-5 ms- pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga3" aria-expanded="false" aria-controls="cga3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="cga3" className="accordion-collapse collapse" aria-labelledby="hga3" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <div>
                                        <ol>
                                        <li> Teams / Users management</li>
                                        <li> Clients' management</li>                              
                                        <li> Projects management </li>                              
                                        <li> Task/Time management </li>                               
                                        <li> Timesheet management </li>                               
                                        <li> Employee management </li>                              
                                        <li> Time-off/Leave management </li>                                    
                                        <li> Easy invoicing </li>                         
                                        <li> Productivity definition & calculation </li>
                                        <li>Real-time location tracking </li>                                       
                                        <li>Screen capturing in real-time </li>
                                        <li>Desktop / Mobile app </li> 
                                        </ol>                               
                                    
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga4" aria-expanded="false" aria-controls="cga4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="cga4" className="accordion-collapse collapse" aria-labelledby="hga4" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <div className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga5" aria-expanded="false" aria-controls="cga5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="cga5" className="accordion-collapse collapse" aria-labelledby="hga5" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <div className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample3">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="pga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccga1" aria-expanded="true" aria-controls="ccga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccga1" className="accordion-collapse collapse show" aria-labelledby="pga1" data-bs-parent="#accordionExample3">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        My Profile is the user's personal information, where the user can see their login information which is used to access their pro account. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="pga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccga2" aria-expanded="false" aria-controls="ccga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are the features of “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccga2" className="accordion-collapse collapse" aria-labelledby="pga2" data-bs-parent="#accordionExample3">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <div>
                                            <ul>
                                                <li>Users can edit their First Name, Last Name and Profile Picture. </li>
                                                <li>Profile picture can be selected from local machine or user can also select avatar provided by in time pro. Only .jpg and .png format is acceptable to upload the profile image. </li>
                                                <li>Change password is used to change the password of in time pro account. It is only accessible if the change password access is given to user by admin at the time of inviting user. </li>
                                                <li>Logout of all in time pro account: By clicking on this option, you will be logged out of all applications across all devices, including the current one. </li>
                                                <li>This includes in time pro Web app, Agent app and Mobile app.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-company-profile" role="tabpanel" aria-labelledby="v-pills-company-profile-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample4">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ppga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga1" aria-expanded="true" aria-controls="ccpga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Company Profile”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga1" className="accordion-collapse collapse show" aria-labelledby="ppga1" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            The “Company Profile” contains key details about your business that are displayed on all your Invoices. This is also where you can choose your Base Currency, Date Format and you can set your report settings as needed. You can add public holidays and various locations of your office including settings of employee activities tracking. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga8">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga8" aria-expanded="false" aria-controls="ccpga8">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are the features of “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga8" className="accordion-collapse collapse" aria-labelledby="cpga8" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <div>
                                            <ul>
                                                <li>Users can edit their First Name, Last Name and Profile Picture. </li>
                                                <li>Profile picture can be selected from local machine or user can also select avatar provided by in time pro. Only .jpg and .png format is acceptable to upload the profile image. </li>
                                                <li>Change password is used to change the password of in time pro account. It is only accessible if the change password access is given to user by admin at the time of inviting user. </li>
                                                <li>Logout of all in time pro account: By clicking on this option, you will be logged out of all applications across all devices, including the current one. </li>
                                                <li>This includes in time pro Web app, Agent app and Mobile app.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga2" aria-expanded="false" aria-controls="ccpga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Company Details”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga2" className="accordion-collapse collapse" aria-labelledby="cpga2" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">This is where you can add or edit your organization details like: </p>
                                        <p className="mb-0">
                                        <p className="mb-0">•	Organization Name: Name of the organization, it will prepopulate from on boarding process and can be editable. </p>
                                        <p className="mb-0">•	Organization Address: Detailed address of your organization. </p>
                                        <p className="mb-0">•	Owner: Select owner from dropdown list. </p>
                                        <p className="mb-0">•	Time Zone </p>
                                        <p className="mb-0">•	Date Format: Selected date format get applied to all the modules where date is present.</p> 
                                        <p className="mb-0">•	Default Hourly Rate: Default rate per hour for any service provided to clients. </p>
                                        <p className="mb-0">•	Business Phone/Mobile Number </p>
                                        <p className="mb-0">•	Base Currency </p>
                                        <p className="mb-0">•	Email Recipients: To whom activities report you want to send based on send email report settings. </p>
                                        <p className="mb-0">•	Send Email Report: Activity reports are sent to recipient on daily or weekly or monthly basis and at what time. </p>
                                        <p className="mb-0">•	Company Logo: jpg or png format </p>

                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga3" aria-expanded="false" aria-controls="ccpga3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Location”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga3" className="accordion-collapse collapse" aria-labelledby="cpga3" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p>
                                        Locations are the different offices located in different cities or countries. The default organization location is displayed on top with address details. 
                                        You can add a new location by clicking on “Add Group” button. The right panel will open to add details of the location. Added location will display on locations list. 
                                        Filter By Location used to filter location by city. 
                                        You can edit or delete any location from the list. 
                                        You can assign users to various locations from the manage user module. 

                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga4" aria-expanded="false" aria-controls="ccpga4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How do add “Working Days”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga4" className="accordion-collapse collapse" aria-labelledby="cpga4" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p>
                                        You can select the location from the Location dropdown and add working and tracking days settings for the users under the selected location. 
                                        </p>
                                        <p className="mb-0">•	Working Days are the days when you want your employees to work in a week along with shift timings. </p>
                                        <p className="mb-0">•	Select the Location </p>
                                        <p className="mb-0">•	Select Working Days </p>
                                        <p className="mb-0">•	Work Starts </p>
                                        <p className="mb-0">•	Work Ends   </p>
                                        <p className="mb-0">•	Minimum Hours - It will auto calculate from start and end time. </p>
                                        <p className="mb-0">•	Turn on/off Flexible Working Hours option if it is applicable to the users from the selected location. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga5" aria-expanded="false" aria-controls="ccpga5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to set up “Tracking Days”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga5" className="accordion-collapse collapse" aria-labelledby="cpga5" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p>
                                        Tracking Days are the days when you want to track the activities of your employees by giving a start time and end time. The agent app will track the activities of employee machines based on these settings. 
                                        </p>
                                        <p className="mb-0">•	Select the Location </p>
                                        <p className="mb-0">•	Select Time Zone </p>
                                        <p className="mb-0">•	Select Tracking Days </p>
                                        <p className="mb-0">•	Tracking Ends </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga6">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga6" aria-expanded="false" aria-controls="ccpga6">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to add “Public Holidays”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga6" className="accordion-collapse collapse" aria-labelledby="cpga6" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p>
                                        You can add Public Holidays for multiple locations by clicking the “Add Holiday” button. It will open a right-side panel to add details of the holiday(s). 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga7">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga7" aria-expanded="false" aria-controls="ccpga7">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to add holiday?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga7" className="accordion-collapse collapse" aria-labelledby="cpga7" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                       <p className="mb-0">•	Click on “Add Holiday” button </p>
                                       <p className="mb-0">•	Select Holiday Date </p>
                                       <p className="mb-0">•	Enter a Holiday Name </p>
                                       <p className="mb-0">•	Select the location from “Applicable for” dropdown to add holiday for selected location. </p>
                                       <p className="mb-0">•	Add Description </p>
                                       <p className="mb-0">•	Click on Save </p>
                                       <p className="mb-0">•	This added holiday will reflect on the user calendar in Time Off module. </p>
                                       <p className="mb-0">•	You can edit or delete any existing holiday present on the holiday list. </p>
                                    </div>
                                    </div>
                                </div>                           
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga9">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga9" aria-expanded="false" aria-controls="ccpga9">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Capture Setting” and how do I set it up?</span>
                                    </button>
                                    </h2>
                                    <div id="ccpga9" className="accordion-collapse collapse" aria-labelledby="cpga9" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">You can setup your employee activity capture settings from the capture settings menu. Where you can set up screen capture and tracking settings. </p>
                                        <p className="mb-0 fw-semibold">Screenshots: </p>
                                        <p className="mb-0">From this section you can enable Screen Capture functionality: </p>
                                        <p className="mb-0">•	Enable Screen Capture - This will turn on your employee screenshot capturing feature. </p>
                                        <p className="mb-0">•	Blur Screen Capture - This capture blurs the screenshots on employee machines. </p>
                                        <p className="mb-0">•	Screen Capture Interval (Min) - You can set up the time frequency of screen capture by selecting minutes from the dropdown. </p>
                                        <p className="mb-0">•	Screen Capture Quality - You can setup the quality of captured screenshots from this option. </p>
                                        <p className="mb-0 fw-semibold">Tracking: </p>
                                        <p className="mb-0">From this section you can Enable/Disable tracking: </p>
                                        <p className="mb-0">•	Enable / Disable App Tracking - It will disable the application tracking of employee machine from agent application. </p>
                                        <p className="mb-0">•	Enable / Disable URL Tracking - It will disable URL tracking of employee machine from agent application. </p>
                                        <p className="mb-0">•	Enable / Disable Private Time - Employee cannot use Private Time option if it is disabled from company profile. </p>
                                        <p className="mb-0">•	Idle Time Tracking - This defines when you want to track the user activity as idle. </p>
                                        <p className="mb-0">•	Offline Time </p>
                                        <p className="mb-0">•	If enabled, employees can add offline time from productivity bar, and it will automatically add to active time. </p>
                                        <p className="mb-0">•	If disabled, employee cannot add offline time from productivity bar. </p>
                                        <p className="mb-0">•	If Approve Only is selected, then employee can add the offline time, but it will not get automatically added to active time. It first goes to the manager for approval. Once the manager approves the offline time it will get added to active time.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-organization-unit" role="tabpanel" aria-labelledby="v-pills-organization-unit-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample5">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga1" aria-expanded="true" aria-controls="oga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Organization Unit”? </span>
                                    </button>
                                    </h2>
                                    <div id="oga1" className="accordion-collapse collapse show" aria-labelledby="ouga1" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        After setting up the company profile, the Admin needs to add organization units. The organization unit has an employee and a department tree view. The organization unit is useful for a user to understand the overall hierarchical structure of units. They can also quickly see employees associated with which unit. 
                                        </p>                             
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga2" aria-expanded="false" aria-controls="oga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to add “Root Unit” & “Sub-Units”? </span>
                                    </button>
                                    </h2>
                                    <div id="oga2" className="accordion-collapse collapse" aria-labelledby="ouga2" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Users can add Organization Units from Settings &gt; &gt; Organization Unit.
                                        </p>
                                        <p className="mb-0">
                                            Root Unit is the default organization unit; all other units should be added under root unit.
                                        </p>
                                        <p className="mb-0">
                                            To set up Organization Unit, user need to click on “Add Root Unit” 
                                        </p>
                                        <p className="mb-0">•	Enter Root Unit Name </p>
                                        <p className="mb-0">•	Enter Description </p>
                                        <p className="mb-0">•	Upload picture for root unit and save.
                                        </p>
                                        <p className="mb-0">This will create the root unit of the organization.</p> 
                                        <p className="mb-0">Now user can add multiple sub-units under root unit by clicking on three dots present on root unit. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga3" aria-expanded="false" aria-controls="oga3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to add user to “Organization Unit”?  </span>
                                    </button>
                                    </h2>
                                    <div id="oga3" className="accordion-collapse collapse" aria-labelledby="ouga3" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">The Admin can add a user by clicking on the unit and from right side panel click on “Add Users” button. </p>
                                        <p className="mb-0">Once clicked, the panel will open a list of all existing users in the organization.</p>
                                        <p className="mb-0">If the list is blank, then admin needs to invite the users first. </p>
                                        <p className="mb-0">Selected user from the list will get added to the selected unit. </p>
                                        <p className="mb-0">Admin can remove any user from any unit and  assign different units to the user, it can be done from Manage Users &gt;&gt; Edit users' field. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga4" aria-expanded="false" aria-controls="oga4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to edit “Organization Unit”? </span>
                                    </button>
                                    </h2>
                                    <div id="oga4" className="accordion-collapse collapse" aria-labelledby="ouga4" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Users can click on three dots present on unit and click on edit unit option. 
                                        </p>
                                        <p className="mb-0">
                                            This allows the user to edit the name of Organization Unit, Description, and Image. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga5" aria-expanded="false" aria-controls="oga5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to delete “Organization Unit”? </span>
                                    </button>
                                    </h2>
                                    <div id="oga5" className="accordion-collapse collapse" aria-labelledby="ouga5" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            User can delete the Organization Unit by clicking on three dots.   
                                        </p>
                                        <p className="mb-0">
                                            User cannot delete “Root Unit,” only an Admin can delete “Root Unit.” 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-agent-app" role="tabpanel" aria-labelledby="v-pills-agent-app-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample6">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="apga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#capga1" aria-expanded="true" aria-controls="capga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How do “Download Agent App”? </span>
                                    </button>
                                    </h2>
                                    <div id="capga1" className="accordion-collapse collapse show" aria-labelledby="apga1" data-bs-parent="#accordionExample6">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            In Time Pro has agent application implemented for Windows and Mac operating systems. Users can download the Agent App from Download option present on Header section. Once the application is downloaded and installed, users can login with their credentials. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#capga2" aria-expanded="false" aria-controls="capga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are the features tracked by “Agent App”? </span>
                                    </button>
                                    </h2>
                                    <div id="capga2" className="accordion-collapse collapse" aria-labelledby="cpga2" data-bs-parent="#accordionExample6">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">•	Tracks the Applications and Websites used by user and the time spent on each application. </p>
                                        <p className="mb-0">•	Captures Screenshots based on screen capture time set on company profile. </p>
                                        <p className="mb-0">•	Captures Blur Screenshots. </p>
                                        <p className="mb-0">•	Calculates mouse events of employee machine. </p>
                                        <p className="mb-0">•	Tracks live locations of employee and time spent on each location. </p>
                                        <p className="mb-0">•	Tracks private time of user. </p>
                                        <p className="mb-0">•	Tracks Idle Time and Offline Time of user. </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-time-off" role="tabpanel" aria-labelledby="v-pills-time-off-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample7">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga1" aria-expanded="true" aria-controls="ctoga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Time Off”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga1" className="accordion-collapse collapse show" aria-labelledby="htoga1" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Managing leave is a crucial part of HR routine and time consuming. in time pro Time Off is a simple and user-friendly online leave management module that helps you to record, manage and keep track of your employees' leave/ time off details effectively with minimum time. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga2" aria-expanded="false" aria-controls="ctoga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How do add “Away Time”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga2" className="accordion-collapse collapse" aria-labelledby="htoga2" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">You can add your away time from my time off section by clicking on “Add away time.” Away time can be added by the employee to apply for a leave. OR manager can also add the away time for any employee of the organization, it can be business trip/conference. </p>
                                        <p className="mb-0">•	Select Team and Member </p>
                                        <p className="mb-0">•	Select from date and to date </p>
                                        <p className="mb-0">•	Select Leave Type and if Half Day is selected then select First Half or Second Half </p>
                                        <p className="mb-0">•	Select Away Time Type </p>
                                        <p className="mb-0">•	Add Reason for Leave and click on Save. </p>
                                        <p className="mb-0">You can see the history of the selected team and team members added away time on the right side.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga3" aria-expanded="false" aria-controls="ctoga3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “My Time Off”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga3" className="accordion-collapse collapse" aria-labelledby="htoga3" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                             Added away time will display in my time off list. Here you can filter the away time by “away time type and status” to see if the away time approved, rejected or pending. Users can export the list to pdf or excel. You can sort the records by selecting Newest on Top or Oldest on Top. On top of the list, you can see Available Balance of Leaves, Currently Booked Leaves, Balance After Booked, Estimated Balance. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga4" aria-expanded="false" aria-controls="ctoga4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is a “Calendar”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga4" className="accordion-collapse collapse" aria-labelledby="htoga4" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            This tab represents the calendar view of all added away time by the employees. You can see the calendar in Monthly/Weekly and Daily view. Each Away time type represents with the color on calendar. If you click on any added away time, you can see the details on right side panel. The filter option is present to filter out data by Reporting location of the user, filter “By Project,” filter “By User.” Search option is used to search by entering any keyword. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga5" aria-expanded="false" aria-controls="ctoga5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Approvals”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga5" className="accordion-collapse collapse" aria-labelledby="htoga5" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        From this section the Admin or the Approver can see the requests received for Leaves from the users. Approver can click on any record from this list and can approve or reject the request. Approver can also perform approve or reject action on multiple leave requests by selecting the checkbox on the list. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-services" role="tabpanel" aria-labelledby="v-pills-services-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample8">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga1" aria-expanded="true" aria-controls="csoga1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Products”? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga1" className="accordion-collapse collapse show" aria-labelledby="hsoga1" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Products are used when you are billing for products sold to your client under any project. You can add taxes to your products so that they are automatically added whenever the product is added to an Invoice. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga2" aria-expanded="false" aria-controls="csoga2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to create “New Product”? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga2" className="accordion-collapse collapse" aria-labelledby="hsoga2" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">•	Click on the gear icon in the top left corner. </p>
                                        <p className="mb-0">•	Click on the Products and Services menu </p>
                                        <p className="mb-0">•	From Products tab click on “Add Product” </p>
                                        <p className="mb-0">•	Enter a Name for your product </p>
                                        <p className="mb-0">•	Add Description if you would like (optional) </p>
                                        <p className="mb-0">•	Add Pricing Information like Rate and Code. </p>
                                        <p className="mb-0">•	From Settings, Click on Add Taxes to include up to two taxes every time it is invoiced. (You can add up to 5 taxes and can only apply two taxes out of five) </p>
                                        <p className="mb-0">•	Click on the Save button. </p>
                                        <p className="mb-0">Newly created products will be displayed in the Active Products List. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga3" aria-expanded="false" aria-controls="csoga3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Services”? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga3" className="accordion-collapse collapse" aria-labelledby="hsoga3" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Services are used under the project where clients get billed for provided services. You can bill an hourly or flat rate for the work you are doing. Different services can be used while tracking time, so your clients know exactly what you are billing them for. You can also see where your time is going so you can estimate and bill for Projects more accurately. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga4" aria-expanded="false" aria-controls="csoga4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to create a new “Service”? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga4" className="accordion-collapse collapse" aria-labelledby="hsoga4" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">To create a new Service, follow below steps: </p>
                                        <p className="mb-0">•	Click on the gear icon in the top left corner </p>
                                        <p className="mb-0">•	Click on Products & Services menu </p>
                                        <p className="mb-0">•	From Services tab click on “Add Service” </p>
                                        <p className="mb-0">•	Add Description if you would like (optional) </p>
                                        <p className="mb-0">•	Add Pricing Information like Rate and Code. </p>
                                        <p className="mb-0">•	From Settings, Click on Add Taxes to include up to two taxes every time it is invoiced. (You can add up to 5 taxes and can only apply two taxes out of five) </p>
                                        <p className="mb-0">•	Check the Billable checkbox if you want to make the service billable for the client.</p>
                                        <p className="mb-0">•	Check “Automatically add this service to all new project” to add this service automatically while creating new project. </p>
                                        <p className="mb-0">•	Click on the Save button. </p>
                                        <p className="mb-0">Newly created products will be displayed in the Active services List. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga5" aria-expanded="false" aria-controls="csoga5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Archived/Deleted Products & Services List”? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga5" className="accordion-collapse collapse" aria-labelledby="hsoga5" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0 fw-semibold">
                                            Archived List: 
                                        </p>
                                        <p className="mb-0">•	This is the list of records which have been archived by the user. </p>
                                        <p className="mb-0">•	User can restore the archived record to Active list. </p>
                                        <p className="mb-0">•	User can delete any record from archived list and that deleted record will display in deleted list. </p>
                                        <p className="mb-0">•	Users cannot edit archived records. </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to Restore multiple records. </p>
                                        <p className="mb-0">•	Export option is used to export the list in pdf or excel file. </p>
                                        <p className="mb-0 fw-semibold">
                                            Deleted List: 
                                        </p>
                                        <p className="mb-0">•	Records which are deleted from Active and Archived list will display in deleted list. </p>
                                        <p className="mb-0">•	User can restore deleted record to Active list. </p>
                                        <p className="mb-0">•	Users cannot edit deleted records. </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to restore multiple records. </p>
                                        <p className="mb-0">•	Export option is used to export the list in pdf or excel file. </p>
                                        <p className="mb-0">•	The delete option from deleted list will delete the record permanently from the system and there will be no option to restore that record. </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-projects" role="tabpanel" aria-labelledby="v-pills-projects-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample9">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp1" aria-expanded="true" aria-controls="chp1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are Projects? </span>
                                    </button>
                                    </h2>
                                    <div id="chp1" className="accordion-collapse collapse show" aria-labelledby="hp1" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                         Projects are created for clients where the organization offers different services under that project and client get invoiced for those services. Users can review all time tracked by team members as well as see all invoices and timesheets associated with a specific Project. 
                                        </p>
                                        <p className="mb-0 fw-semibold">Active Projects List: </p>
                                        <p className="mb-0">•	This is the list of all active/in progress/upcoming projects under the organization. </p>
                                        <p className="mb-0">•	Sorting has three options </p>
                                        <p className="mb-0 ps-3">o	Newest On Top, to display newly added project on top of the list. </p>
                                        <p className="mb-0 ps-3">o	Oldest On Top, to display oldest project on top of the list. </p>
                                        <p className="mb-0 ps-3">o	Rate low to high and high to low, it is based on the project rate. </p>
                                        <p className="mb-0">•	Filter by Project is to filter any specific project on a list. user can select multiple projects to filter. </p>
                                        <p className="mb-0">•	Filter by Member is to filter the project by selecting any team member. Users can select multiple members to filter the project that belongs to the selected member. </p>
                                        <p className="mb-0">•	Export option used to export the data to pdf or excel file. </p>
                                        <p className="mb-0">•	Action option has Edit, Archive, and Delete option </p>
                                        <p className="mb-0">•	Users can archive or delete multiple projects at a time by using bulk option present on top of the list. Here users can select the checkbox of projects which need to be archived or deleted and click on archive or delete option from top. </p>
                                        <p className="mb-0">•	Archived and deleted projects will move to Archived and Deleted projects list. </p>
                                        <p className="mb-0">•	Users can view project data by selecting card view, more details of the project are present on card view compared to list view. </p>
                                        <p className="mb-0">•	“Add Project” used to create new project. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp2" aria-expanded="false" aria-controls="chp2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to “Add Project”? </span>
                                    </button>
                                    </h2>
                                    <div id="chp2" className="accordion-collapse collapse" aria-labelledby="hp2" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">You can add new projects by opting for the Flat rate project or hourly project option. </p>
                                        <p className="mb-0">Flat Rate Project: Select this option to start a project and charge a flat rate. </p>
                                        <p className="mb-0">Hourly Project: Select this option to start project and charge hourly rates for tasks done on the project. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp3" aria-expanded="false" aria-controls="chp3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">Add new project screen: </span>
                                    </button>
                                    </h2>
                                    <div id="chp3" className="accordion-collapse collapse" aria-labelledby="hp3" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                       <p className="mb-0">•	Enter Project Name, Description, And Image (Logo of the project) </p>
                                       <p className="mb-0">•	Select Client </p>
                                       <p className="mb-0">•	Add Project Duration, Flat Rate, Start Date, End Date, Billability</p>
                                       <p className="mb-0">•	Assign team members with their Start Date, End Date, Hourly Rate and Min/Max Hours to be spent on the project on a weekly basis. </p>
                                       <p className="mb-0">•	Add Project Services (It will display from products and services module) </p>
                                       <p className="mb-0">•	You can change project type from the Project Type section available on the right side of the settings in Add New Project screen. </p>
                                       <p className="mb-0">•	Select Time Off Approver who can approve the time off, of the team members. </p>
                                       <p className="mb-0">•	Select Timesheet Submission Frequency and Timesheet Approver </p>
                                       <p className="mb-0">•	Users can add three levels of timesheet approver who can approve or reject the timesheets of this project. </p>
                                       <p className="mb-0">•	Select Client Approver </p>
                                       <p className="mb-0">•	Approver window is the time provided for approver to approve or reject the time off or timesheet of project team members. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp4" aria-expanded="false" aria-controls="chp4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Project Details”? </span>
                                    </button>
                                    </h2>
                                    <div id="chp4" className="accordion-collapse collapse" aria-labelledby="hp4" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Any Project's details can be viewed by going to the Projects section and clicking on any Project. </p>
                                        <p className="mb-0"> Header sections has project details: Project Logo, Project Name, Billability Status, Client Details, Project Services, Start Date, End Date, Project Creation Date Progress Bar, Project Manager, Program Manager, Created By, Count of Team Members, Tasks Count, How Many Days Due. </p>
                                        <p className="mb-0">Users can edit the project information by clicking on pencil icon. </p>
                                        <p className="fw-semibold mb-0">There are six tabs present on the project's details page: </p>
                                        <p className="mb-0">•	Team: All assigned Project Team Members are displayed with their profile image. </p>
                                        <p className="mb-0">•	Allocation: Calendar view to see team members allocation on the project with public holidays and team member’s leaves. </p>
                                        <p className="mb-0">•	Tasks: List of tasks added under this project </p>
                                        <p className="mb-0">•	Activities: Real time activities of team members which tracks from agent application </p>
                                        <p className="mb-0">•	Timesheet: List of timesheets submitted by team members </p>
                                        <p className="mb-0">•	Invoicing: List of invoices created for the client </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp5" aria-expanded="false" aria-controls="chp5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Archived/Deleted Project List”? </span>
                                    </button>
                                    </h2>
                                    <div id="chp5" className="accordion-collapse collapse" aria-labelledby="hp5" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0 fw-semibold">
                                         Archived Project List: 
                                        </p>
                                        <p className="mb-0">•	This is the list of projects which have been archived by the user. </p>
                                        <p className="mb-0">•	Users can restore the archived project to Active Project list. </p>
                                        <p className="mb-0">•	User can delete any project from archived project list and that deleted project will display in deleted project list. </p>
                                        <p className="mb-0">•	User cannot edit archived projects </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to restore multiple projects. </p>
                                        <p className="mb-0">•	Export option is used to export the list in pdf or excel file. </p>
                                        <p className="mb-0 fw-semibold">
                                            Deleted Project List:  
                                        </p>
                                        <p className="mb-0">•	Project which are deleted from Active projects and archived projects will display in deleted projects list. </p>
                                        <p className="mb-0">•	User can restore deleted projects to active projects list. </p>
                                        <p className="mb-0">•	User cannot edit deleted project </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to restore multiple projects. </p>
                                        <p className="mb-0">•	Export option is used to export the list in pdf or excel file. </p>
                                        <p className="mb-0">•	The delete option from deleted project list will delete the project record permanently from the system and there will be no option to restore that record. </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-productivity" role="tabpanel" aria-labelledby="v-pills-productivity-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample10">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod1" aria-expanded="true" aria-controls="chprod1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “App Productivity”? </span>
                                    </button>
                                    </h2>
                                    <div id="chprod1" className="accordion-collapse collapse show" aria-labelledby="hprod1" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            App Productivity is where you can categories applications used by employees. You can create, edit, or delete any category. Applications used by employees and tracked by agent application are displayed in neutral state, you can move it to productive or unproductive state based on your preference. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod2" aria-expanded="false" aria-controls="chprod2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Categories”? </span>
                                    </button>
                                    </h2>
                                    <div id="chprod2" className="accordion-collapse collapse" aria-labelledby="hprod2" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            There are six categories defined by in time pro, which cannot be edited or deleted. You can only add or remove applications from these categories.   
                                        </p>
                                        <p className="mb-0 fw-semibold">Default categories: </p>
                                        <p className="mb-0">•	Office Apps </p>
                                        <p className="mb-0">•	Development Tool </p>
                                        <p className="mb-0">•	Social Media </p>
                                        <p className="mb-0">•	Internet </p>
                                        <p className="mb-0">•	Entertainment </p>
                                        <p className="mb-0">•	Other</p>
                                        <p className="mb-0">You can add a new category by clicking on “Add category” button, enter category name and description, select applications you want to add under category and click on Save. 
                                            Newly added category will display on category list. You can see the application count present in each category-on-Category list. You can edit the category details from the action option. If you want to see applications present in any category, then you can select view application option from action. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod3" aria-expanded="false" aria-controls="chprod3">
                                        <span className="ps-3 ms-1 fw-bold fs-5"> What is “Productivity Definition”?  </span>
                                    </button>
                                    </h2>
                                    <div id="chprod3" className="accordion-collapse collapse" aria-labelledby="hprod3" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        This is where you can see used applications and websites of the employees in neutral state. You can differentiate the applications by selecting category from left side. 
                                        Productivity definition is where you can define these used applications as productive or unproductive. Based on this application definition productivity bar displays data in time and attendance page of activities module. 

                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod4" aria-expanded="false" aria-controls="chprod4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to define the application as productive or unproductive?  </span>
                                    </button>
                                    </h2>
                                    <div id="chprod4" className="accordion-collapse collapse" aria-labelledby="hprod4" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                             •	From neutral tab, select the application from checkbox and click on “Move to Productive” or “Move to Unproductive” based on your preference. 
                                        </p>
                                        <p className="mb-0">
                                            •	Once you move the application, it will display in productive or unproductive list. 
                                        </p>
                                        <p className="mb-0">
                                            The productivity of employees is calculated from time spent on productive applications. 
                                        </p>
                                        <p className="mb-0">
                                            If you want to make any application productive or unproductive for organization unit then, you can define the application productive or unproductive by selecting the organization unit from “Select Organization Unit” dropdown. 
                                        </p>
                                        <p className="mb-0">
                                        If you want to make any application productive or unproductive for any project team members, then you can select the project from “Select Project” dropdown. 
                                        </p>
                                        <p className="mb-0">
                                        If you want to make any application productive or unproductive for any user, then you can select the user from “Select Team Member” dropdown
                                        </p>
                                        <p className="mb-0">
                                        Please Note: Productivity Definition is the global definition settings which is applicable for all the employees in the organization and if any user has separate definition settings, then the productivity gets calculated based on individual settings and not by the global settings. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod5" aria-expanded="false" aria-controls="chprod5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Productivity Calculation”? </span>
                                    </button>
                                    </h2>
                                    <div id="chprod5" className="accordion-collapse collapse" aria-labelledby="hprod5" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            You can create a custom formula for the calculation of employees’ productivity. The productivity score will be calculated as a ratio of the sum of activities that you consider productive or neutral and employees active time, office time.  
                                        </p>
                                        <p className="mb-0">
                                        you can see the productivity calculation in percentage on Activities &gt; Real Time Tracking &gt; Team Tracking page, where the productivity of all active employees gets calculated based on the formula selected in productivity definition. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-tracking" role="tabpanel" aria-labelledby="v-pills-tracking-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample11">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt1" aria-expanded="true" aria-controls="chtt1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Time Tracking”? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt1" className="accordion-collapse collapse show" aria-labelledby="htt1" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Time tracking feature boosts your team productivity and increases transparency even with remote working between team members, projects managers, accounting, and management. It calculates the time spent on each task by tracking the time with a timer. This tracked time of the task gets added to timesheets while submission of timesheets. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt2" aria-expanded="false" aria-controls="chtt2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Team Tasks”? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt2" className="accordion-collapse collapse" aria-labelledby="htt2" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        This is where you can add, view, and manage the tasks for your team members. Go to Time Tracking &gt;&gt; Team Tasks and click on “Add New Task” button. A new tab will open to add new tasks. 
                                        </p>
                                        <p className="mb-0">•	Select the Project </p>
                                        <p className="mb-0">•	Add Task Name </p>
                                        <p className="mb-0">•	Assign it to the member who you want to work on the task </p>
                                        <p className="mb-0">•	Add Task Description </p>
                                        <p className="mb-0">•	System Info (optional) </p>
                                        <p className="mb-0">•	Select Priority, Severity of the task </p>
                                        <p className="mb-0">•	Select Activity Name </p>
                                        <p className="mb-0">•	Add Original Estimate of the task </p>
                                        <p className="mb-0">•	Select Billability Status </p>
                                        <p className="mb-0">•	Add Attachment (optional) </p>
                                        <p className="mb-0">•	Click on Save </p>
                                        <p className="mb-0">New added task will display on team tasks list. The user to whom the task is assigned will receive an email. </p>
                                        <p className="mb-0">Team tasks is the list of all tasks from where you can add comments to any task. You can edit any task from the action option. Export to pdf and excel file option is present to export the list into pdf and excel file. You can see track history of the task by clicking on any task from the list. </p>
                                        <p className="mb-0">You can filter the tasks by applying Filter by Project, Filter by User, Filter by Status. You can search for any task by entering any keyword in the search field. Sorting can be done by Newest on Top and or Oldest on Top. </p>
                                        <p className="mb-0">You can delete any task from the action option. Active tasks cannot be deleted.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt3" aria-expanded="false" aria-controls="chtt3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to “Import Tasks”? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt3" className="accordion-collapse collapse" aria-labelledby="htt3" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            If you are looking to save time from adding each new task one by one manually, you can import your list of tasks in bulk instead. 
                                        </p>
                                        <p className="mb-0">This is where you can add, view, and manage the tasks for your team members. Go to Time Tracking &gt;&gt; Team Tasks and click on “Add New Task” button. A new tab will open to add new tasks. </p>
                                        <p className="mb-0">•	Click on “Import tasks” option from team tasks list </p>
                                        <p className="mb-0">•	From the popup download the sample file provided by system </p>
                                        <p className="mb-0">•	Enter your task data into the excel file by following the sample file </p>
                                        <p className="mb-0">•	Go to Time Tracking &gt; Team Tasks &gt; Import tasks &gt; choose file </p>
                                        <p className="mb-0">•	Choose the excel file of tasks you want to import and click on Save </p>
                                        <p className="mb-0">•	Check notifications for import file status </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt4" aria-expanded="false" aria-controls="chtt4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “My Tasks”? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt4" className="accordion-collapse collapse" aria-labelledby="htt4" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        Each user can see the tasks assigned to them in my tasks tab. It is where the user can track the time of the task by timer. 
                                        </p>
                                        <p className="mb-0 fw-semibold">The header section of my tasks has: </p>
                                        <p className="mb-0"><span className="fw-semibold">•	Total Projects:</span> This is the count of projects where the user is aligned. </p>
                                        <p className="mb-0"><span className="fw-semibold">•	Total Tracked time:</span> This is the tracked time of all tasks on which user has worked. </p>
                                        <p className="mb-0"><span className="fw-semibold">•	Arrived At: </span> This time is tracked from the Agent App, when the user logs in for the day. </p>
                                        <p className="mb-0"><span className="fw-semibold">•	Time At Work: </span> Time user has spent from arrival to current time. 
                                        On top of my tasks page a task timer is present. where user can select the status as needed, below are the status: 
                                        </p>
                                        <p className="mb-0">•	Busy </p>
                                        <p className="mb-0">•	Idle</p>
                                        <p className="mb-0">•	Online </p>
                                        <p className="mb-0">•	Offline </p>
                                        <p className="mb-0">•	Private Time </p>
                                        <p className="mb-0"><span className="fw-semibold">•	New:</span> User can see newly added tasks in new tab. Each task has start button to start the timer of the task. Users can edit the task from the action option, it is used when user has worked on the task, but it is not tracked from the timer. Edit Task functionality gives the option to user to add the time which is not tracked from the timer. </p>
                                        <p className="mb-0"><span className="fw-semibold">•	In Progress:</span> Once the timer of a new task starts from new tab then task will move to in progress tab. Each task has a start button to start the timer and stop button to stop the timer whenever needed. Edit Task from action option is used to add the time on task which is not tracked from the timer. View Details from action option is to see attachments on the task and description. Once the task is completed user can mark it is complete by selecting the circle on task, this will move the task to completed tab. User can see track history of the task by clicking on task. </p>
                                        <p className="mb-0"><span className="fw-semibold">•	Overdue:</span> Estimation is present for each task, if user fails to complete any task in given time of estimation, then the task automatically moves to overdue tab. Start and stop button on each task is present to start and stop the timer of the task. Edit task from action option is used to add the time on task which is not tracked from the timer. View details from action option is to see attachments on the task and description. Once the task is completed user can mark it is complete by selecting the circle on task, this will move the task to completed tab. User can see track history of the task by clicking on task. </p>
                                        <p className="mb-0"><span className="fw-semibold">•	Completed:</span> Tasks which are completed displays on completed tab. User can start the timer of any task which is present in completed tab, once timer is started then the task moves to in progress tab. Completed task does not have option to edit the task. Users can view the details of a task from the action option. Users can see the track history of the task by clicking on task. </p>
                                        <p className="mb-0">Users can filter the tasks by project, by task name. Search option is used to search by entering any keyword. Sorting has options to sort the task list based on Newest on Top and or Oldest on Top. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt5" aria-expanded="false" aria-controls="chtt5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “My Calendar”? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt5" className="accordion-collapse collapse" aria-labelledby="htt5" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        My Calendar is where the task is represented in calendar view. Users can view tasks on calendar based on the task status, user can select daily, weekly, and monthly view on calendar. 
                                        </p>
                                        <p className="mb-0">
                                        Users can integrate their Google and Outlook accounts to my calendar. When the Outlook or Google account is integrated, scheduled meetings associated with the account will display on my calendar. in time pro allow to join these meetings from my calendar. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-timesheet" role="tabpanel" aria-labelledby="v-pills-timesheet-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample12">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime1" aria-expanded="true" aria-controls="ctime1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Timesheets”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime1" className="accordion-collapse collapse show" aria-labelledby="time1" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                       <p className="mb-0">Timesheet is a simple and efficient time management module that allows you to record and keep track of the time you spend working on various tasks. </p>
                                       <p className="mb-0">You can record your daily, weekly, and monthly time logs to submit timesheets, configure multi-level approval for timesheets, generate bills by sending timesheets and can get customized accurate reports for timesheets. With this intuitive time tracking tool, you can track your employees' time regularly and manage your business productivity without any hassles. </p>
                                       <p className="mb-0">The normal workflow behind Timesheet is that time should be logged for tasks under Projects, for Clients. Those Time Logs are then collated into Timesheets and sent for approval to be approved and for the billing processes to follow. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime2" aria-expanded="false" aria-controls="ctime2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Projects”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime2" className="accordion-collapse collapse" aria-labelledby="time2" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        A Timesheet is a collection of more than one-time logs of tasks. You can submit your timesheet from the projects tab. Projects you are aligned to are presented in the projects tab. You can select any project for which you want to submit your timesheet. 
                                         </p>
                                         <p className="mb-0">
                                         You can use the filter by project option to filter the project you want to see. Filter by billability status is used to filter projects based on billability status as Billable project or non-billable project. Search option is used to search any project by entering keyword in search field. You can select the date range from the top right corner to see projects and timesheets submitted under the project on selected time duration. 
                                         </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime3" aria-expanded="false" aria-controls="ctime3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to submit a “Timesheet”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime3" className="accordion-collapse collapse" aria-labelledby="time3" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                       <p className="mb-0 fw-semibold">Follow the steps below to submit a timesheet: </p>
                                       <p className="mb-0">•	Go to Project tab &gt;&gt; Select the Project </p>
                                       <p className="mb-0">•	You will see a tasks list for which time is tracked from time tracking module (time will automatically display for the task from time tracking module) </p>
                                       <p className="mb-0">•	Select the date for which you want to submit the timesheet. </p>
                                       <p className="mb-0">•	Keep Show in Timesheet ON for the tasks which you want to submit under timesheet. </p>
                                       <p className="mb-0">•	You can add comments for each task. </p>
                                       <p className="mb-0">•	You can see Track History of the task when you click on any task tracked from time tracking. </p>
                                       <p className="mb-0">•	If you want to add any task which is not assigned/tracked from time tracking module, you can add it by clicking on add new task from bottom of the screen. </p>
                                       <p className="mb-0 ps-3">o	From the right-side panel, you need to add task name and select it from dropdown. </p>
                                       <p className="mb-0 ps-3">o	Select Start Date, End Date, and add time spent </p>
                                       <p className="mb-0 ps-3">o	Select Billability Status of the task </p>
                                       <p className="mb-0 ps-3">o	Click on Save </p>
                                       <p className="mb-0">•	Click on the Submit button from the top right corner </p>
                                       <p className="mb-0">•	If approvals are configured, then the timesheets will go to the approver. </p>
                                       <p className="mb-0">•	If approvals are not configured, then timesheets will be system approved. 
                                        You can filter task by billability status from Filter by Billability. Search used to search any task from the list. 
                                        </p>
                                       <p className="mb-0">If you want to see your previous timesheets, you can select the date range from the top right corner. You can export your timesheets to pdf and excel file using export option. </p>
                                       <p className="mb-0">Header part has: </p>
                                       <p className="mb-0">•	Estimated Billable hours: It is displaying from project module where admin adds estimated hours per week for each team member while creating new project. </p>
                                       <p className="mb-0">•	Logged Billable hours: Hours you have logged for the week. </p>
                                       <p className="mb-0">•	Remaining hours: This is the calculation of estimated billable - logged billable. </p>
                                       <p className="mb-0">•	Timesheet Frequency: This is defined at the time of project creation by admin. </p>
                                       <p className="mb-0">Auto Save functionality is used when you have added tasks and time to the task, but you have not submitted the timesheet for approval. You can edit the time any time before submitting the timesheet. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime4" aria-expanded="false" aria-controls="ctime4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “My Timesheets”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime4" className="accordion-collapse collapse" aria-labelledby="time4" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        You can see your submitted timesheets in my timesheet tab with the status of timesheets. You can click on any timesheet to view the details, also you can comment on your submitted timesheets. The submitted timesheets are not editable to the user unless they are rejected by the level of approver. 
                                        You can filter your timesheet list by project and by status. Export option is used to export the timesheets to pdf and excel file. 

                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime5" aria-expanded="false" aria-controls="ctime5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Timesheet Approvals”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime5" className="accordion-collapse collapse" aria-labelledby="time5" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        If you are part of the level of timesheet approver for any project, you can see the Timesheet Approvals tab. This is where you can approve or reject the timesheets of your team members. You can filter the timesheets by Project Name, Employee Name and Status. Export is used to export the timesheet to pdf and excel file. You can click on any timesheet from the list to see the detailed timesheet submitted by team member and act on the timesheet like approve or reject. 
                                        You can add comments on task level and on timesheet level. 
 
                                        </p>
                                        <p className="mb-0">
                                        in time pro provides option to Approve or Reject multiple timesheets at a time by selecting checkboxes from team timesheet list. (Bulk approval) 
                                        </p>
                                        <p className="mb-0">•	You can select the date range from the top to see the timesheets submitted between the selected date range. </p>
                                        <p className="mb-0">•	The header section displays the total member count who has submitted the timesheet. </p>
                                        <p className="mb-0">•	Total Leaves are the count of leaves taken by team members during selected date range. </p>
                                        <p className="mb-0">•	Total Logged Hours are the hours logged by team members </p>
                                        <p className="mb-0">•	Total Billed Hours are hours approved and billed by the client. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time6">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime6" aria-expanded="false" aria-controls="ctime6">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Summary”? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime6" className="accordion-collapse collapse" aria-labelledby="time6" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        This is the summary view of timesheets presented in project card view. You can click on any project card to see the timesheets submitted under the project. When you click on any project, a new tab will open which will have Project details like Start Date, End Date, Team Members, Total Leaves applied by team members, Total Logged Hours, Total Billed Hours, and Name of next level approver. 
                                        This option provides the list view, where you can see timesheets by date with the members who have not submitted their timesheets, members who have submitted their timesheets, and whose timesheets are approved. 

                                        </p>
                                        <p className="mb-0">
                                        On click of Approved and Submitted option, you can see consolidated view of timesheets. 
                                        </p>
                                        <p className="mb-0">
                                        You can send reminders to team members from Action option, whose timesheet is in pending state. 
                                        </p>
                                        <p className="mb-0">
                                        You can add comments while sending reminders to team members who have not submitted the timesheet. 
                                        </p>
                                        <p className="mb-0">
                                        Summary tab has the option to filter the data by projects and users. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample13">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser1" aria-expanded="true" aria-controls="cuser1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Manage Users”? </span>
                                    </button>
                                    </h2>
                                    <div id="cuser1" className="accordion-collapse collapse show" aria-labelledby="user1" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            This is the section where you invite, edit, and delete your users. You can change the permissions and role provided to the user. Each user has different settings present on the user details page where you can see personal information and set up the track settings. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser2" aria-expanded="false" aria-controls="cuser2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How do I invite a “User”? </span>
                                    </button>
                                    </h2>
                                    <div id="cuser2" className="accordion-collapse collapse" aria-labelledby="user2" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">As an Owner, working with others in in time pro is as easy as inviting them to join your account. Keep productivity and collaboration going by inviting your team members. Invite the user as either an Admin, Employee, Contractor, Program Manager, Project Manager, or an Accountant. </p>
                                        <p className="mb-0 fw-semibold">Send an Invite: </p>
                                        <p className="mb-0">•	Click on Settings &gt;&gt; Manage Users </p>
                                        <p className="mb-0">•	Click on the Invite User button </p>
                                        <p className="mb-0">•	Select the Role you want to give to the user </p>
                                        <p className="mb-0">•	Enter user details and from right side select the Login Access you want to give to member to login in to in time pro. </p>
                                        <p className="mb-0">•	Select the Reporting Manager of the user. </p>
                                        <p className="mb-0">•	Add paid leaves you want to add to users bucket per month. </p>
                                        <p className="mb-0">•	Then click on Save. </p>
                                        <p className="mb-0">•	Your team member will receive an email with instructions to log in. </p>
                                        <p className="mb-0 fw-semibold">Log in Access provided by In Time pro: </p>
                                        <p className="mb-0">•	Log in with Microsoft - email verification is not needed </p>
                                        <p className="mb-0">•	Log in with Google - email verification is not needed </p>
                                        <p className="mb-0">•	Log in with In Time pro - User will receive the email with random password and email verification option in mail. </p>
                                        <p className="mb-0">Using this random password user can login to in time pro and the password can be changed from My Profile section of the user account. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser3" aria-expanded="false" aria-controls="cuser3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to “Import Users”?  </span>
                                    </button>
                                    </h2>
                                    <div id="cuser3" className="accordion-collapse collapse" aria-labelledby="user3" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">If you are looking to save time from adding each new member one by one manually, you can import your list of members in bulk instead. </p>
                                        <p className="mb-0 fw-medium">Users can import team members to in time pro by following below steps: </p>
                                        <p className="mb-0">•	Click on “Import User” from users list </p>
                                        <p className="mb-0">•	From the popup download the sample file provided by system. </p>
                                        <p className="mb-0">•	Enter your user's data into the excel file by following the sample file. </p>
                                        <p className="mb-0">•	Go to in time pro &gt; Manage Users &gt; Import Users &gt; Choose File </p>
                                        <p className="mb-0">•	Check Notifications for import file status. </p>
                                        <p className="mb-0">•	You want to import and click on Save </p>
                                        <p className="mb-0">Once done you can see added users in the active users list. This list displays the user information in grid view along with the status: </p>
                                        <p className="mb-0">•	Email Sent: When the invitation is sent to the user. </p>
                                        <p className="mb-0">•	Joined on: When user accepts the invitation/ verifies email address. </p>
                                        <p className="mb-0">Active user list has the option to filter data by selecting Role and User, this is multi selection dropdown where filter can apply on multiple records. </p>
                                        <p className="mb-0">Export option is present to export the data to pdf and excel. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser4" aria-expanded="false" aria-controls="cuser4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to edit “User Details”?  </span>
                                    </button>
                                    </h2>
                                    <div id="cuser4" className="accordion-collapse collapse" aria-labelledby="user4" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            You can edit the data of any user by clicking on action option from active users list. 
                                        </p>
                                        <p className="fw-medium mb-0">Edit page has more details than invite user page: </p>
                                        <p className="mb-0">•	Personal Information: Information of the user entered while inviting them. </p>
                                        <p className="mb-0">•	Account Information: You can see the time zone of the user as well as deactivate the user account. </p>
                                        <p className="mb-0">•	Change Password: This is used when admin wants to change the password of any user account, here user will receive email with changed password. </p>
                                        <p className="mb-0">•	Leaves: This is the detailed view of member's leaves history with status </p>
                                        <p className="mb-0">•	Apps and Productivity: You can define your member's used application as Productive/Unproductive/Neutral (applications tracked from agent app) </p>
                                        <p className="mb-0">•	Settings: Capture settings to decide how you want to monitor/track members activities from agent app. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser5" aria-expanded="false" aria-controls="cuser5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Archived/Deleted Manage User List”? </span>
                                    </button>
                                    </h2>
                                    <div id="cuser5" className="accordion-collapse collapse" aria-labelledby="user5" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0 fw-semibold">
                                        Archived User List: 
                                        </p>
                                        <p className="mb-0">
                                        •	This is the list of the users who have been archived by the admin. 
                                        </p>
                                        <p className="mb-0">
                                        •	Admin can restore the archived users to Active list. 
                                        </p>
                                        <p className="mb-0">
                                        •	Admin can delete any user from Archived list and that deleted user will display in Deleted list. 
                                        </p>
                                        <p className="mb-0">
                                        •	Admin cannot edit archived users. 
                                        </p>
                                        <p className="mb-0">
                                        •	Bulk option is present to Delete or Restore multiple user records. 
                                        </p>
                                        <p className="mb-0">
                                        •	Export option is used to export the list in pdf or excel file. 
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                        Deleted User List:  
                                        </p>
                                        <p className="mb-0">•	Users who have deleted from Active and Archived list, will display in Deleted list. </p>
                                        <p className="mb-0">•	Admin can restore deleted users to Active list. </p>
                                        <p className="mb-0">•	Admin cannot edit deleted users. </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to restore multiple user records. </p>
                                        <p className="mb-0">•	Export option is used to export the list in pdf or excel file. </p>
                                        <p className="mb-0">•	Delete option from Deleted list will delete the user record permanently from the system and there will be no option to restore that record. </p>
                                        <p className="mb-0">Note: Archived and Deleted users will no longer have access to in time pro. </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-client" role="tabpanel" aria-labelledby="v-pills-client-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample14">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient1" aria-expanded="true" aria-controls="cclient1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">Who are “Clients”? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient1" className="accordion-collapse collapse show" aria-labelledby="client1" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                             Clients are the people you bill for the work you have been hired to do. You can add, manage, archive, and delete your clients as your business grows. Each client profile can add a primary contact and multiple secondary contacts. This helps to set multiple contacts in client company.   
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient2" aria-expanded="false" aria-controls="cclient2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Client Dashboard”? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient2" className="accordion-collapse collapse" aria-labelledby="client2" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            It displays the Overdue, Outstanding and Draft invoice amount of the clients on top. Recently updated are the clients who have been recently added to the system or recently modified. 
                                        </p>
                                        <p className="mb-0 fw-semibold">Active Client List: </p>
                                        <p className="mb-0">•	This is the list view of all active clients whose projects are in progress or in a loop for future development. </p>
                                        <p className="mb-0">•	Users can Edit, Delete, and Archive any client from action option. Users can also delete or archive multiple clients by selecting checkboxes on the list and click on Archive/Delete icon from top of the list. </p>
                                        <p className="mb-0">•	Users can use the export option to export the client list to pdf or excel file. </p>
                                        <p className="mb-0">•	Users can use the search option to search any client record by entering any keyword they want to search. </p>
                                        <p className="mb-0">•	“Add Client” is used to create new client records. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient3" aria-expanded="false" aria-controls="cclient3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How to create “New Client”?  </span>
                                    </button>
                                    </h2>
                                    <div id="cclient3" className="accordion-collapse collapse" aria-labelledby="client3" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                      <p className="mb-0">Click on the “Add Client” button to create a new client. </p>
                                      <p className="mb-0">•	Enter Company Name, Address line, City, State, Country, Zip code, Time Zone, Website, Note </p>
                                      <p className="mb-0">•	Upload photo option used to upload the picture. (Only .jpg and .png format is acceptable) </p>
                                      <p className="mb-0">•	Users can add multiple contacts from the contact person section. This person will be the point of contact from the client's side. </p>
                                      <p className="mb-0 ps-3">o	User can add contact by entering First name, Last name, Phone, Email. </p>
                                      <p className="mb-0 fw-semibold">There are two types of roles: </p>
                                      <p className="mb-0">•	Technical Contact - The person with whom we can discuss all technical details. </p>
                                      <p className="mb-0">•	Billing Contact - Billing/invoice related details will be discussed with this person. </p>
                                      <p className="mb-0">•	User can make any contact as primary contact </p>
                                      <p className="mb-0">•	User can edit the contact details of client </p>
                                      <p className="mb-0 fw-semibold">Settings - These are the invoice settings of the client  </p>
                                      <p className="mb-0">•	Send Payment Reminder - Is used to send the payment reminders to client for the invoice. Users can send the reminder based on added days after or before the invoice due date. </p>
                                      <p className="mb-0">•	Users can add up to three payment reminders for each client. </p>
                                      <p className="mb-0">•	Users can delete any added reminder. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient4" aria-expanded="false" aria-controls="cclient4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">Charge Late Fees:  </span>
                                    </button>
                                    </h2>
                                    <div id="cclient4" className="accordion-collapse collapse" aria-labelledby="client4" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0 fw-semibold">
                                        You can Charge Late Fees from client in two ways: 
                                        </p>
                                        <p className="mb-0">•	Percentage: To charge late fees in percentage, enter what percent you would be adding to the total invoice value. </p>
                                        <p className="mb-0">•	For e.g.: If the total bill value is $10,000 and you would like to charge 5% as late fee, enter 5 in the given space. So, it will add $500 if a customer fails to pay the bill on time. </p>
                                        <p className="mb-0">•	Flat Fee: To charge late fee as flat fee, enter any flat amount that you would charge on the total invoice value.</p>
                                        <p className="mb-0">•	For e.g.: If the total bill value is $10,000 and you would like to charge $400 as late fee, enter 400 in the given space. </p>
                                        <p className="mb-0 fw-semibold">
                                        You can add up to 2 taxes on the late fee charged on a particular invoice. 
                                        </p>
                                        <p className="mb-0">•	To add tax, click on Add Taxes button for adding the first tax. </p>
                                        <p className="mb-0">•	To delete tax, simply click the dustbin icon, visible just beside Tax Information </p>
                                        <p className="mb-0">Currency Language - Is where the user can select the language and currency of the client. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient5" aria-expanded="false" aria-controls="cclient5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Client Details”?</span>
                                    </button>
                                    </h2>
                                    <div id="cclient5" className="accordion-collapse collapse" aria-labelledby="client5" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                        Details of the client like Organization Name, Profile Picture, Primary Contact details will display on the client details page.  
                                        </p>
                                        <p className="mb-0">
                                        •	In Draft amount is the total amount of invoices whose status is in draft. 
                                        </p>
                                        <p className="mb-0">
                                        •	Unbilled Time is the total of unbilled time entries of team members. 
                                        </p>
                                        <p className="mb-0">
                                        •	Users can edit the client details by clicking on pencil icon from top right corner. 
                                        </p>
                                        <p className="mb-0">
                                        •	“Generate Statement” will generate the payment statement of the client. It must have options to select start date and end date. Based on selected time duration statement will get generate. This statement is all about the invoice payment details of the client. 
                                        </p>
                                        <p className="mb-0">
                                        There are two tabs present on the client details page: 
                                        </p>
                                        <p className="mb-0">
                                        •	Invoice: All the invoices generated for this client will be displayed here on this tab 
                                        </p>
                                        <p className="mb-0">
                                        •	Projects: All the projects belonging to this client will be displayed on this tab. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client6">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient6" aria-expanded="false" aria-controls="cclient6">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Archived/Deleted Client list”? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient6" className="accordion-collapse collapse" aria-labelledby="client6" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0 fw-semibold">
                                        Archived Client List:  
                                        </p>
                                        <p className="mb-0">
                                        •	This is the list of clients who have been archived by the user. 
                                        </p>
                                        <p className="mb-0">
                                        •	Users can restore the archived clients to Active client list. 
                                        </p>
                                        <p className="mb-0">
                                        •	Users can delete any client from Archived client list and that deleted client will display in Deleted client list. 
                                        </p>
                                        <p className="mb-0">
                                        •	User cannot edit archived clients 
                                        </p>
                                        <p className="mb-0">
                                        •	Bulk option is present to Delete or to restore multiple client records. 
                                        </p>
                                        <p className="mb-0">
                                        •	Export option is used to export the list in pdf or excel file. 
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                        Deleted Client List:  
                                        </p>
                                        <p className="mb-0">•	Clients who have been deleted from Active clients and archived clients will display in Deleted client list. </p>
                                        <p className="mb-0">•	Users can restore deleted clients to active clients. </p>
                                        <p className="mb-0">•	User cannot edit deleted clients </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to restore multiple client records. </p>
                                        <p className="mb-0">•	Export option is used to export the list in pdf or excel file. </p>
                                        <p className="mb-0">•	Bulk option is present to Delete or to restore multiple client records. </p>
                                        <p className="mb-0">•	Delete option from Deleted client list will delete the client record permanently from the system and there will be no option to restore that record. </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card border-0" id="v-pills-acivities" role="tabpanel" aria-labelledby="v-pills-acivities-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample15">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti1" aria-expanded="true" aria-controls="cacti1">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Activities”? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti1" className="accordion-collapse collapse show" aria-labelledby="acti1" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            Activities features make it easy for you to manage activity tracking of your employees like Web and App Usage Tracking, Location Tracking, Screenshot Capturing. 
                                        </p>
                                        <p className="mb-0">In Time pro lets' you know about the activities of your employees during the day with detailed reports. The extent and methods of employee monitoring is eased out activating features which you want for each employee: (Hours Worked/Activity levels/Screenshots/Idle Time/App Usage/URL Visits/GPS Tracking/Private time) </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti2" aria-expanded="false" aria-controls="cacti2">
                                        <span className="ps-3 ms-1 fw-bold fs-5">How does “Real time Tracking Work”? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti2" className="accordion-collapse collapse" aria-labelledby="acti2" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                       <p className="mb-0 fw-semibold">Team Tracking: </p>
                                       <p className="mb-0">You can track real time activities of your employees from Team Tracking tab. </p>
                                       <p className="mb-0">Header part displays tracked data of current date: </p>
                                       <p className="mb-0">•	No. of Employees (if you are project manager then you can see employees who are part of your project) </p>
                                       <p className="mb-0">•	"Currently Working" are the employees who have logged in from agent application. </p>
                                       <p className="mb-0">•	"Currently Slacking" are the employees who uses unproductive applications. </p>
                                       <p className="mb-0">•	"Currently Offline" are the employees who have not logged in for a day. </p>
                                       <p className="mb-0">•	Productivity of active employees is calculated based on the formula defined in App Productivity &gt;&gt;roductivity Calculation module. </p>
                                       <p className="mb-0">•	Filter By Organization is used to filter out users based on their organization unit </p>
                                       <p className="mb-0">•	Filter By Project is used to filter users list based on their assigned project </p>
                                       <p className="mb-0">•	Filter By Member is used to filter user's record </p>
                                       <p className="mb-0">•	Sorting - Newest on Top and or Oldest on Top, sort users list according to their logged in time (Arrived time) </p>
                                       <p className="mb-0">•	Team tracking list displays the real time activities of your active employees where you can see member's live location, Device they are using, Internet speed and Provider, Active Task, Arrived At, Left At, Time at Work and Currently Using application </p>
                                       <p className="mb-0">•	You can take live screenshot of the members machine by clicking on “Take Screenshot” option from action option. </p>
                                       <p className="mb-0">•	You can click on any members record to see their tracked activity details. </p>
                                       <p className="mb-0 fw-semibold">Productivity Tab: </p>
                                       <p className="mb-0">•	Productivity details &gt;&gt; Arrival Time, Left Time, Productive Time, Active Time, Time at Work, Place in Group, Effectiveness, Productivity </p>
                                       <p className="mb-0">•	Productivity Bar &gt;&gt; Displays Productive/Unproductive/Neutral/Idle and Private Time of the member </p>
                                       <p className="mb-0">•	Application usage based on App Category in pie chart view </p>
                                       <p className="mb-0">•	Captured screenshots of the member machine </p>
                                       <p className="mb-0 fw-semibold">Pending Tab: </p>
                                       <p className="mb-0">•	Team members submit their offline from productivity bar. They can define the time entry as Productive/Unproductive or Neutral </p>
                                       <p className="mb-0">•	The pending list is where you can see the list Offline(idle) time entries submitted by team members. You can approve or reject the time entry from the list. Once you approve any time entry that time will reflect on active time of the user’s time and attendance page. If the time entry rejected, then the time will not reflect in active time. </p>
                                       <p className="mb-0">•	Export option is used to export the list to pdf and excel file. </p>
                                       <p className="mb-0">•	“Total Offline Time” is the total time of offline time entries submitted by team members which is in pending state. </p>
                                       <p className="mb-0">•	“Productive” is total productive time submitted by members. </p>
                                       <p className="mb-0">•	“Unproductive” is total unproductive time submitted by members. </p>
                                       <p className="mb-0">•	“Neutral” is total neutral time submitted by members. </p>
                                       <p className="mb-0 fw-semibold">Approved Tab: </p>
                                       <p className="mb-0">•	Once offline time of team member is approved, then it will display on approved list. </p>
                                       <p className="mb-0">•	“Total Offline Time” is the total time of offline time entries submitted by team members which is in pending state. </p>
                                       <p className="mb-0">•	“Productive” is total productive time submitted by members. </p>
                                       <p className="mb-0">•	“Unproductive” is total unproductive time submitted by members. </p>
                                       <p className="mb-0">•	“Neutral” is total neutral time submitted by members. </p>
                                       <p className="mb-0 fw-semibold">Declined Tab:  </p>
                                       <p className="mb-0">•	Once offline time of team member is rejected, then it will display on declined list </p>
                                       <p className="mb-0">•	Export option is used to export the list in pdf and excel </p>
                                       <p className="mb-0">•	“Total Offline Time” is the total time of offline time entries submitted by team members which is in pending state </p>
                                       <p className="mb-0">•	“Productive” is total productive time submitted by members </p>
                                       <p className="mb-0">•	“Unproductive” is total unproductive time submitted by members </p>
                                       <p className="mb-0">•	“Neutral” is total neutral time submitted by members </p>
                                       <p className="mb-0 fw-semibold">Location Tracking: </p>
                                       <p className="mb-0">Location Tracking allows organization owners and managers to view current locations of their team members/employees. This location is tracked from agent application of member’s machine. 
                                        Location Tracking tracks all the locations from where the user has worked from their machine. It tracks Start time, end time and time spent on each location. 
                                        </p>
                                       <p className="mb-0">You can click on any user record from the map to see the details like: </p>
                                       <p className="mb-0">•	Username, profile pictures </p>
                                       <p className="mb-0">•	IP Address of user's machine</p>
                                       <p className="mb-0">•	Last Worked Time </p>
                                       <p className="mb-0">•	Location</p>
                                       <p className="mb-0">•	Work Status </p>
                                       <p className="mb-0">•	You can click on “View Details” to see users work locations if changed throughout the day &gt;&gt; It shows exit time from the location along with time spent on the location. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti3" aria-expanded="false" aria-controls="cacti3">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What is “Time and Attendance”?  </span>
                                    </button>
                                    </h2>
                                    <div id="cacti3" className="accordion-collapse collapse" aria-labelledby="acti3" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                       <p className="mb-0">You can see your tracked activities in time and attendance: </p>
                                       <p className="mb-0">Your name, Profile Image, Role, Time Zone, Working Hours </p>
                                       <p className="mb-0">Productivity Tab (Calculated from agent application) </p>
                                       <p className="mb-0">Productivity details &gt;&gt; Arrival Time, Left Time, Productive Time, Active Time, Time at Work, Place in Group, Effectiveness, Productivity </p>
                                       <p className="mb-0">•	Productivity Bar &gt;&gt; Displays Productive/Unproductive/Neutral/Idle and Private Time in graph view. </p>
                                       <p className="mb-0">•	Application usage based on App Category in pie chart view </p>
                                       <p className="mb-0">•	Captured screenshots of your machine </p>
                                       <p className="mb-0">You can add your offline time from your productivity bar, and it goes to your manager for approval, once manager approves the time then the time will reflect on your active time. </p>
                                       <p className="mb-0">You can select Private Time mode from Time Tracking module which will stop tracking of your activities from Agent App, and it will display as private time on your productivity bar. </p>
                                       <p className="mb-0">Pie chart view of application tracking shows the applications you have used with the time spent on each application. You can export the applications to an excel file. </p>
                                       <p className="mb-0">The screenshots at the bottom are the captured screenshots of your machine, see all options that will take you to the main screenshot menu where you can see the list of screenshots captured in a day. </p>
                                       <p className="mb-0">If you want to see your tracked activities of any day, you can select the date from the calendar, and it will display the activities. </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti4" aria-expanded="false" aria-controls="cacti4">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Screenshots”? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti4" className="accordion-collapse collapse" aria-labelledby="acti4" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            You can set multiple screen-capturing requests based on team requirements and view them at any given time. In Time pro, offers multiple ways of tracking, depending on whether employees are using personal or company-owned computers. Screenshots capturing can be manual OR automatic (based on working hours or the settings provided from capture settings at global and user level). 
                                        </p>
                                        <p className="mb-0">
                                            All activities, including hourly screenshots, can be tracked automatically on company computers using an agent application. You can turn off screenshots capture settings for users to secure sensitive data. 
                                        </p>
                                        <p className="mb-0">
                                            To see screenshots of any user you can filter the user from filter by user dropdown. Filter by project will display screenshots of the members who are part of the project. 
                                        </p>
                                        <p className="mb-0">
                                            Sorting will sort the screenshots on Newest on Top and or Oldest on Top based on the captured time. 
                                        </p>
                                        <p className="mb-0">
                                            Screenshot capturing is divided into slots of one hour. Each hour represents captured screenshot between the time duration mentioned in the Company Profile settings. You can click on view screenshots to see captured screenshots. You can also delete any screenshot. 
                                        </p>
                                        <p className="mb-0">
                                            Additionally, the Agent App determines if employees are Active or Idle based on the activity from their keyboard or mouse clicks. This also helps in calculating the effective working hours for each employee. 
                                        </p>
                                        <p className="mb-0">
                                            If you want to see the screenshots of any previous day you can select the date from the calendar. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti5" aria-expanded="false" aria-controls="cacti5">
                                        <span className="ps-3 ms-1 fw-bold fs-5">What are “Apps & Websites”? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti5" className="accordion-collapse collapse" aria-labelledby="acti5" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-5 ms-1 pb-2 pt-0">
                                        <p className="mb-0">
                                            This is an intelligent work monitoring functionality that helps you monitor your team members real-time work status. You can track the URLs and apps visited by employees and you can also find out the frequency of their visits and the amount of time spent on each website or app each day. 
                                        </p>
                                        <p className="mb-0">
                                        You can check both individual usage and team usage through a pie chart, filter them, and export the data to pdf and excel file. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* 
        <section>
            <div className='container py-5 mt-4'>
                <h3 className='text-center pt-3 underline-text position-relative'>We got you covered with <span className="underline pb-1">Multiplatform Solution</span></h3>
                <div className='d-flex justify-content-between align-items-center pt-5 mt-4 w-75 mx-auto'>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 px-3 d-flex align-items-end justify-content-center'>
                                <Link href='/download-windows'>
                                    <a className='d-flex align-items-end gap-2 text-decoration-none'>
                                        <div className='h-32'>
                                        <Image src={MicrosoftLogo} alt="Microsoft logo" width={30} height={32} />
                                        </div>
                                        <div>
                                            <small className='text-muted download-text'>Download on the</small>
                                            <p className='mb-0 fw-semibold lh-1'>Windows Store</p>
                                        </div>       
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 d-flex align-items-end justify-content-center'>
                                <Link href='/download-macOS'>
                                    <a className='d-flex align-items-end gap-2 text-decoration-none'>
                                        <div className='ps-1 h-32'>
                                            <Image src={AppletLogo} alt="Microsoft logo" width={25} height={30} />
                                        </div>
                                        <div className='pe-1'>
                                            <small className='text-muted download-text'>Download on the</small>
                                            <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 px-4 d-flex align-items-end justify-content-center'>
                               <Link href='/download-android'>
                                <a className='d-flex align-items-end gap-2 text-decoration-none'>
                                    <div className='ps-1'>
                                        <Image src={GooglePlayLogo} alt="Microsoft logo" width={20} height={20} />
                                    </div>
                                    <div className='pe-1'>
                                        <small className='text-muted download-text'>Download on the</small>
                                        <p className='mb-0 fw-semibold lh-1'>Play Store</p>
                                    </div>      
                                </a>
                               </Link>
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-white shadow download-card rounded pt-2 pb-3 px-3 d-flex align-items-end justify-content-center'>
                                <Link href='/download-iOS'>
                                    <a className='d-flex align-items-end gap-2 text-decoration-none'>
                                        <div className='ps-1 h-35'>
                                            <Image src={MobileAppLogo} alt="Microsoft logo" width={20} height={35} />
                                        </div>
                                        <div className='pe-1'>
                                            <small className='text-muted download-text'>Download on the</small>
                                            <p className='mb-0 fw-semibold lh-1'>App Store</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                   </div>
            </div>
        </section>

         */}

        <CTA />
        <Footer />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
      
    
    </> );
}

export default FAQ;