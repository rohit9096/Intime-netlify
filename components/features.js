import Image from 'next/image'
import UserManagement from '/styles/Assets/Home_Assets/user-management.png'
import ClientManagement from '/styles/Assets/Home_Assets/client-management-features.png'
import ProjectManagement from '/styles/Assets/Home_Assets/project-management.png'
import TimeManagement from '/styles/Assets/Home_Assets/time-management.png'
import TimesheetManagement from '/styles/Assets/Home_Assets/timesheet-management.png'
import employeemonitoring from '/styles/Assets/Home_Assets/employee-monitoring.png'
import leavemanagement from '/styles/Assets/Home_Assets/leave-management-feature.png'
import { useEffect } from "react";


function Features() {
    useEffect(() => {
        let path=window.location.href;
        path=path.split('#');
        if(path&&path.length>0){
            path=path[path.length-1];
            let element=document.getElementById(path);
            if(element){
                element.click()
            }
            console.log(path);
        }

    })
   
    return ( <>
    
    <section className="pt-5" id="features">
            <div className="container text-center pb-5">
                <h3 className="pt-4 pb-2">Features</h3>
            </div>
            <div className="container bg-white p-4">
                <div className="d-flex align-items-center row">
                    <div className="nav flex-column nav-pills features-pill col-lg-3 col-xs-12 pe-4 mb-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="teams-management" data-bs-toggle="pill" data-bs-target="#v-pills-general" type="button" role="tab" aria-controls="v-pills-General" aria-selected="true">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                                    <g id="Group_173720" data-name="Group 173720" transform="translate(1.5 1.499)">
                                        <path id="Union_20" data-name="Union 20" d="M12.674,21a.5.5,0,0,1-.484-.626,4.545,4.545,0,0,1,3.8-3.36,2.457,2.457,0,1,1,1.19,0,4.545,4.545,0,0,1,3.8,3.36A.5.5,0,0,1,20.5,21Zm.711-1h6.4a3.544,3.544,0,0,0-6.4,0ZM15.13,14.63a1.457,1.457,0,1,0,1.457-1.457A1.458,1.458,0,0,0,15.13,14.63ZM.5,21a.5.5,0,0,1-.484-.626,4.546,4.546,0,0,1,3.8-3.36,2.456,2.456,0,1,1,1.19,0,4.546,4.546,0,0,1,3.8,3.36A.5.5,0,0,1,8.326,21Zm.711-1h6.4a3.544,3.544,0,0,0-6.4,0ZM2.957,14.63a1.456,1.456,0,1,0,1.456-1.457A1.458,1.458,0,0,0,2.957,14.63ZM7.7,16.981a.5.5,0,0,1,.375-.927,6.425,6.425,0,0,0,4.843,0,.5.5,0,0,1,.375.927,7.462,7.462,0,0,1-5.593,0Zm9.639-5.55a.5.5,0,0,1-.434-.559A6.431,6.431,0,0,0,14.132,4.73a.5.5,0,1,1,.562-.827A7.459,7.459,0,0,1,17.9,11a.5.5,0,0,1-.5.438A.517.517,0,0,1,17.342,11.431ZM3.1,11A7.457,7.457,0,0,1,6.306,3.9a.5.5,0,0,1,.562.827,6.43,6.43,0,0,0-2.777,6.142.5.5,0,0,1-.434.559.515.515,0,0,1-.062,0A.5.5,0,0,1,3.1,11ZM6.587,8.826A.5.5,0,0,1,6.1,8.2,4.546,4.546,0,0,1,9.9,4.84a2.457,2.457,0,1,1,1.19,0A4.546,4.546,0,0,1,14.9,8.2a.5.5,0,0,1-.484.626Zm.711-1h6.4a3.544,3.544,0,0,0-6.4,0ZM9.044,2.456A1.456,1.456,0,1,0,10.5,1,1.458,1.458,0,0,0,9.044,2.456Z" transform="translate(-1.501 -1.499)" fill="#ffffff"/>
                                    </g>
                                    </svg>
                                </span>
                                <span>Team</span></div>
                        </button>
                        <button className="nav-link" id="clients-management" data-bs-toggle="pill" data-bs-target="#v-pills-Started" type="button" role="tab" aria-controls="v-pills-Started" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.1" height="22.1" viewBox="0 0 22.1 22.1">
                                    <g id="Group_173786" data-name="Group 173786" transform="translate(-0.2 -0.2)">
                                        <g id="Group_173784" data-name="Group 173784" transform="translate(0.75 0.75)">
                                        <circle id="Ellipse_8211" data-name="Ellipse 8211" cx="2.8" cy="2.8" r="2.8" transform="translate(1.4)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88867" data-name="Line 88867" y2="5.6" transform="translate(4.2 7)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121692" data-name="Path 121692" d="M8.627,10.415A4.2,4.2,0,0,0,.75,12.45v2.8h1.4l.7,7h4.2l.467-4.76" transform="translate(-0.75 -1.25)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        </g>
                                        <g id="Group_173785" data-name="Group 173785" transform="translate(10.55 10.083)">
                                        <rect id="Rectangle_36776" data-name="Rectangle 36776" width="11.2" height="8.867" rx="0.75" transform="translate(0 2.8)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88868" data-name="Line 88868" x2="11.2" transform="translate(0 6.067)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88869" data-name="Line 88869" y2="1.867" transform="translate(5.6 6.067)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121693" data-name="Path 121693" d="M18.233,10.75H15.9a1.4,1.4,0,0,0-1.4,1.4v1.4h5.133v-1.4A1.4,1.4,0,0,0,18.233,10.75Z" transform="translate(-11.467 -10.75)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        </g>
                                    </g>
                                    </svg>
                                </span>
                                <span>Client</span></div>
                        </button>
                        <button className="nav-link" id="projects-management" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.107" height="22.095" viewBox="0 0 22.107 22.095">
                                    <g id="Group_173787" data-name="Group 173787" transform="translate(-0.197 -0.2)">
                                        <path id="Path_121694" data-name="Path 121694" d="M21.733,12.156a.933.933,0,0,0-.914-1.113H9.779a.933.933,0,0,1-.913-.747L8.607,9a.933.933,0,0,0-.913-.747H1.681A.933.933,0,0,0,.768,9.364L3.188,21.5a.933.933,0,0,0,.913.747H18.958a.933.933,0,0,0,.913-.747C20.254,19.583,21.278,14.428,21.733,12.156Z" transform="translate(0 -0.5)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121695" data-name="Path 121695" d="M4.5,4.95l.019-3.267A.933.933,0,0,1,5.452.75h12.1a.933.933,0,0,1,.933.933L18.5,7.75" transform="translate(-0.25)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88870" data-name="Line 88870" x2="7.689" y2="0.007" transform="translate(7.061 3.543)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88871" data-name="Line 88871" x2="3.5" transform="translate(11.25 6.35)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg> 
                                </span>
                                <span>Project</span></div>
                        </button>
                        <button className="nav-link" id="task-management" data-bs-toggle="pill" data-bs-target="#v-pills-company-profile" type="button" role="tab" aria-controls="v-pills-company-profile" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.1" height="22.1" viewBox="0 0 22.1 22.1">
                                    <g id="Group_173789" data-name="Group 173789" transform="translate(-0.2 -0.2)">
                                        <path id="Path_121696" data-name="Path 121696" d="M16.85,22.45a5.6,5.6,0,1,0-5.6-5.6A5.6,5.6,0,0,0,16.85,22.45Z" transform="translate(-0.7 -0.7)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121697" data-name="Path 121697" d="M19.725,17.073H17.25V14.6" transform="translate(-1.1 -0.923)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121698" data-name="Path 121698" d="M5.25,10.511h4.9" transform="translate(-0.3 -0.651)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121699" data-name="Path 121699" d="M5.25,14.261h2.8" transform="translate(-0.3 -0.901)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121700" data-name="Path 121700" d="M5.25,18.011h2.8" transform="translate(-0.3 -1.151)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121701" data-name="Path 121701" d="M9.15,21.75h-7a1.4,1.4,0,0,1-1.4-1.4V5.65a1.4,1.4,0,0,1,1.4-1.4h3.5a3.5,3.5,0,1,1,7,0h3.5a1.4,1.4,0,0,1,1.4,1.4v2.1" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <g id="Group_173788" data-name="Group 173788" transform="translate(8.8 3.56)">
                                        <path id="Path_121702" data-name="Path 121702" d="M9.725,4.461a.35.35,0,1,1,0-.7" transform="translate(-9.375 -3.761)" fill="none" stroke="#0095ff" strokeWidth="1.1"/>
                                        <path id="Path_121703" data-name="Path 121703" d="M9.75,4.461a.35.35,0,0,0,0-.7" transform="translate(-9.4 -3.761)" fill="none" stroke="#0095ff" strokeWidth="1.1"/>
                                        </g>
                                    </g>
                                    </svg>
                                </span>
                                <span>Task/Time</span></div>
                        </button>
                        <button className="nav-link" id="timesheet-management" data-bs-toggle="pill" data-bs-target="#v-pills-organization-unit" type="button" role="tab" aria-controls="v-pills-organization-unit" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.1" height="22.1" viewBox="0 0 22.1 22.1">
                                    <g id="Group_173790" data-name="Group 173790" transform="translate(-0.2 -0.21)">
                                        <path id="Path_121704" data-name="Path 121704" d="M16.35,6.359V21.433a.7.7,0,0,1-.7.7H4.45a.7.7,0,0,1-.7-.7V6.733" transform="translate(-0.2 -0.373)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121705" data-name="Path 121705" d="M20.25,19.51l1.4,2.8,1.4-2.8v-9.1a1.4,1.4,0,0,0-1.4-1.4h0a1.4,1.4,0,0,0-1.4,1.4Z" transform="translate(-1.3 -0.55)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121706" data-name="Path 121706" d="M3.75.76h0a2.8,2.8,0,0,1,2.8,2.8h0a2.8,2.8,0,0,1-2.8,2.8h11.2a2.8,2.8,0,0,0,2.8-2.8h0a2.8,2.8,0,0,0-2.8-2.8H3.75Z" transform="translate(-0.2)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121707" data-name="Path 121707" d="M3.55.76h0a2.8,2.8,0,0,0-2.8,2.8v11.2" transform="translate(0)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121708" data-name="Path 121708" d="M9,11.21l1.4,1.4,2.1-2.1" transform="translate(-0.55 -0.65)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121709" data-name="Path 121709" d="M9,16.46l1.4,1.4,2.1-2.1" transform="translate(-0.55 -1)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg> 
                                </span>
                                <span>Timesheet</span></div>
                        </button>
                        <button className="nav-link" id="employee-monitoring" data-bs-toggle="pill" data-bs-target="#v-pills-agent-app" type="button" role="tab" aria-controls="v-pills-agent-app" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.1" height="22.1" viewBox="0 0 22.1 22.1">
                                    <g id="Group_173791" data-name="Group 173791" transform="translate(-0.2 -0.2)">
                                        <path id="Path_121710" data-name="Path 121710" d="M17.036,22.7H5.964L4.525,16.2a1.063,1.063,0,0,1,.155-.826A.822.822,0,0,1,5.352,15h12.3a.822.822,0,0,1,.672.373,1.063,1.063,0,0,1,.155.826Z" transform="translate(-0.25 -0.95)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88872" data-name="Line 88872" x2="21" transform="translate(0.75 21.75)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <circle id="Ellipse_8212" data-name="Ellipse 8212" cx="1.4" cy="1.4" r="1.4" transform="translate(9.85 16.15)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121711" data-name="Path 121711" d="M8.445,2.781a6.391,6.391,0,0,0,4.6,1.954,6.394,6.394,0,0,0,2.532-.521" transform="translate(-0.513 -0.135)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <circle id="Ellipse_8213" data-name="Ellipse 8213" cx="3.85" cy="3.85" r="3.85" transform="translate(7.4 0.75)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121712" data-name="Path 121712" d="M16.333,12.6A6.231,6.231,0,0,0,7,12.6" transform="translate(-0.417 -0.65)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg>
                                </span>
                                <span>Employee Monitoring</span></div>
                        </button>
                        <button className="nav-link" id="timeoff-management" data-bs-toggle="pill" data-bs-target="#v-pills-time-off" type="button" role="tab" aria-controls="v-pills-time-off" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.32" height="22.096" viewBox="0 0 22.32 22.096">
                                    <g id="Group_173798" data-name="Group 173798" transform="translate(-0.2 -0.204)">
                                        <path id="Path_121726" data-name="Path 121726" d="M20.649,2.254l2.1,2.8h-7" transform="translate(-1 -0.1)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88889" data-name="Line 88889" y1="2.8" x2="2.1" transform="translate(19.65 4.954)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <circle id="Ellipse_8214" data-name="Ellipse 8214" cx="2.8" cy="2.8" r="2.8" transform="translate(3.55 0.754)" fill="none" stroke="#0095ff" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121727" data-name="Path 121727" d="M6.35,7.5a5.6,5.6,0,0,0-5.6,5.6v2.1a1.4,1.4,0,0,0,1.4,1.4h1.4v4.2a1.4,1.4,0,0,0,1.4,1.4h2.8a1.4,1.4,0,0,0,1.4-1.4V16.6h1.4a1.4,1.4,0,0,0,1.4-1.4V13.1a5.6,5.6,0,0,0-5.6-5.6Z" transform="translate(0 -0.45)" fill="none" stroke="#0095ff" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg> 
                                </span>
                                <span>Time-off</span></div>
                        </button>
                        <button className="nav-link" id="easy-invoicing" data-bs-toggle="pill" data-bs-target="#v-pills-services" type="button" role="tab" aria-controls="v-pills-services" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.313" height="22.29" viewBox="0 0 22.313 22.29">
                                    <g id="Group_173794" data-name="Group 173794" transform="translate(-0.2 -0.2)">
                                        <g id="Group_173793" data-name="Group 173793" transform="translate(6.117 2.383)">
                                        <path id="Path_121716" data-name="Path 121716" d="M6.7,8.486a2.072,2.072,0,0,0,1.736.821c1.064,0,1.923-.644,1.923-1.447S9.5,6.423,8.432,6.423,6.5,5.77,6.5,4.977,7.368,3.53,8.432,3.53a2.072,2.072,0,0,1,1.736.821" transform="translate(-6.5 -2.569)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88874" data-name="Line 88874" y2="0.961" transform="translate(1.932 6.739)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88875" data-name="Line 88875" y2="0.961" transform="translate(1.932)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        </g>
                                        <path id="Path_121717" data-name="Path 121717" d="M22.8,20.15l-1.4-2.091V13.15c0-1.867-3.547-3.864-4.9-4.9" transform="translate(-1.05 -0.5)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121718" data-name="Path 121718" d="M18.039,14.57l-3.4-2.725a1.218,1.218,0,1,0-1.727,1.717l3.3,3.733v2.333c0,1.1,1.568,2.8,1.568,2.8" transform="translate(-0.787 -0.716)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121719" data-name="Path 121719" d="M16.167,12.417V2.029A1.279,1.279,0,0,0,14.888.75H11.5" transform="translate(-0.717)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121720" data-name="Path 121720" d="M12.65,21.75H2.038A1.288,1.288,0,0,1,.75,20.471V2.029A1.288,1.288,0,0,1,2.038.75H5.183" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121721" data-name="Path 121721" d="M9.583,13.25H4.45a.709.709,0,0,0-.7.7v5.133a.709.709,0,0,0,.7.7h8.4" transform="translate(-0.2 -0.833)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88876" data-name="Line 88876" x2="7.233" transform="translate(3.55 15.683)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88877" data-name="Line 88877" y2="6.533" transform="translate(7.75 12.417)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg>
                                </span>
                                <span>Easy Invoicing</span><span className="badge rounded-pill custom-badge text-blue text-bg-primary">Coming Soon</span></div>
                        </button>
                        <button className="nav-link" id="productivity" data-bs-toggle="pill" data-bs-target="#v-pills-projects" type="button" role="tab" aria-controls="v-pills-projects" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.328" height="22.1" viewBox="0 0 22.328 22.1">
                                    <g id="Group_173796" data-name="Group 173796" transform="translate(0.028 -0.2)">
                                        <g id="Group_173795" data-name="Group 173795" transform="translate(0.75 0.75)">
                                        <path id="Path_121722" data-name="Path 121722" d="M14.6,22.95H9l.7-4.2h4.2Z" transform="translate(-1.3 -1.95)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88878" data-name="Line 88878" x2="9.8" transform="translate(5.6 21)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <rect id="Rectangle_36777" data-name="Rectangle 36777" width="21" height="16.8" rx="3" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        </g>
                                        <path id="Path_121723" data-name="Path 121723" d="M.75,10.348,4.483,6.615a.7.7,0,0,1,.989,0L7.255,8.453a.7.7,0,0,0,.989,0L11.978,4.72" transform="translate(0 -0.265)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88879" data-name="Line 88879" x2="21" transform="translate(0.75 13.817)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88880" data-name="Line 88880" y2="2.567" transform="translate(13.35 8.217)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88881" data-name="Line 88881" y2="2.567" transform="translate(18.95 8.217)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88882" data-name="Line 88882" y2="4.667" transform="translate(16.15 6.117)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg>
                                </span>
                                <span>Productivity</span></div>
                        </button>
                        <button className="nav-link" id="cross-platform" data-bs-toggle="pill" data-bs-target="#v-pills-productivity" type="button" role="tab" aria-controls="v-pills-productivity" aria-selected="false">
                            <div className='d-flex align-items-center gap-2'>
                                <span className='feature-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.1" height="22.1" viewBox="0 0 22.1 22.1">
                                    <g id="Group_173797" data-name="Group 173797" transform="translate(-0.2 -0.2)">
                                        <line id="Line_88883" data-name="Line 88883" x2="0.7" y2="4.2" transform="translate(14.75 13.35)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88884" data-name="Line 88884" x2="3.5" transform="translate(14.05 17.55)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88885" data-name="Line 88885" x2="7" transform="translate(14.75 10.55)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121724" data-name="Path 121724" d="M14.95,13.35h5.6a1.4,1.4,0,0,0,1.4-1.4V2.15a1.4,1.4,0,0,0-1.4-1.4H5.15a1.4,1.4,0,0,0-1.4,1.4" transform="translate(-0.2)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <rect id="Rectangle_36778" data-name="Rectangle 36778" width="7" height="11.2" rx="1.5" transform="translate(0.75 10.55)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88886" data-name="Line 88886" x2="7" transform="translate(0.75 18.95)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <path id="Path_121725" data-name="Path 121725" d="M3.75,8.05V6.65a1.4,1.4,0,0,1,1.4-1.4h5.6a1.4,1.4,0,0,1,1.4,1.4v8.4a1.4,1.4,0,0,1-1.4,1.4" transform="translate(-0.2 -0.3)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88887" data-name="Line 88887" x2="1.4" transform="translate(10.55 13.35)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                        <line id="Line_88888" data-name="Line 88888" x2="8.4" transform="translate(3.55 7.75)" fill="none" stroke="#0095ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"/>
                                    </g>
                                    </svg>
                                </span>
                                <span>Cross-Platform</span></div>
                        </button>
                    </div>
                    <div className="tab-content col-lg-9 col-xs-12" id="v-pills-tabContent">
                        <div className="tab-pane fade show active border-0" id="v-pills-general" role="tabpanel" aria-labelledby="teams-management" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={UserManagement} alt="user management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Team/User Management</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Create multiple organisational units</li>
                                            <li>​Invite and manage users</li>
                                            <li>Import Users​</li>
                                            <li>Easy export & share</li>
                                            <li>​Shift scheduling</li>
                                            <li>Archive/Delete Users</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-Started" role="tabpanel" aria-labelledby="clients-management" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={ClientManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>​Client Management​</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Invite Clients</li>
                                            <li>​Manage multiple clients​</li>
                                            <li>Link multiple projects to a client</li>
                                            <li>​Easy invoicing​</li>
                                            <li>Easy export & share</li>
                                            <li>Archive/Delete Clients</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-profile" role="tabpanel" aria-labelledby="projects-management" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={ProjectManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Project Management</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Create and manage multiple projects</li>
                                            <li>Allocate team members to the project</li>
                                            <li>Link tasks/timesheet to projects</li>
                                            <li>Easy export & share</li>
                                            <li>Create detailed project reports in seconds</li>
                                            <li>Archive/ Delete projects</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-company-profile" role="tabpanel" aria-labelledby="task-management" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={TimeManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Task/Time Management</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Create and assign tasks to the team members</li>
                                            <li>Import / Export tasks list</li>
                                            <li>Track your tasks with automated timer</li>
                                            <li>Automated user's status update</li>
                                            <li>Tasks calendar view with Outlook integration</li>
                                            <li>Link Tasks to Timesheets</li>
                                            <li>Add manual time entry to the task</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-organization-unit" role="tabpanel" aria-labelledby="timesheet-management" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={TimesheetManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Timesheet Management</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Create daily, weekly & monthly timesheets</li>
                                            <li>My timesheet list</li>
                                            <li>Approve/reject timesheets</li>
                                            <li>Easy export & share</li>
                                            <li>Timesheet summary view for each project</li>
                                            <li>Add manual task into the timesheet</li>
                                            <li>Timesheet timeline</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-agent-app" role="tabpanel" aria-labelledby="employee-monitoring" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={employeemonitoring} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Employee Monitoring</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Real-time team tracking</li>
                                            <li>Location tracking</li>
                                            <li>Time & attendance</li>
                                            <li>Private mode option</li>
                                            <li>Add manual offline time</li>
                                            <li>Offline tracking</li>
                                            <li>Track apps & websites</li>
                                            <li>View real-time employees' screenshots</li>
                                            <li>Export custom reports</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-time-off" role="tabpanel" aria-labelledby="timeoff-management" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={leavemanagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Time-off/ Leave Management</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Add new custom time off</li>
                                            <li>Manage my Time off list</li>
                                            <li>Approve/reject time off</li>
                                            <li>Location based public holidays</li>
                                            <li>Team leave Calendar</li>
                                            <li>Audit time-off timeline</li>
                                            <li>Export custom leave report</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-services" role="tabpanel" aria-labelledby="easy-invoicing" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={ProjectManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Easy invoicing</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Create automated professional invoices</li>
                                            <li>Track all client's and business invoices</li>
                                            <li>Rate product & services</li>
                                            <li>Easy export & share reports</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-projects" role="tabpanel" aria-labelledby="productivity" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={ProjectManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Productivity definition & calculation</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Categories applications</li>
                                            <li>Define productive/unproductive/ neutral apps</li>
                                            <li>Productivity calculation</li>
                                            <li>Links apps to Projects, Users & Unit</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="tab-pane fade border-0" id="v-pills-productivity" role="tabpanel" aria-labelledby="cross-platform" tabIndex="0">
                            <div className='row align-items-center'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <Image src={ProjectManagement} alt="project management" />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <h6>Desktop & Mobile Apps</h6>
                                        <ul className='px-4 feature-list'>
                                            <li>Window Agent app</li>
                                            <li>MAC App</li>
                                            <li>Android App</li>
                                            <li>iOS App</li>
                                        </ul>
                                        <div className='d-flex pt-3 gap-4 align-items-center'>
                                            {/* <a href='#'><button className='btn btn-info bg-white rounded-0 primary-outline text-blue text-decoration-none'>Learn More &gt;&gt;</button></a> */}
                                            <a href="#"><button className="btn btn-outline-secondary btn-success rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Start a free trial</button></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </> );
}

export default Features;