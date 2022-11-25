function PriceTable() {
    return ( <>
    
    
    <div className="container">
        <ul className="nav nav-pills justify-content-between rounded-pill mx-auto pricing-switch primary-outline" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link mb-0 rounded-pill active fw-semibold" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Annual</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link mb-0 rounded-pill fw-semibold" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Monthly</button>
            </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                <section className="pricing-tables content-area">
                    <div className="container">
                        {/* <!-- Main title --> */}
                        <div className="main-title text-center mb-5 mt-4">
                            <p className="text-blue">Get 2 months free when you pay annually</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-md-4">
                                <div className="pricing shadow rounded primary-outline px-4 py-2 me-4">
                                    <div className="price-header">
                                        <div className="title text-blue fs-4 fw-semibold pb-2">Basic</div>
                                        <div className="price pb-1"><span className="primary-text price-text fw-semibold">$5<sup className="primary-text sup-text fw-light">33</sup></span><span className="fw-semibold">/ user / mo</span></div>
                                        <div className="text-blue pb-3">Starts at $140. Includes 2 users</div>
                                        <div className="button pb-4"><a href="#" className="btn btn-success w-100 text-white">Choose Basic Plan</a></div>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Real-time monitoring
                                                </div>
                                                <div>
                                                    <a title="Real-time monitoring">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg></a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                Activity Dashboard
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Performance Metrics
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Summary Reports
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Unlimited Screenshots
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Apps & Website usage
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Data import/export
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Project Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Project budgeting
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Earnings
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto discard idle time
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Offline time tracking
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Online payments
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    3rd party integrations
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Chrome Extension
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Desktop Widget
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    24/5 Support
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Webinars
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Documentation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Personalized onboarding
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Free trial
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Shift Scheduling
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Mobile App
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Productivity Calculation
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Team Leave Calendar
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Location based public holiday
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Time off management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Private mode
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Time & Attendance
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    User Database management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Customized Permission
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client & Business invoicing
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Task & Time Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Auto link task to timesheet
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Outlook & Google integration
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Automated User Status update
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Timesheet Project summary
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Approval Timeline
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4">
                                <div className="pricing shadow rounded primary-outline featured px-4 py-2 pricing-gradient mx-4">
                                    {/* <div className="listing-badges">
                                        <span className="featured">Featured</span>
                                    </div> */}
                                    <div className="ribbon ribbon-top-right"><span>Popular</span></div>
                                    <div className="price-header">
                                        <div className="title text-blue fs-4 fw-semibold pb-2">Premium</div>
                                        <div className="price pb-1"><span className="primary-text price-text fw-semibold">$8<sup className="primary-text sup-text fw-light">50</sup></span><span className="fw-semibold">/ user / mo</span></div>
                                        <div className="text-blue pb-3">Starts at $200. Includes 2 users</div>
                                        <div className="button pb-4"><a href="#" className="btn btn-success w-100 text-white">Choose Premium Plan</a></div>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Real-time monitoring
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                Activity Dashboard
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Performance Metrics
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Summary Reports
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Unlimited Screenshots
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Apps & Website usage
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Data import/export
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Project Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Project budgeting
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Earnings
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto discard idle time
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Offline time tracking
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Online payments
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    3rd party integrations
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Chrome Extension
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Desktop Widget
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    24/5 Support
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Webinars
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Documentation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Personalized onboarding
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Free trial
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Shift Scheduling
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Mobile App
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Productivity Calculation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Team Leave Calendar
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Location based public holiday
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time off management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Private mode
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time & Attendance
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    User Database management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Customized Permission
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client & Business invoicing
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Task & Time Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Auto link task to timesheet
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Outlook & Google integration
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Automated User Status update
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Timesheet Project summary
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Approval Timeline
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4">
                                <div className="pricing shadow rounded primary-outline px-4 py-2 ms-4">
                                <div className="price-header">
                                        <div className="title text-blue fs-4 fw-semibold pb-2 pt-2">Enterprise</div>
                                        <div className="pb-1 fs-5 fw-semibold">Get a customized plan</div>
                                        <div className="price pb-1 visibility-hidden"><span className="primary-text price-text fw-semibold">$5<sup className="primary-text sup-text fw-light">33</sup></span><span className="fw-semibold">/ user / mo</span></div>
                                        
                                        <div className="button pb-4"><a href="#" className="btn btn-success w-100 text-white">Let's Talk</a></div>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Real-time monitoring
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                Activity Dashboard
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Performance Metrics
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Summary Reports
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Unlimited Screenshots
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Apps & Website usage
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Data import/export
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Project Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Project budgeting
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Earnings
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto discard idle time
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Offline time tracking
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Online payments
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    3rd party integrations
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Chrome Extension
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Desktop Widget
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    24/5 Support
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Webinars
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Documentation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Personalized onboarding
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Free trial
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Shift Scheduling
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Mobile App
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Productivity Calculation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Team Leave Calendar
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Location based public holiday
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time off management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Private mode
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time & Attendance
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    User Database management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Customized Permission
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Business invoicing
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Task & Time Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto link task to timesheet
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Outlook & Google integration
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Automated User Status update
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet Project summary
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Approval Timeline
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <section className="pricing-tables content-area">
                    <div className="container">
                        {/* <!-- Main title --> */}
                        <div className="main-title text-center mb-5 mt-4">
                            <p className="text-blue">Get 2 months free when you pay annually</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-4 col-md-4">
                                <div className="pricing shadow rounded primary-outline px-4 py-2 me-4">
                                    <div className="price-header">
                                        <div className="title text-blue fs-4 fw-semibold pb-2">Basic</div>
                                        <div className="price pb-1"><span className="primary-text price-text fw-semibold">$5<sup className="primary-text sup-text fw-light">33</sup></span><span className="fw-semibold">/ user / mo</span></div>
                                        <div className="text-blue pb-3">Starts at $140. Includes 2 users</div>
                                        <div className="button pb-4"><a href="#" className="btn btn-success w-100 text-white">Choose Basic Plan</a></div>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Real-time monitoring
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                Activity Dashboard
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Performance Metrics
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Summary Reports
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Unlimited Screenshots
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Apps & Website usage
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Data import/export
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Project Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Project budgeting
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Earnings
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto discard idle time
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Offline time tracking
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Online payments
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    3rd party integrations
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Chrome Extension
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Desktop Widget
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    24/5 Support
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Webinars
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Documentation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Personalized onboarding
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Free trial
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Shift Scheduling
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Mobile App
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Productivity Calculation
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Team Leave Calendar
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Location based public holiday
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Time off management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Private mode
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Time & Attendance
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    User Database management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Customized Permission
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client & Business invoicing
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Task & Time Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Auto link task to timesheet
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Outlook & Google integration
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Automated User Status update
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Timesheet Project summary
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Approval Timeline
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4">
                                <div className="pricing shadow rounded primary-outline featured px-4 py-2 pricing-gradient mx-4">
                                    {/* <div className="listing-badges">
                                        <span className="featured">Featured</span>
                                    </div> */}
                                    <div className="ribbon ribbon-top-right"><span>Popular</span></div>
                                    <div className="price-header">
                                        <div className="title text-blue fs-4 fw-semibold pb-2">Premium</div>
                                        <div className="price pb-1"><span className="primary-text price-text fw-semibold">$8<sup className="primary-text sup-text fw-light">50</sup></span><span className="fw-semibold">/ user / mo</span></div>
                                        <div className="text-blue pb-3">Starts at $200. Includes 2 users</div>
                                        <div className="button pb-4"><a href="#" className="btn btn-success w-100 text-white">Choose Premium Plan</a></div>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Real-time monitoring
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                Activity Dashboard
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Performance Metrics
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Summary Reports
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Unlimited Screenshots
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Apps & Website usage
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Data import/export
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Project Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Project budgeting
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Earnings
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto discard idle time
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Offline time tracking
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Online payments
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    3rd party integrations
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Chrome Extension
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Desktop Widget
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    24/5 Support
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Webinars
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Documentation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Personalized onboarding
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Free trial
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Shift Scheduling
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Mobile App
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Productivity Calculation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Team Leave Calendar
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Location based public holiday
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time off management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Private mode
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time & Attendance
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    User Database management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Customized Permission
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Client & Business invoicing
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Task & Time Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Auto link task to timesheet
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Outlook & Google integration
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Automated User Status update
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Timesheet Project summary
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div className="text-muted text-decoration-line-through opacity-50">
                                                    Approval Timeline
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 col-md-4">
                                <div className="pricing shadow rounded primary-outline px-4 py-2 ms-4">
                                <div className="price-header">
                                        <div className="title text-blue fs-4 fw-semibold pb-2 pt-2">Enterprise</div>
                                        <div className="pb-1 fs-5 fw-semibold">Get a customized plan</div>
                                        <div className="price pb-1 visibility-hidden"><span className="primary-text price-text fw-semibold">$5<sup className="primary-text sup-text fw-light">33</sup></span><span className="fw-semibold">/ user / mo</span></div>
                                        
                                        <div className="button pb-4"><a href="#" className="btn btn-success w-100 text-white">Let's Talk</a></div>
                                    </div>
                                    <div className="content">
                                        <ul className="list-unstyled">
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Real-time monitoring
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                Activity Dashboard
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Performance Metrics
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Summary Reports
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Unlimited Screenshots
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Apps & Website usage
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Data import/export
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Project Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Project budgeting
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Earnings
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto discard idle time
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Offline time tracking
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Online payments
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    3rd party integrations
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Chrome Extension
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Desktop Widget
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    24/5 Support
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Webinars
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Documentation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Personalized onboarding
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Free trial
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Shift Scheduling
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Mobile App
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Productivity Calculation
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Team Leave Calendar
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Location based public holiday
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time off management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Private mode
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Time & Attendance
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    User Database management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Customized Permission
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client Management
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Client & Business invoicing
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Task & Time Management
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Auto link task to timesheet
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Outlook & Google integration
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Automated User Status update
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Timesheet Project summary
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#794F7E" className="bi bi-info-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center justify-content-between outline-border-75 py-2 px-3">
                                                <div>
                                                    Approval Timeline
                                                </div>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

    
    </> );
}

export default PriceTable;