import Header from "../components/Header";
import Script from 'next/script';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ProjectManagement from '/styles/Assets/Home_Assets/project-management.png'
import Googlelogo from '/styles/Assets/google-logo.png'
import Mslogo from '/styles/Assets/microsoft-logo.png'
import TimeManagement from '/styles/Assets/Home_Assets/time-management.png'
import TimesheetManagement from '/styles/Assets/Home_Assets/timesheet-management.png'
import logo from '/styles/Assets/logo.svg'
import TrialDemo from "@components/trial-demo";

function CreateNewAccount() {
    return ( 
        <>

        <Head>
            <title>in time PRO | Create New Account</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
    
        <Header />
        <TrialDemo />
        <div className="container-fluid signin-bg vh-100 d-flex align-items-center vh-md-auto" id="sign">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 sm-px-0 sm-my-3">
                        <div className="card py-4 login-card border-0 mx-md-auto mt-md-5 mb-md-5">
                                <Image src={logo} className="login-intime"  alt="logo" width={60} height={50} />
                                <p className="fs-4 fw-semibold text-center pt-4"> Sign Up</p>
                                <div className="social-login d-flex sm-d-block justify-content-between pt-2" id="social-login">
                                    <button type="button" className="google-btn primary-outline d-flex align-items-center gap-2 justify-content-center px-3 py-2 bg-white rounded-0 sm-w-100 sm-mb-1">
                                        <Image src={Mslogo} alt="Microsoft logo" width={24} height={24} />
                                         <p className="btn-text mb-0 fw-light">Sign in with Microsoft</p>
                                    </button>
                                    <button className="google-btn primary-outline d-flex align-items-center gap-2 justify-content-center px-3 py-2 bg-white rounded-0 sm-w-100">
                                        
                                        <Image src={Googlelogo} alt="google logo" width={24} height={24} />
                                        <p className="btn-text mb-0 fw-light">Sign in with Google</p>
                                    </button>        
                                </div>
                                <div className="d-flex justify-content-center pt-3">
                                    <p className="orborder divider line one-line"><span className="ps-2">Or</span></p>
                                </div>
                                <form className="px-2" name="createaccount" method="POST" data-netlify="true" onSubmit="submit" netlify-honeypot="bot-field" action='/Thankyou'>
                                    <input type="hidden" name="form-name" value="createaccount" />
                                    <div className="mb-3">
                                        <label htmlFor="Name" className="form-label mb-0">Name <span className='required'>*</span></label>
                                        <input type="text" className="form-control primary-outline" name="name" id="Name" placeholder="Enter full name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email <span className='required'>*</span></label>
                                        <input type="email" className="form-control primary-outline" name="email" id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label mb-0">Password <span className='required'>*</span></label>
                                        <input type="password" className="form-control primary-outline" name="password" id="exampleInputPassword1" placeholder="Enter password" required />
                                        <small className="text-muted password-note">Use 6 or more characters with a mix of letters, numbers and symbols</small>
                                    </div>
                                    <div className="mb-4 d-flex justify-content-between">
                                        <div className="d-flex gap-2 align-items-center">
                                            <input type="checkbox" className="form-check-input mt-0" name="accept terms of service" id="exampleCheck1" required />
                                            <label className="form-check-label" htmlFor="exampleCheck1">I accept the</label>
                                            <a href="#" className="text-blue text-decoration-none">Terms of Service</a>
                                        </div>
                                    </div>
                                        <p className="hidden d-none">
                                            <label>
                                            Don't fill this out if you're human: <input name="bot-field" />
                                            </label>
                                        </p>
                                    <button type="submit" className="btn btn-success w-100 text-white rounded-0">CREATE MY ACCOUNT</button>
                                    <div className="d-flex gap-2 justify-content-center pt-3">
                                        <p className="mb-0">Already have account?</p>
                                        <Link href='/signin'><a className="text-blue text-decoration-none">Sign In</a></Link>
                                    </div>
                                </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 pt-xxl-5">
                        <h6 className="fs-4 text-center text-white">Say "HELLO" to the new world of</h6>
                        <h1 className="fs-3 text-center fw-bold sign-banner">AUTOMATED TIME TRACKING</h1>
                        <div className="pt-5">
                            <div id="carouselExampleInterval" className="carousel slide signin-carousel" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner text-center">
                                    <div className="carousel-item active">
                                    <Image src={ProjectManagement} alt="project management" width="403" height="364" />
                                    <div className="carousel-caption d-block pt-5 mt-5 position-static">
                                        <h5 className="fs-5 fw-semibold">Project Management</h5>
                                    </div>
                                    </div>
                                    <div className="carousel-item">
                                    <Image src={TimeManagement} alt="project management" width="403" height="364" />
                                    <div className="carousel-caption d-block pt-5 mt-5 position-static">
                                        <h5 className="fs-5 fw-semibold">Team/User Management</h5>
                                    </div>
                                    </div>
                                    <div className="carousel-item">
                                    <Image src={TimesheetManagement} alt="project management" width="403" height="364" />
                                    <div className="carousel-caption d-block pt-5 mt-5 position-static">
                                        <h5 className="fs-5 fw-semibold">Timesheet Management</h5>
                                    </div>
                                    </div>
                                </div>
                                {/* data-bs-interval="3000"<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card px-4 py-5 login-card border-0">
                    <p className="fs-5 px-2 fw-semibold"> Sign Up</p>
                    <div className="social-login px-2 d-flex justify-content-between pt-2">
                        <button type="button" className="google-btn primary-outline d-flex align-items-center gap-2 justify-content-center px-3 py-2 bg-white">
                            <img alt="Google" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                            <p className="btn-text mb-0 fw-light">Sign up with Microsoft</p>
                        </button>
                        <button className="google-btn primary-outline d-flex align-items-center gap-2 justify-content-center px-3 py-2 bg-white">
                            <img alt="Google" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQkJCMDA7IiBkPSJNMTEzLjQ3LDMwOS40MDhMOTUuNjQ4LDM3NS45NGwtNjUuMTM5LDEuMzc4QzExLjA0MiwzNDEuMjExLDAsMjk5LjksMCwyNTYNCgljMC00Mi40NTEsMTAuMzI0LTgyLjQ4MywyOC42MjQtMTE3LjczMmgwLjAxNGw1Ny45OTIsMTAuNjMybDI1LjQwNCw1Ny42NDRjLTUuMzE3LDE1LjUwMS04LjIxNSwzMi4xNDEtOC4yMTUsNDkuNDU2DQoJQzEwMy44MjEsMjc0Ljc5MiwxMDcuMjI1LDI5Mi43OTcsMTEzLjQ3LDMwOS40MDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTE4RUY4OyIgZD0iTTUwNy41MjcsMjA4LjE3NkM1MTAuNDY3LDIyMy42NjIsNTEyLDIzOS42NTUsNTEyLDI1NmMwLDE4LjMyOC0xLjkyNywzNi4yMDYtNS41OTgsNTMuNDUxDQoJYy0xMi40NjIsNTguNjgzLTQ1LjAyNSwxMDkuOTI1LTkwLjEzNCwxNDYuMTg3bC0wLjAxNC0wLjAxNGwtNzMuMDQ0LTMuNzI3bC0xMC4zMzgtNjQuNTM1DQoJYzI5LjkzMi0xNy41NTQsNTMuMzI0LTQ1LjAyNSw2NS42NDYtNzcuOTExaC0xMzYuODlWMjA4LjE3NmgxMzguODg3TDUwNy41MjcsMjA4LjE3Nkw1MDcuNTI3LDIwOC4xNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMjhCNDQ2OyIgZD0iTTQxNi4yNTMsNDU1LjYyNGwwLjAxNCwwLjAxNEMzNzIuMzk2LDQ5MC45MDEsMzE2LjY2Niw1MTIsMjU2LDUxMg0KCWMtOTcuNDkxLDAtMTgyLjI1Mi01NC40OTEtMjI1LjQ5MS0xMzQuNjgxbDgyLjk2MS02Ny45MWMyMS42MTksNTcuNjk4LDc3LjI3OCw5OC43NzEsMTQyLjUzLDk4Ljc3MQ0KCWMyOC4wNDcsMCw1NC4zMjMtNy41ODIsNzYuODctMjAuODE4TDQxNi4yNTMsNDU1LjYyNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTQzMzY7IiBkPSJNNDE5LjQwNCw1OC45MzZsLTgyLjkzMyw2Ny44OTZjLTIzLjMzNS0xNC41ODYtNTAuOTE5LTIzLjAxMi04MC40NzEtMjMuMDEyDQoJYy02Ni43MjksMC0xMjMuNDI5LDQyLjk1Ny0xNDMuOTY1LDEwMi43MjRsLTgzLjM5Ny02OC4yNzZoLTAuMDE0QzcxLjIzLDU2LjEyMywxNTcuMDYsMCwyNTYsMA0KCUMzMTguMTE1LDAsMzc1LjA2OCwyMi4xMjYsNDE5LjQwNCw1OC45MzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                            <p className="btn-text mb-0 fw-light">Sign up with Google</p>
                        </button>        
                    </div>
                    <div className="d-flex justify-content-center pt-3 ps-3">
                        <p className="mb-1">Or</p>
                    </div>
                    <form className="px-2">
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label mb-0">Name</label>
                            <input type="text" className="form-control primary-outline" id="Name" placeholder="Enter full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email</label>
                            <input type="email" className="form-control primary-outline" id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label mb-0">Password</label>
                            <input type="password" className="form-control primary-outline" id="exampleInputPassword1" placeholder="Enter password" />
                            <small className="text-muted password-note">Use 6 or more characters with a mix of letters, numbers and symbols</small>
                        </div>
                        <div className="mb-4 d-flex justify-content-between">
                            <div className="d-flex gap-2 align-items-center">
                                <input type="checkbox" className="form-check-input mt-0" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">I accept the</label>
                                <a href="#" className="text-purple text-decoration-none">Terms of Service</a>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 text-white">CREATE MY ACCOUNT</button>
                        <div className="d-flex gap-2 justify-content-center pt-3">
                            <p className="mb-0">Already have account?</p>
                            <Link href='/signin'><a className="text-blue text-decoration-none">Sign In</a></Link>
                        </div>
                    </form>
            </div>
            </div>
        </div> */}


        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
        

        </>
     );
}

export default CreateNewAccount;