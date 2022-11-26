import Header from "../components/Header";
import Script from 'next/script';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import ProjectManagement from '/styles/Assets/Home_Assets/project-management.png'
import Googlelogo from '/styles/Assets/google-logo.png'
import Mslogo from '/styles/Assets/microsoft-logo.png'
import TimeManagement from '/styles/Assets/Home_Assets/time-management.png'
import TimesheetManagement from '/styles/Assets/Home_Assets/timesheet-management.png'
import TrialDemo from "@components/trial-demo";

function SignIn() {
    return ( <>

        <Head>
            <title>in time PRO | Sign In</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
    
        <Header />
        <TrialDemo />
        <div className="container-fluid signin-bg vh-100 d-flex align-items-center vh-md-auto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 sm-px-0 sm-my-3">
                        <div className="card py-4 login-card border-0 mx-md-auto mt-md-5 mb-md-5">
                                <Image src={logo} className="login-intime"  alt="logo" width={60} height={50} />
                                <p className="fs-4 fw-semibold text-center pt-4"> Sign in</p>
                                <div className="social-login d-flex sm-d-block justify-content-between pt-2">
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
                                <form className="">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label mb-0">Email</label>
                                        <input type="email" className="form-control primary-outline rounded-0" id="exampleInputEmail1" placeholder="mail.example.com" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label mb-0">Password</label>
                                        <input type="password" className="form-control primary-outline rounded-0" id="exampleInputPassword1" placeholder="Enter your password here" />
                                    </div>
                                    <div className="mb-4 d-flex justify-content-between">
                                        <div className="d-flex gap-2 align-items-center">
                                            <input type="checkbox" className="form-check-input mt-0" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <div>
                                            <a href="#" className="primary-link text-decoration-none">Forgot password?</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100 rounded-0 text-white mb-3">SIGN IN</button>
                                    <div className="d-flex gap-2 justify-content-center pt-4">
                                        <p className="mb-0">Don't have an account?</p>
                                        <Link href="./createnewaccount"><a className="text-blue text-decoration-none">Sign Up For Free</a></Link>
                                    </div>
                                    <div className="d-flex gap-2 justify-content-center pt-3">
                                        <p className="">By continuing I agree to</p>
                                        <a href="#" className="text-blue text-decoration-none">Terms of Service</a>
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


        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
        
    </> );
}

export default SignIn;