import Header from "../components/Header";
import Script from 'next/script';
import Head from 'next/head'
import Footer from "../components/Footer";
import CTA from '../components/CTA'

function FAQ() {
    return ( <>

        <Head>
            <title>FAQ's | Intime-Pros</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
        <Header />
    
        <section className="primary-bg-color py-5">
            <div className="container text-center pb-5">
                <h5 className="text-white pt-4 pb-2">Frequently Asked Questions</h5>
                <p className="text-white w-50 mx-auto px-5 pb-4">Get the most out of In Time Pro and learn everything about our features through these FAQ's</p>
                <div className="search d-flex gap-3 w-50 mx-auto">
                    <span><svg className="fa-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg></span>
                    <input type="text" className="form-control" placeholder="What are you looking for" />
                    <button className="btn primary-link bg-white border-white px-4">SEARCH</button>
                </div>
            </div>
            <div className="container mt-5 pt-4 bg-white shadow rounded p-4 mb-5 ">
                <div className="d-flex align-items-start row">
                    <div className="nav flex-column nav-pills col-lg-2 col-xs-12 border-end pe-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
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
                    <div className="tab-content col-lg-10 col-xs-12 px-5" id="v-pills-tabContent">
                        <div className="tab-pane fade show active card shadow border-0 p-4" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="ps-3 ms-1 fw-semibold">What is In Time Pro?</span>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                                        <span className="ps-3 ms-1 fw-semibold">How much does ITP cost?</span>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            ITP is free to try for 14 days (about 2 weeks), pricing starts from $5/mo./user and can go as high as $10/mo./user for the Enterprise version. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span className="ps-3 ms-1 fw-semibold">How can I subscribe to ITP?</span>
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                        On the ITP website, click on “Add payment method,” choose the payment type - Credit card or bank transfer, enter billing details and click on “Save payment method.” The selected payment method will be automatically charged each billing cycle. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="h4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#c4" aria-expanded="false" aria-controls="c4">
                                        <span className="ps-3 ms-1 fw-semibold">What is the difference between monthly & annual billing?</span>
                                    </button>
                                    </h2>
                                    <div id="c4" className="accordion-collapse collapse" aria-labelledby="h4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            The monthly billing plan charges your payment method on the first day of the month. The annual payment method charges once a year on the date when the plan was started. The annual subscription comes with a discounted rate, depending on the number of users that will use the platform. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="h5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#c5" aria-expanded="false" aria-controls="c5">
                                        <span className="ps-3 ms-1 fw-semibold">How can I add or remove users from my plan?</span>
                                    </button>
                                    </h2>
                                    <div id="c5" className="accordion-collapse collapse" aria-labelledby="h5" data-bs-parent="#accordionExample">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            To add or remove users from your plan, click on the “Settings” icon in the top right corner of the website, then select “Manage Users,” to add a user, click on “Invite User” option to invite user to register. Similarly, search for users you want to delete by clicking on “Filter by Role” option and click on the “delete” icon.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-Started" role="tabpanel" aria-labelledby="v-pills-Started-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample2">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga1" aria-expanded="true" aria-controls="cga1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="cga1" className="accordion-collapse collapse show" aria-labelledby="hga1" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga2" aria-expanded="false" aria-controls="cga2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="cga2" className="accordion-collapse collapse" aria-labelledby="hga2" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga3" aria-expanded="false" aria-controls="cga3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="cga3" className="accordion-collapse collapse" aria-labelledby="hga3" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga4" aria-expanded="false" aria-controls="cga4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="cga4" className="accordion-collapse collapse" aria-labelledby="hga4" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cga5" aria-expanded="false" aria-controls="cga5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="cga5" className="accordion-collapse collapse" aria-labelledby="hga5" data-bs-parent="#accordionExample2">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample3">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="pga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccga1" aria-expanded="true" aria-controls="ccga1">
                                        <span className="ps-3 ms-1 fw-semibold">What is “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccga1" className="accordion-collapse collapse show" aria-labelledby="pga1" data-bs-parent="#accordionExample3">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                        My Profile is the user's personal information, where the user can see their login information which is used to access their pro account. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="pga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccga2" aria-expanded="false" aria-controls="ccga2">
                                        <span className="ps-3 ms-1 fw-semibold">What are the features of “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccga2" className="accordion-collapse collapse" aria-labelledby="pga2" data-bs-parent="#accordionExample3">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
                                            <ul>
                                                <li>Users can edit their First Name, Last Name and Profile Picture. </li>
                                                <li>Profile picture can be selected from local machine or user can also select avatar provided by in time pro. Only .jpg and .png format is acceptable to upload the profile image. </li>
                                                <li>Change password is used to change the password of in time pro account. It is only accessible if the change password access is given to user by admin at the time of inviting user. </li>
                                                <li>Logout of all in time pro account: By clicking on this option, you will be logged out of all applications across all devices, including the current one. </li>
                                                <li>This includes in time pro Web app, Agent app and Mobile app.</li>
                                            </ul>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-company-profile" role="tabpanel" aria-labelledby="v-pills-company-profile-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample4">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ppga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga1" aria-expanded="true" aria-controls="ccpga1">
                                        <span className="ps-3 ms-1 fw-semibold">What is “Company Profile”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga1" className="accordion-collapse collapse show" aria-labelledby="ppga1" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            The “Company Profile” contains key details about your business that are displayed on all your Invoices. This is also where you can choose your Base Currency, Date Format and you can set your report settings as needed. You can add public holidays and various locations of your office including settings of employee activities tracking. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga8">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga8" aria-expanded="false" aria-controls="ccpga8">
                                        <span className="ps-3 ms-1 fw-semibold">What are the features of “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga8" className="accordion-collapse collapse" aria-labelledby="cpga8" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
                                            <ul>
                                                <li>Users can edit their First Name, Last Name and Profile Picture. </li>
                                                <li>Profile picture can be selected from local machine or user can also select avatar provided by in time pro. Only .jpg and .png format is acceptable to upload the profile image. </li>
                                                <li>Change password is used to change the password of in time pro account. It is only accessible if the change password access is given to user by admin at the time of inviting user. </li>
                                                <li>Logout of all in time pro account: By clicking on this option, you will be logged out of all applications across all devices, including the current one. </li>
                                                <li>This includes in time pro Web app, Agent app and Mobile app.</li>
                                            </ul>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga2" aria-expanded="false" aria-controls="ccpga2">
                                        <span className="ps-3 ms-1 fw-semibold">What is “Company Details”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga2" className="accordion-collapse collapse" aria-labelledby="cpga2" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                                        <span className="ps-3 ms-1 fw-semibold">What is “Location”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga3" className="accordion-collapse collapse" aria-labelledby="cpga3" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                                        <span className="ps-3 ms-1 fw-semibold">How do add “Working Days”? </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga4" className="accordion-collapse collapse" aria-labelledby="cpga4" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                                        <span className="ps-3 ms-1 fw-semibold">How to set up “Tracking Days”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga5" className="accordion-collapse collapse" aria-labelledby="cpga5" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                                        <span className="ps-3 ms-1 fw-semibold">How to add “Public Holidays”?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga6" className="accordion-collapse collapse" aria-labelledby="cpga6" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
                                        You can add Public Holidays for multiple locations by clicking the “Add Holiday” button. It will open a right-side panel to add details of the holiday(s). 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga7">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ccpga7" aria-expanded="false" aria-controls="ccpga7">
                                        <span className="ps-3 ms-1 fw-semibold">How to add holiday?  </span>
                                    </button>
                                    </h2>
                                    <div id="ccpga7" className="accordion-collapse collapse" aria-labelledby="cpga7" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                                        <span className="ps-3 ms-1 fw-semibold">What is “Capture Setting” and how do I set it up?</span>
                                    </button>
                                    </h2>
                                    <div id="ccpga9" className="accordion-collapse collapse" aria-labelledby="cpga9" data-bs-parent="#accordionExample4">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
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
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-organization-unit" role="tabpanel" aria-labelledby="v-pills-organization-unit-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample5">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga1" aria-expanded="true" aria-controls="oga1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="oga1" className="accordion-collapse collapse show" aria-labelledby="ouga1" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga2" aria-expanded="false" aria-controls="oga2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="oga2" className="accordion-collapse collapse" aria-labelledby="ouga2" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga3" aria-expanded="false" aria-controls="oga3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="oga3" className="accordion-collapse collapse" aria-labelledby="ouga3" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga4" aria-expanded="false" aria-controls="oga4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="oga4" className="accordion-collapse collapse" aria-labelledby="ouga4" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="ouga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#oga5" aria-expanded="false" aria-controls="oga5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="oga5" className="accordion-collapse collapse" aria-labelledby="ouga5" data-bs-parent="#accordionExample5">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-agent-app" role="tabpanel" aria-labelledby="v-pills-agent-app-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample6">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="apga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#capga1" aria-expanded="true" aria-controls="capga1">
                                        <span className="ps-3 ms-1 fw-semibold">What is “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="capga1" className="accordion-collapse collapse show" aria-labelledby="apga1" data-bs-parent="#accordionExample6">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                        My Profile is the user's personal information, where the user can see their login information which is used to access their pro account. 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="cpga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#capga2" aria-expanded="false" aria-controls="capga2">
                                        <span className="ps-3 ms-1 fw-semibold">What are the features of “My Profile”? </span>
                                    </button>
                                    </h2>
                                    <div id="capga2" className="accordion-collapse collapse" aria-labelledby="cpga2" data-bs-parent="#accordionExample6">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
                                            <ul>
                                                <li>Users can edit their First Name, Last Name and Profile Picture. </li>
                                                <li>Profile picture can be selected from local machine or user can also select avatar provided by in time pro. Only .jpg and .png format is acceptable to upload the profile image. </li>
                                                <li>Change password is used to change the password of in time pro account. It is only accessible if the change password access is given to user by admin at the time of inviting user. </li>
                                                <li>Logout of all in time pro account: By clicking on this option, you will be logged out of all applications across all devices, including the current one. </li>
                                                <li>This includes in time pro Web app, Agent app and Mobile app.</li>
                                            </ul>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-time-off" role="tabpanel" aria-labelledby="v-pills-time-off-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample7">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga1" aria-expanded="true" aria-controls="ctoga1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="ctoga1" className="accordion-collapse collapse show" aria-labelledby="htoga1" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga2" aria-expanded="false" aria-controls="ctoga2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="ctoga2" className="accordion-collapse collapse" aria-labelledby="htoga2" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga3" aria-expanded="false" aria-controls="ctoga3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga3" className="accordion-collapse collapse" aria-labelledby="htoga3" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga4" aria-expanded="false" aria-controls="ctoga4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga4" className="accordion-collapse collapse" aria-labelledby="htoga4" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htoga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctoga5" aria-expanded="false" aria-controls="ctoga5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="ctoga5" className="accordion-collapse collapse" aria-labelledby="htoga5" data-bs-parent="#accordionExample7">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-services" role="tabpanel" aria-labelledby="v-pills-services-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample8">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga1" aria-expanded="true" aria-controls="csoga1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="csoga1" className="accordion-collapse collapse show" aria-labelledby="hsoga1" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga2" aria-expanded="false" aria-controls="csoga2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="csoga2" className="accordion-collapse collapse" aria-labelledby="hsoga2" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga3" aria-expanded="false" aria-controls="csoga3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga3" className="accordion-collapse collapse" aria-labelledby="hsoga3" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga4" aria-expanded="false" aria-controls="csoga4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga4" className="accordion-collapse collapse" aria-labelledby="hsoga4" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hsoga5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#csoga5" aria-expanded="false" aria-controls="csoga5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="csoga5" className="accordion-collapse collapse" aria-labelledby="hsoga5" data-bs-parent="#accordionExample8">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-projects" role="tabpanel" aria-labelledby="v-pills-projects-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample9">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp1" aria-expanded="true" aria-controls="chp1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="chp1" className="accordion-collapse collapse show" aria-labelledby="hp1" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp2" aria-expanded="false" aria-controls="chp2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="chp2" className="accordion-collapse collapse" aria-labelledby="hp2" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp3" aria-expanded="false" aria-controls="chp3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="chp3" className="accordion-collapse collapse" aria-labelledby="hp3" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp4" aria-expanded="false" aria-controls="chp4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="chp4" className="accordion-collapse collapse" aria-labelledby="hp4" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hp5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chp5" aria-expanded="false" aria-controls="chp5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="chp5" className="accordion-collapse collapse" aria-labelledby="hp5" data-bs-parent="#accordionExample9">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-productivity" role="tabpanel" aria-labelledby="v-pills-productivity-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample10">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod1" aria-expanded="true" aria-controls="chprod1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="chprod1" className="accordion-collapse collapse show" aria-labelledby="hprod1" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod2" aria-expanded="false" aria-controls="chprod2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="chprod2" className="accordion-collapse collapse" aria-labelledby="hprod2" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod3" aria-expanded="false" aria-controls="chprod3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="chprod3" className="accordion-collapse collapse" aria-labelledby="hprod3" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod4" aria-expanded="false" aria-controls="chprod4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="chprod4" className="accordion-collapse collapse" aria-labelledby="hprod4" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="hprod5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chprod5" aria-expanded="false" aria-controls="chprod5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="chprod5" className="accordion-collapse collapse" aria-labelledby="hprod5" data-bs-parent="#accordionExample10">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-tracking" role="tabpanel" aria-labelledby="v-pills-tracking-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample11">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt1" aria-expanded="true" aria-controls="chtt1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="chtt1" className="accordion-collapse collapse show" aria-labelledby="htt1" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt2" aria-expanded="false" aria-controls="chtt2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="chtt2" className="accordion-collapse collapse" aria-labelledby="htt2" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt3" aria-expanded="false" aria-controls="chtt3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt3" className="accordion-collapse collapse" aria-labelledby="htt3" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt4" aria-expanded="false" aria-controls="chtt4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt4" className="accordion-collapse collapse" aria-labelledby="htt4" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="htt5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#chtt5" aria-expanded="false" aria-controls="chtt5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="chtt5" className="accordion-collapse collapse" aria-labelledby="htt5" data-bs-parent="#accordionExample11">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-timesheet" role="tabpanel" aria-labelledby="v-pills-timesheet-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample12">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime1" aria-expanded="true" aria-controls="ctime1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="ctime1" className="accordion-collapse collapse show" aria-labelledby="time1" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime2" aria-expanded="false" aria-controls="ctime2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="ctime2" className="accordion-collapse collapse" aria-labelledby="time2" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime3" aria-expanded="false" aria-controls="ctime3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime3" className="accordion-collapse collapse" aria-labelledby="time3" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime4" aria-expanded="false" aria-controls="ctime4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime4" className="accordion-collapse collapse" aria-labelledby="time4" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime5" aria-expanded="false" aria-controls="ctime5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime5" className="accordion-collapse collapse" aria-labelledby="time5" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="time6">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#ctime6" aria-expanded="false" aria-controls="ctime6">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="ctime6" className="accordion-collapse collapse" aria-labelledby="time6" data-bs-parent="#accordionExample12">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample13">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser1" aria-expanded="true" aria-controls="cuser1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="cuser1" className="accordion-collapse collapse show" aria-labelledby="user1" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser2" aria-expanded="false" aria-controls="cuser2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="cuser2" className="accordion-collapse collapse" aria-labelledby="user2" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser3" aria-expanded="false" aria-controls="cuser3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="cuser3" className="accordion-collapse collapse" aria-labelledby="user3" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser4" aria-expanded="false" aria-controls="cuser4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="cuser4" className="accordion-collapse collapse" aria-labelledby="user4" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="user5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cuser5" aria-expanded="false" aria-controls="cuser5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="cuser5" className="accordion-collapse collapse" aria-labelledby="user5" data-bs-parent="#accordionExample13">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-client" role="tabpanel" aria-labelledby="v-pills-client-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample14">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient1" aria-expanded="true" aria-controls="cclient1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="cclient1" className="accordion-collapse collapse show" aria-labelledby="client1" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient2" aria-expanded="false" aria-controls="cclient2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="cclient2" className="accordion-collapse collapse" aria-labelledby="client2" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient3" aria-expanded="false" aria-controls="cclient3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient3" className="accordion-collapse collapse" aria-labelledby="client3" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient4" aria-expanded="false" aria-controls="cclient4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient4" className="accordion-collapse collapse" aria-labelledby="client4" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient5" aria-expanded="false" aria-controls="cclient5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient5" className="accordion-collapse collapse" aria-labelledby="client5" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="client6">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cclient6" aria-expanded="false" aria-controls="cclient6">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="cclient6" className="accordion-collapse collapse" aria-labelledby="client6" data-bs-parent="#accordionExample14">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade card shadow border-0 p-4" id="v-pills-acivities" role="tabpanel" aria-labelledby="v-pills-acivities-tab" tabIndex="0">
                            <div className="accordion accordion-flush faq-accordian" id="accordionExample15">
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti1">
                                    <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti1" aria-expanded="true" aria-controls="cacti1">
                                        <span className="ps-3 ms-1 fw-semibold">How can I go about setting up an account:</span>
                                    </button>
                                    </h2>
                                    <div id="cacti1" className="accordion-collapse collapse show" aria-labelledby="acti1" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            When you sign up for In Time Pros, you will get a 30-day trial to try out all its features. To sign up, follow the steps below:  
                                        </p>
                                        <p className="mb-0 fw-semibold">
                                            With In Time Pros  
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page </li> 
                                                  <li>Enter a valid email </li>
                                                <li>Next, add a Password (minimum of 8 characters or more) </li>
                                                <li> Click on Get Started and you will be asked a few questions about your business before you can start exploring your account.  
                                                </li>
                                            </ol>
                                            </p>
                                        <p className="mb-0 fw-semibold">
                                            With Google Sign In   
                                        </p>
                                            <p>
                                            <ol>
                                                <li>Go to the signup page</li> 
                                                <li>Click on the Sign up with Google button</li>
                                                <li>Enter in your Google email and click on Next  </li>
                                                <li>Enter in your Google password, then select Next </li>
                                                <li>You will be taken to your INTIME Pros account to finish setting up.  </li>
                                            </ol>
                                            </p>
                                    
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti2">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti2" aria-expanded="false" aria-controls="cacti2">
                                        <span className="ps-3 ms-1 fw-semibold">Do I have to download an executable file to access ITP on my desktop?</span>
                                    </button>
                                    </h2>
                                    <div id="cacti2" className="accordion-collapse collapse" aria-labelledby="acti2" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            Yes, once you install the executable file, you will be able to start using ITP. This allows you to automatically track your clock in & clock out timings. It also tracks employee’s productivity, apps, and screenshots throughout their work hours. It also tracks the employees’ tasks even when they do not have internet access.  
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti3">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti3" aria-expanded="false" aria-controls="cacti3">
                                        <span className="ps-3 ms-1 fw-semibold">What are the Product Features available when I subscribe? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti3" className="accordion-collapse collapse" aria-labelledby="acti3" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p>
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
                                    
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti4">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti4" aria-expanded="false" aria-controls="cacti4">
                                        <span className="ps-3 ms-1 fw-semibold">How can I set up Team & User Management? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti4" className="accordion-collapse collapse" aria-labelledby="acti4" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            <ol>
                                                <li>ITP allows you to create and manage multiple organization units' hierarchy under a single administrator account. </li>
                                                <li>Create various operational units that exist within an organization. Ability to create multiple businesses, departments, and functional units that operate within the organization. </li>
                                                <li>This gets efficient when you divide employees into multiple organizations with different lines of work. </li>
                                                <li>Employees can be easily tagged to multiple projects </li>
                                            </ol>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0">
                                    <h2 className="accordion-header" id="acti5">
                                    <button className="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#cacti5" aria-expanded="false" aria-controls="cacti5">
                                        <span className="ps-3 ms-1 fw-semibold">Will I be able to invite and manage users? </span>
                                    </button>
                                    </h2>
                                    <div id="cacti5" className="accordion-collapse collapse" aria-labelledby="acti5" data-bs-parent="#accordionExample15">
                                    <div className="accordion-body ps-4 ms-3 pb-2 pt-0">
                                        <p className="mb-0">
                                            There is one way to send invitations for your employees to join ITP app:  
                                        </p>
                                        <p className="mb-0">
                                            <ol>
                                                <li>Go to the team member section, on the upper right corner, there you will see the option to invite members. </li>
                                                <li>A pop-up will appear, where you will fill in the necessary information about the members and in the end choose whether you want to send an invitation to their email address or you can do a bulk import of employees to send out invitations. </li>
                                                <li>All imported users get an invitation email and can login to the application with the provided login access. </li>
                                                <li>If for some reason, a specific user is unsuccessful in registering, you can download filtered out data of all failed invitations with the stated reason for failure and resend the invite by correcting the errors. </li>
                                            </ol>
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


        <CTA />
        <Footer />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
      
    
    </> );
}

export default FAQ;