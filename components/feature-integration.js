
function FeatureIntegration() {
    return ( <>

        {/* <div className='container-fluid py-5 mt-4'>
            <h3 className='text-center pt-3 underline-text position-relative'>Multiple feature integrat<span className="underline pb-1">ion under one platform</span></h3>
            <div className='pt-5 text-center'>
                <Image src={FeatureIntegrationImage} alt="Feature Integration" />
            </div>
        </div> */}

        <div className='container py-5 mt-5'>
            <h3 className='text-center pt-3'>Lets <span className="gradient-one">here out</span> what they have to say...</h3>
            <div className='pt-5 mt-4'>
                <ul className="nav nav-tabs justify-content-between border-info border-opacity-25" id="here-out" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Administrator</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Contractor</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Customer</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Employee</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Executive-tab" data-bs-toggle="tab" data-bs-target="#Executive-tab-pane" type="button" role="tab" aria-controls="Executive-tab-pane" aria-selected="false">Executive</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="HExecutive-tab" data-bs-toggle="tab" data-bs-target="#HExecutive-tab-pane" type="button" role="tab" aria-controls="HExecutive-tab-pane" aria-selected="false">HR Executive</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Manager-tab" data-bs-toggle="tab" data-bs-target="#Manager-tab-pane" type="button" role="tab" aria-controls="Manager-tab-pane" aria-selected="false">Manager</button>
                    </li>
                </ul>
                <div className="tab-content mt-5 pt-3" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773756040?h=6fcff2a79a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="intime pro - administrator"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='com-gradient'>Administrator</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>With intime pro, managing teams, projects and clients has become way easier, assigning new tasks to team members and allocate required resources to projects in few simple clicks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773756661?h=aea4d8f0e9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen  title="intime pro - Contractor"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='contractor-gradient'>Contractor</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>I work with various teams and intime pro has helped me share information with my team mates even when I work remotely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773757035?h=81c7461a0d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="intime pro - Customer"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='customer-gradient'>Customer</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>Since the time I have started using intime pro, I have complete transparency of the projects the teams are working on. I get a 360 degree bird view on the health of the project. As a customer I get complete attention, committed team and value for money.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773759677?h=6863df277a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="intime pro - employee"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='employee-gradient'>Employee</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>using intime pro, I am able to evaluate and improve my personal productivity by prioritizing tasks and complete them in a timely manner thus contributing to the success of the project.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="Executive-tab-pane" role="tabpanel" aria-labelledby="Executive-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773757506?h=e22b11db34&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="intime pro - Director"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='executive-gradient'>Executive</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>With intime pro, managing teams, projects and clients has become way easier, assigning new tasks to team members and allocate required resources to projects in few simple clicks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="HExecutive-tab-pane" role="tabpanel" aria-labelledby="HExecutive-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773759728?h=cb870e867b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="intime pro - human resource"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='hr-gradient'>HR Executive</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>intime pro allows me to gauge an employee's performance based on his ability to complete tasks in timely fashion, which helps in planning areas of improvement and to strengthen his career path.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="Manager-tab-pane" role="tabpanel" aria-labelledby="Manager-tab" tabIndex="0">
                        <div className='row text-lg-center text-xxl-start text-xl-start text-sm-center'>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                            <div><iframe className='success-story-iframe' src="https://player.vimeo.com/video/773759775?h=5b43598dff&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen  title="intime pro - manager"></iframe></div>
                            </div>
                            <div className='col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4'>
                                <h3 className='fw-bold'><span className='com-gradient'>Manager</span> Success Story</h3>
                                <p className='text-muted fs-5 pe-5 pt-4 me-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out'>With intime pro, managing teams, projects and clients has become way easier, assigning new tasks to team members and allocate required resources to projects in few simple clicks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://player.vimeo.com/api/player.js"></script>
    
    </> );
}

export default FeatureIntegration;