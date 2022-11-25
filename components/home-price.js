function HomePrice() {
    return ( <>
    
    <div className="container-fluid pricing-blue py-5 mt-5" id="home-price">
        <div className="container sm-px-0 mb-5">
        <h3 className="pb-2 text-center pb-5">Price</h3>
            <ul className="nav nav-pills justify-content-between rounded-pill mx-auto pricing-switch primary-outline" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link mb-0 rounded-pill active fw-semibold" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Annual</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link mb-0 rounded-pill fw-semibold" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Monthly</button>
                </li>
            </ul>
            <div className="tab-content pt-5" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <section className="pricing-tables content-area">
                        <div className="container">
                            {/* <!-- Main title --> */}
                            <div className="row">
                                <div className="col-sm-12 col-lg-4 col-md-6 mb-3">
                                    <div className="pricing bg-white border rounded px-4 py-4 me-4 sm-me-0">
                                        <div className="price-header">
                                                <div className="align-items-end d-flex justify-content-between pb-3">
                                                    <div>
                                                        <div className="title fs-4 text-dark fw-semibold">Free</div>
                                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="47.572" viewBox="0 0 54 57.572">
                                                        <g id="Group_173771" data-name="Group 173771" transform="translate(0.5 1.25)">
                                                            <path id="Path_121677" data-name="Path 121677" d="M3.218,10.719a26.79,26.79,0,0,1,41.831.162" transform="translate(2.372 0)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121678" data-name="Path 121678" d="M3,18.75a26.726,26.726,0,0,0,42.757.055" transform="translate(2.071 24.857)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121679" data-name="Path 121679" d="M1.5,26.107V11.821A3.571,3.571,0,0,1,5.071,8.25H8.643" transform="translate(0 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88856" data-name="Line 88856" x2="5.357" transform="translate(1.5 29.321)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88857" data-name="Line 88857" y1="17.857" transform="translate(15.786 18.607)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121680" data-name="Path 121680" d="M7.5,8.25h2.679a4.464,4.464,0,0,1,0,8.929H7.5" transform="translate(8.286 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88858" data-name="Line 88858" x1="5.357" y1="8.929" transform="translate(17.571 27.535)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121681" data-name="Path 121681" d="M20.643,26.107H17.071A3.571,3.571,0,0,1,13.5,22.536V11.821A3.571,3.571,0,0,1,17.071,8.25h3.571" transform="translate(16.571 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88859" data-name="Line 88859" x2="7.143" transform="translate(30.071 29.321)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121682" data-name="Path 121682" d="M26.643,26.107H23.071A3.571,3.571,0,0,1,19.5,22.536V11.821A3.571,3.571,0,0,1,23.071,8.25h3.571" transform="translate(24.857 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88860" data-name="Line 88860" x2="7.143" transform="translate(44.357 29.321)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                        </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            <div className="price pb-3"><span className="fs-2 text-dark fw-semibold">0 </span><span className="fw-semibold fs-4 text-dark">$</span><span className="ps-2 text-muted"> per month </span></div>
                                            <div className="button pb-4 text-center"><a href="#" className="btn btn-success text-white rounded-0">Register Now</a></div>
                                        </div>
                                        <div className="content">
                                            <p className="text-muted mb-0"><small>Includes Features</small></p>
                                            <ul className="check-list list-unstyled">
                                                <li className="py-1">
                                                        Real-time monitoring
                                                </li>
                                                <li className="py-1">
                                                    Activity Dashboard
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Performance Metrics
                                                </li>
                                                <li className="py-1">
                                                        Summary Reports
                                                   
                                                </li>
                                                <li className="py-1">
                                                        Unlimited Screenshots
                                                </li>
                                                <li className="py-1">
                                                        Apps & Website usage
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Timesheet management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Data import/export
                                                </li>
                                                <li className="py-1">
                                                        Project Management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Client & Project budgeting
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 col-md-6 mb-3">
                                    <div className="pricing bg-white border rounded px-4 py-4 me-4 sm-me-0">
                                        <div className="price-header">
                                                <div className="align-items-end d-flex justify-content-between pb-3">
                                                    <div>
                                                        <div className="title fs-4 text-dark fw-semibold">Business</div>
                                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 54 54">
                                                        <g id="Group_173775" data-name="Group 173775" transform="translate(1.25 1.25)">
                                                            <line id="Line_88861" data-name="Line 88861" x1="10.638" y2="2.127" transform="translate(30.112 30.203)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121683" data-name="Path 121683" d="M19.653,13.366l-5.022,2.122a3.156,3.156,0,0,1-2.493-.036A3.284,3.284,0,0,1,10.4,13.609a3.389,3.389,0,0,1,1.569-4.222l5.02-2.5a4.358,4.358,0,0,1,3.542-.209l10.309,4.062" transform="translate(11.514 6.897)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121684" data-name="Path 121684" d="M5.2,20.958H8.756l6.776,5.169a1.844,1.844,0,0,0,2.556.2l9.467-7.818a1.871,1.871,0,0,0,.287-2.587l-5.216-5.8" transform="translate(5.439 11.458)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121685" data-name="Path 121685" d="M17.51,8.571l-.549-.444a3.971,3.971,0,0,0-3.833-.491l-7.933,3.38" transform="translate(5.432 8.068)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121686" data-name="Path 121686" d="M1.39,24.919H7.3a2.536,2.536,0,0,0,2.667-2.382v-11.9A2.536,2.536,0,0,0,7.3,8.252H1.39" transform="translate(0.782 9.165)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121687" data-name="Path 121687" d="M27.328,24.919H21.417a2.536,2.536,0,0,1-2.667-2.382v-11.9a2.536,2.536,0,0,1,2.667-2.38h5.911" transform="translate(22 9.165)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <circle id="Ellipse_8208" data-name="Ellipse 8208" cx="25" cy="25" r="25" transform="translate(0.75 0.75)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                        </g>
                                                        </svg>

                                                    </div>
                                                </div>
                                            <div className="price pb-3"><span className="fs-2 text-dark fw-semibold">2 </span><span className="fw-semibold fs-4 text-dark">$</span><span className="ps-2 text-muted"> per month </span></div>
                                            <div className="button pb-4 text-center"><a href="#" className="btn btn-success text-white rounded-0">Buy Now</a></div>
                                        </div>
                                        <div className="content">
                                            <p className="text-muted mb-0"><small>Includes Free Features</small></p>
                                            <ul className="check-list list-unstyled">
                                                <li className="py-1">
                                                        Real-time monitoring
                                                </li>
                                                <li className="py-1">
                                                    Activity Dashboard
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Performance Metrics
                                                </li>
                                                <li className="py-1">
                                                        Summary Reports
                                                   
                                                </li>
                                                <li className="py-1">
                                                        Unlimited Screenshots
                                                </li>
                                                <li className="py-1">
                                                        Apps & Website usage
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Timesheet management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Data import/export
                                                </li>
                                                <li className="py-1">
                                                        Project Management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Client & Project budgeting
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 col-md-6 mb-3">
                                    <div className="pricing bg-white border rounded px-4 py-4 me-4 sm-me-0">
                                        <div className="price-header">
                                                <div className="align-items-end d-flex justify-content-between pb-3">
                                                    <div>
                                                        <div className="title fs-4 text-dark fw-semibold">Enterprise</div>
                                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 54 54">
                                                        <g id="Group_173776" data-name="Group 173776" transform="translate(1.25 1.25)">
                                                            <circle id="Ellipse_8209" data-name="Ellipse 8209" cx="25" cy="25" r="25" transform="translate(0.75 0.75)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121688" data-name="Path 121688" d="M27.167,40.48V7.665a1.667,1.667,0,0,0-2.251-1.556L11.582,15.6A1.667,1.667,0,0,0,10.5,17.154v5.509" transform="translate(11.917 6.421)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88862" data-name="Line 88862" x2="5" transform="translate(34.083 22.419)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88863" data-name="Line 88863" x2="8.333" transform="translate(30.75 29.086)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88864" data-name="Line 88864" x2="8.333" transform="translate(10.75 35.75)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88865" data-name="Line 88865" y1="6.804" transform="translate(27.417 12.419)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121689" data-name="Path 121689" d="M5.25,30.167V16.833A3.333,3.333,0,0,1,8.583,13.5h8.333a3.333,3.333,0,0,1,3.333,3.333V35.167" transform="translate(5.5 15.583)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                        </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-3 pb-2 pt-2"><div className="input-group mb-3"><input type="email" className="form-control form-control-sm primary-outline rounded-0 py-0" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" /><button className="btn btn-outline-secondary btn-success rounded-0 text-white py-0" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                                    </svg></button></div></div>
                                            <div className="button pb-4 text-center"><a href="#" className="btn btn-success text-white rounded-0">Contact Us</a></div>
                                        </div>
                                        <div className="content">
                                            <p className="text-muted mb-0"><small>Includes Free + Business Features</small></p>
                                            <ul className="check-list list-unstyled">
                                                <li className="py-1">
                                                        Real-time monitoring
                                                </li>
                                                <li className="py-1">
                                                    Activity Dashboard
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Performance Metrics
                                                </li>
                                                <li className="py-1">
                                                        Summary Reports
                                                   
                                                </li>
                                                <li className="py-1">
                                                        Unlimited Screenshots
                                                </li>
                                                <li className="py-1">
                                                        Apps & Website usage
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Timesheet management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Data import/export
                                                </li>
                                                <li className="py-1">
                                                        Project Management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Client & Project budgeting
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
                            <div className="row">
                                <div className="col-sm-12 col-lg-4 col-md-4">
                                    <div className="pricing bg-white border rounded px-4 py-4 me-4">
                                        <div className="price-header">
                                                <div className="align-items-end d-flex justify-content-between pb-3">
                                                    <div>
                                                        <div className="title fs-4 text-dark fw-semibold">Free</div>
                                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="47.572" viewBox="0 0 54 57.572">
                                                        <g id="Group_173771" data-name="Group 173771" transform="translate(0.5 1.25)">
                                                            <path id="Path_121677" data-name="Path 121677" d="M3.218,10.719a26.79,26.79,0,0,1,41.831.162" transform="translate(2.372 0)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121678" data-name="Path 121678" d="M3,18.75a26.726,26.726,0,0,0,42.757.055" transform="translate(2.071 24.857)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121679" data-name="Path 121679" d="M1.5,26.107V11.821A3.571,3.571,0,0,1,5.071,8.25H8.643" transform="translate(0 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88856" data-name="Line 88856" x2="5.357" transform="translate(1.5 29.321)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88857" data-name="Line 88857" y1="17.857" transform="translate(15.786 18.607)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121680" data-name="Path 121680" d="M7.5,8.25h2.679a4.464,4.464,0,0,1,0,8.929H7.5" transform="translate(8.286 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88858" data-name="Line 88858" x1="5.357" y1="8.929" transform="translate(17.571 27.535)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121681" data-name="Path 121681" d="M20.643,26.107H17.071A3.571,3.571,0,0,1,13.5,22.536V11.821A3.571,3.571,0,0,1,17.071,8.25h3.571" transform="translate(16.571 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88859" data-name="Line 88859" x2="7.143" transform="translate(30.071 29.321)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121682" data-name="Path 121682" d="M26.643,26.107H23.071A3.571,3.571,0,0,1,19.5,22.536V11.821A3.571,3.571,0,0,1,23.071,8.25h3.571" transform="translate(24.857 10.357)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88860" data-name="Line 88860" x2="7.143" transform="translate(44.357 29.321)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                        </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            <div className="price pb-3"><span className="fs-2 text-dark fw-semibold">0 </span><span className="fw-semibold fs-4 text-dark">$</span><span className="ps-2 text-muted"> per month </span></div>
                                            <div className="button pb-4 text-center"><a href="#" className="btn btn-success text-white rounded-0">Register Now</a></div>
                                        </div>
                                        <div className="content">
                                            <p className="text-muted mb-0"><small>Includes Features</small></p>
                                            <ul className="check-list list-unstyled">
                                                <li className="py-1">
                                                        Real-time monitoring
                                                </li>
                                                <li className="py-1">
                                                    Activity Dashboard
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Performance Metrics
                                                </li>
                                                <li className="py-1">
                                                        Summary Reports
                                                   
                                                </li>
                                                <li className="py-1">
                                                        Unlimited Screenshots
                                                </li>
                                                <li className="py-1">
                                                        Apps & Website usage
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Timesheet management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Data import/export
                                                </li>
                                                <li className="py-1">
                                                        Project Management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Client & Project budgeting
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 col-md-4">
                                    <div className="pricing bg-white border rounded px-4 py-4 me-4">
                                        <div className="price-header">
                                                <div className="align-items-end d-flex justify-content-between pb-3">
                                                    <div>
                                                        <div className="title fs-4 text-dark fw-semibold">Business</div>
                                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 54 54">
                                                        <g id="Group_173775" data-name="Group 173775" transform="translate(1.25 1.25)">
                                                            <line id="Line_88861" data-name="Line 88861" x1="10.638" y2="2.127" transform="translate(30.112 30.203)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121683" data-name="Path 121683" d="M19.653,13.366l-5.022,2.122a3.156,3.156,0,0,1-2.493-.036A3.284,3.284,0,0,1,10.4,13.609a3.389,3.389,0,0,1,1.569-4.222l5.02-2.5a4.358,4.358,0,0,1,3.542-.209l10.309,4.062" transform="translate(11.514 6.897)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121684" data-name="Path 121684" d="M5.2,20.958H8.756l6.776,5.169a1.844,1.844,0,0,0,2.556.2l9.467-7.818a1.871,1.871,0,0,0,.287-2.587l-5.216-5.8" transform="translate(5.439 11.458)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121685" data-name="Path 121685" d="M17.51,8.571l-.549-.444a3.971,3.971,0,0,0-3.833-.491l-7.933,3.38" transform="translate(5.432 8.068)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121686" data-name="Path 121686" d="M1.39,24.919H7.3a2.536,2.536,0,0,0,2.667-2.382v-11.9A2.536,2.536,0,0,0,7.3,8.252H1.39" transform="translate(0.782 9.165)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121687" data-name="Path 121687" d="M27.328,24.919H21.417a2.536,2.536,0,0,1-2.667-2.382v-11.9a2.536,2.536,0,0,1,2.667-2.38h5.911" transform="translate(22 9.165)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <circle id="Ellipse_8208" data-name="Ellipse 8208" cx="25" cy="25" r="25" transform="translate(0.75 0.75)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                        </g>
                                                        </svg>

                                                    </div>
                                                </div>
                                            <div className="price pb-3"><span className="fs-2 text-dark fw-semibold">2 </span><span className="fw-semibold fs-4 text-dark">$</span><span className="ps-2 text-muted"> per month </span></div>
                                            <div className="button pb-4 text-center"><a href="#" className="btn btn-success text-white rounded-0">Buy Now</a></div>
                                        </div>
                                        <div className="content">
                                            <p className="text-muted mb-0"><small>Includes Free Features</small></p>
                                            <ul className="check-list list-unstyled">
                                                <li className="py-1">
                                                        Real-time monitoring
                                                </li>
                                                <li className="py-1">
                                                    Activity Dashboard
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Performance Metrics
                                                </li>
                                                <li className="py-1">
                                                        Summary Reports
                                                   
                                                </li>
                                                <li className="py-1">
                                                        Unlimited Screenshots
                                                </li>
                                                <li className="py-1">
                                                        Apps & Website usage
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Timesheet management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Data import/export
                                                </li>
                                                <li className="py-1">
                                                        Project Management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Client & Project budgeting
                                                </li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-4 col-md-4">
                                    <div className="pricing bg-white border rounded px-4 py-4 me-4">
                                        <div className="price-header">
                                                <div className="align-items-end d-flex justify-content-between pb-3">
                                                    <div>
                                                        <div className="title fs-4 text-dark fw-semibold">Enterprise</div>
                                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet</p>
                                                    </div>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 54 54">
                                                        <g id="Group_173776" data-name="Group 173776" transform="translate(1.25 1.25)">
                                                            <circle id="Ellipse_8209" data-name="Ellipse 8209" cx="25" cy="25" r="25" transform="translate(0.75 0.75)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121688" data-name="Path 121688" d="M27.167,40.48V7.665a1.667,1.667,0,0,0-2.251-1.556L11.582,15.6A1.667,1.667,0,0,0,10.5,17.154v5.509" transform="translate(11.917 6.421)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88862" data-name="Line 88862" x2="5" transform="translate(34.083 22.419)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88863" data-name="Line 88863" x2="8.333" transform="translate(30.75 29.086)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88864" data-name="Line 88864" x2="8.333" transform="translate(10.75 35.75)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <line id="Line_88865" data-name="Line 88865" y1="6.804" transform="translate(27.417 12.419)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                            <path id="Path_121689" data-name="Path 121689" d="M5.25,30.167V16.833A3.333,3.333,0,0,1,8.583,13.5h8.333a3.333,3.333,0,0,1,3.333,3.333V35.167" transform="translate(5.5 15.583)" fill="none" stroke="#2193ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
                                                        </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-3 pb-2 pt-2"><div className="input-group mb-3"><input type="email" className="form-control form-control-sm primary-outline rounded-0 py-0" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" /><button className="btn btn-outline-secondary btn-success rounded-0 text-white py-0" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                                    </svg></button></div></div>
                                            <div className="button pb-4 text-center"><a href="#" className="btn btn-success text-white rounded-0">Contact Us</a></div>
                                        </div>
                                        <div className="content">
                                            <p className="text-muted mb-0"><small>Includes Free + Business Features</small></p>
                                            <ul className="check-list list-unstyled">
                                                <li className="py-1">
                                                        Real-time monitoring
                                                </li>
                                                <li className="py-1">
                                                    Activity Dashboard
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Performance Metrics
                                                </li>
                                                <li className="py-1">
                                                        Summary Reports
                                                   
                                                </li>
                                                <li className="py-1">
                                                        Unlimited Screenshots
                                                </li>
                                                <li className="py-1">
                                                        Apps & Website usage
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Timesheet management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Data import/export
                                                </li>
                                                <li className="py-1">
                                                        Project Management
                                                    
                                                </li>
                                                <li className="py-1">
                                                        Client & Project budgeting
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
    </div>

    
    </> );
}

export default HomePrice;