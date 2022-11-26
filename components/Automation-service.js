import Image from 'next/image'
import BannerPowerImage from '/styles/Assets/Home_Assets/power-bi-banner.png'
import PowerAppsImage from '/styles/Assets/Home_Assets/power-app-automation.png'
import PowerPagesImage from '/styles/Assets/Home_Assets/power-pages-automation.png'
import PowerAutomateImage from '/styles/Assets/Home_Assets/power-automate-automation.png'
import VirtualAgentImage from '/styles/Assets/Home_Assets/virtual-apps-agents.png'
import PowerBi from '/styles/Assets/Home_Assets/Power-BI.png'
import VirtualAgent from '/styles/Assets/power-virtual-agents.svg'
import PowerApps from '/styles/Assets/power-apps.svg'
import PowerPages from '/styles/Assets/power-pages.svg'
import PowerAutomate from '/styles/Assets/power-automates.svg'


function AutomationService() {
    return ( <>
    
    
    {/* <section className='mb-5 pt-5' id="automation">
        <div className="container pb-5 mb-5">
            <h3 className="text-center pt-3 pb-5 mb-3"><span className="gradient-one">Automation</span> as a service</h3>
            <div className="mb-5">
                <div className="">
                    <div className="accordion accordion-flush services-accordian" id="accordionExample">
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button py-2 rounded border d-flex gap-3 align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <Image src={PowerBi} alt="Power BI logo" width={40} height={40} />
                                <span>Power BI</span>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-12 col-md-12 pe-2'>
                                    <p className='mb-0 text-muted p-3 border'>Make informed, confident business decisions by putting data-driven insights into everyone's hands.</p>
                                    </div>
                                    <div className='col-lg-8 col-md-12 service-image-col'>
                                    <Image src={BannerPowerImage} alt="Home Banner" />
                                    </div>
                                </div>  
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button py-2 d-flex gap-3 align-items-center rounded border collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <Image src={PowerApps} alt="Power BI logo" width={40} height={40} />
                                <span>Power Apps</span>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-12 col-md-12 pe-2'>
                                    <p className='mb-0 text-muted p-3 border'>Turn ideas into organizational solutions by enabling everyone to build custom apps that solve business challenges.</p>
                                    </div>
                                    <div className='col-lg-8 col-md-12 service-image-col sim-col-2'>
                                    <Image src={PowerAppsImage} alt="Home Banner" />
                                    </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button py-2 d-flex gap-3 align-items-center rounded border collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <Image src={PowerPages} alt="Power BI logo" width={40} height={40} />
                                <span>Power Pages</span>
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-12 col-md-12 pe-2'>
                                    <p className='mb-0 text-muted p-3 border'>Quickly build low-code business websites for delivering vital information and services to your customers.</p>
                                    </div>
                                    <div className='col-lg-8 col-md-12 service-image-col sim-col-3'>
                                    <Image src={PowerPagesImage} alt="Home Banner" />
                                    </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingThree1">
                            <button className="accordion-button py-2 d-flex gap-3 align-items-center rounded border collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                                <Image src={PowerAutomate} alt="Power BI logo" width={40} height={40} />
                                <span>Power Automate</span>
                            </button>
                            </h2>
                            <div id="collapseThree1" className="accordion-collapse collapse" aria-labelledby="headingThree1" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-12 col-md-12 pe-2'>
                                    <p className='mb-0 text-muted p-3 border'>Boost business productivity to get more done by giving everyone the ability to automate organizational processes.</p>
                                    </div>
                                    <div className='col-lg-8 col-md-12 service-image-col sim-col-4'>
                                    <Image src={PowerAutomateImage} alt="Home Banner" />
                                    </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item border-0 mb-4">
                            <h2 className="accordion-header" id="headingThree2">
                            <button className="accordion-button py-2 d-flex gap-3 align-items-center rounded border collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                                <Image src={VirtualAgent} alt="Power BI logo" width={40} height={40} />
                                <span>Power Virtual Agents</span>
                            </button>
                            </h2>
                            <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree2" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0">
                                <div className='row'>
                                    <div className='col-xl-4 col-lg-12 col-md-12 pe-2'>
                                    <p className='mb-0 text-muted p-3 border'>Easily build chatbots to engage conversationally with your customers and employees—no coding required.</p>
                                    </div>
                                    <div className='col-lg-8 col-md-12 service-image-col sim-col-5'>
                                    <Image src={VirtualAgentImage} alt="Home Banner" />
                                    </div>
                                </div> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

<section className='mb-5 pt-5' id="automation">
        <div className="container pb-5 mb-5">
            <h3 className="text-center pt-3 pb-5 mb-3"><span className="gradient-one">Automation</span> as a service</h3>
           <div>
           <div className="grid-automation automation-tabs">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="active align-items-center border mb-4 d-flex gap-3 nav-link px-4 py-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <Image src={PowerBi} alt="Power BI logo" width={50} height={50} />
                        <span>Power BI</span>       
                    </button>
                    <button className="align-items-center border mb-4 d-flex gap-3 nav-link px-4 py-3" id="v-pills-profile-tab1" data-bs-toggle="pill" data-bs-target="#v-pills-profile1" type="button" role="tab" aria-controls="v-pills-profile1" aria-selected="false">
                        <Image src={PowerApps} alt="Power BI logo" width={50} height={50} />
                        <span>Power Apps</span>
                    </button>
                    <button className="align-items-center border mb-4 d-flex gap-3 nav-link px-4 py-3" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">
                        <Image src={PowerPages} alt="Power BI logo" width={50} height={50} />
                        <span>Power Pages</span>
                    </button>
                    <button className="align-items-center border mb-4 d-flex gap-3 nav-link px-4 py-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <Image src={PowerAutomate} alt="Power BI logo" width={50} height={50} />
                        <span>Power Automate</span>
                    </button>
                    <button className="align-items-center border mb-4 d-flex gap-3 nav-link px-4 py-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        <Image src={VirtualAgent} alt="Power BI logo" width={50} height={50} />
                        <span>Power Virtual Agents</span>
                    </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                        <div className='border p-4 ms-4 rounded auto-ms-0'>
                            <Image src={BannerPowerImage} height={420} width={800} alt="Home Banner" />
                            <p className='mb-0 text-muted pt-3'>Make informed, confident business decisions by putting data-driven insights into everyone's hands.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile1" role="tabpanel" aria-labelledby="v-pills-profile-tab1" tabIndex="0">
                        <div className='border p-4 ms-4 rounded auto-ms-0'>
                            <Image src={PowerAppsImage} height={420} width={800} alt="Home Banner" />
                            <p className='mb-0 text-muted pt-3'>Turn ideas into organizational solutions by enabling everyone to build custom apps that solve business challenges.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
                        <div className='border p-4 ms-4 rounded auto-ms-0'>
                            <Image src={PowerPagesImage} height={420} width={800} alt="Home Banner" />
                            <p className='mb-0 text-muted pt-3'>Quickly build low-code business websites for delivering vital information and services to your customers.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                        <div className='border p-4 ms-4 rounded auto-ms-0'>
                            <Image src={PowerAutomateImage} height={420} width={800} alt="Home Banner" />
                            <p className='mb-0 text-muted pt-3'>Boost business productivity to get more done by giving everyone the ability to automate organizational processes.</p>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                        <div className='border p-4 ms-4 rounded auto-ms-0'>
                            <Image src={VirtualAgentImage} height={420} width={800} alt="Home Banner" />
                            <p className='mb-0 text-muted pt-3'>Easily build chatbots to engage conversationally with your customers and employees—no coding required.</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>

    
    </> );
}

export default AutomationService;