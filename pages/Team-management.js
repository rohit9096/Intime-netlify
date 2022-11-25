import Header from "../components/Header";
import Script from 'next/script';
import Head from 'next/head'
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import Link from 'next/link';
import $ from "jquery"
import TeamSection from "@components/Team-management/team-section";
import ClientSection from "@components/Team-management/client-section";
import ProjectManagementSection from "@components/Team-management/project-management";
import TimeManagement from "@components/Team-management/time-management";
import BookDemo from "@components/book-demo";

function Automation() {
    const {asPath} = useRouter();
    useEffect(() => {
        // $('#simple-list-example a').on('click', function(){
        //     $('#simple-list-example a.active').removeClass('active');
        //     $(this).addClass('active');
        // });
        $(document).ready( function () {

            var sections = $('section');
            var nav = $('.pagenav');
            var nav_height = nav.outerHeight();
            // var sec_height = sections.outerHeight();
            // var progress_bar = $(".bt-br");
        
            $(window).on('scroll', function (eventObject) {
        
              // top-bar width
              amountscrolled();
                  
                // for changing section active && link active && link progress func 
              var cur_pos = $(this).scrollTop();
        
                var winheight = $(window).height();
                var docheight = $('section').height();
                var scrollTop = $(window).scrollTop();
        
              sections.each(function() {
              var top = $(this).offset().top - nav_height;
              var secHeight = $(this).outerHeight();
              var bottom = top + secHeight;
        
              var trackLength = docheight - winheight;
              var pctScrolled = Math.floor(scrollTop/trackLength +1 * 100);
        
        
                    $(this).find('').html(secHeight);
                    
                    // for changing right sticky bg 
                var pageScrolled_top = $(this).offset().top - 135;
                    if (cur_pos >= pageScrolled_top && cur_pos <= bottom) {
                        
                        var eq = $(this).attr('id'); 
                        // if ( eq % 2 === 0 ) {
                        //     $('.pageScrolled').css({ 'background': '#1abc9c'});
                        // } else {
                        //     $('.pageScrolled').css({ 'background': '#009688'});
                        // }
                        
                    }
        
                if (cur_pos >= top && cur_pos <= bottom) {
                        // resetting elements for all other than active element
                  nav.find('a').removeClass('active');
                        sections.removeClass('active');
        
                        // for moving menu_br
                        // var eq = $(this).attr('id'); 
                        // progress_bar.css({ 'transform' : 'translateX('+0*eq+'vw)'});
        
                        // adding active for sec & menu 
                  $(this).addClass('active');
                        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        
                        var eq = $(this).attr('id'); 
                        // if ( eq % 2 === 0 ) {
                        //     $('.pagenav').css({ 'background': '#1abc9c'});
                        // } else {
                        //     $('.pagenav').css({ 'background': '#009688'});
                        // }
                        
                    }
                    
                    // function for document hit bootom
                    var scrollHeight = $(document).height();
                    var scrollPosition = $(window).height() + $(window).scrollTop();
                    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                        console.log('Document hit to bottom');
                    }
        
              });
            }).scroll();
        
            // for goto correspond active sec
            nav.find('a').on('click', function () {
              var el = $(this);
              var id = el.attr('href');
              
              $('html, body').animate({
                scrollTop: $(id).offset().top - nav_height
              });
              
              return false;
            });
        
            // func for topbar width onscroll 
            function amountscrolled(){
                var winheight = $(window).height();
                var docheight = $(document).height();
                var scrollTop = $(window).scrollTop();
                var trackLength = docheight - winheight;
                // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
                var pctScrolled = Math.floor(scrollTop/trackLength * 100); 
                $('.top-bar').css({'width': pctScrolled+'%'});
                $('.pageScrolled span').text(pctScrolled);
            };
        
        });
      })

    return ( <>

        <Head>
            <title>Intime-Pros | Team Management</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        </Head>
        <Header />
    
        {/* banner section */}


        <section className="team-banner mb-5 pb-5">
            <div className="container py-4">
                <div className="">
                <div className="text-center text-white py-5 px-5">
                    <h1 className="fs-1 fw-light">Features of <span className="fw-semibold text-white">in time Pro</span></h1>
                    <p className="text-white mb-0 w-50 mx-auto px-5">Learn about the features of in time Pro, a smart solution for High Performing distributing teams.</p>
                    <div className="d-flex gap-4 align-items-center py-4 justify-content-center">
                    <div className="">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">BOOK DEMO</button>
                    </div>
                    <div>          
                    <Link href='/faq'><button className="btn btn-cta bg-white">FAQ</button></Link>
                    </div>
                </div>
                </div>
                </div>
            </div> 
        </section> 
        <div className="container-fluid box-wave wave-stat">
            <div className="box-wave-inner"></div>
        </div>
        <BookDemo />


        {/* feature section */}

        <div className="pagenav border-top border-bottom py-1 bg-white">
           <div className="container">
            <ul class="d-flex justify-content-between align-items-center px-0">
                    <li><a className="active border-gradient px-3" href="#0">Team</a></li>
                    <li><a className="border-gradient px-3" href="#1">Client</a></li>
                    <li><a className="border-gradient px-3" href="#2">Project</a></li>                                
                    <li><a className="border-gradient px-3" href="#3">Task/Time</a></li>
                    <li><a className="border-gradient px-3" href="#4">Timesheet</a></li>
                    <li><a className="border-gradient px-3" href="#5">Employee Monitoring</a></li>
                    <li><a className="border-gradient px-3" href="#6">Time-off</a></li>
                    <li><a className="border-gradient px-3" href="#7">Easy Invoicing</a></li>
                    <li><a className="border-gradient px-3" href="#8">Productivity</a></li>
                    <li><a className="border-gradient px-3" href="#9">Cross-Platform</a></li>
                    {/* <span class="bt-br"></span> */}
                </ul>
           </div>
        </div>

        <div className="sections">
            <section id="0" className="pt-5 mt-5">
                <TeamSection />
            </section>
            <section id="1" className="pt-5 mt-5">
                <ClientSection />
            </section>
            <section id="2" className="pt-5 mt-5">
                <ProjectManagementSection />
            </section>
            <section id="3" className="pt-5 mt-5">
                <TimeManagement />
            </section>
            <section id="4" className="d-flex justify-content-around align-items-center vh-100"><h1>Timesheet</h1></section>
            <section id="5" className="d-flex justify-content-around align-items-center vh-100"><h1>Employee Monitoring</h1></section>
            <section id="6" className="d-flex justify-content-around align-items-center vh-100"><h1>Time-Off</h1></section>
            <section id="7" className="d-flex justify-content-around align-items-center vh-100"><h1>Easy Invoicing</h1></section>
            <section id="8" className="d-flex justify-content-around align-items-center vh-100"><h1>Productivity</h1></section>
            <section id="9" className="d-flex justify-content-around align-items-center vh-100"><h1>Cross-Platform</h1></section>
        </div>



        <Footer />

    

        {/* <Script type="text/javascript" src="./styles/external.js"></Script> */}
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></Script>
      

    </> );
}

export default Automation;