function Thankyou() {
    return ( <>
    
    <div class="container thanks-container d-flex justify-content-center vh-100">   
                <div class="row d-flex flex-column  justify-content-center align-items-center">
                    <div class="col-12 px-4 text-center">  
                    <div class="check-circle pb-4">
                        {/* <img src="./Assets/thankyou-msg.png" alt="thank-you-check" width="25%" /> */}
                    </div>
                    <div>
                        <h6 class="thankyou-title">Your message has been sent successfully</h6>
                        <p class="thankyou-desc pb-4">Our team will respond to you shortly. <br />Thank You!</p>
                        <a href="/">
                        <button class="btn banner-ani-btn anibutton anibtnred rad-btn py-2">Go To Home</button>
                    </a>
                    </div>

                </div>

            </div>
    </div>

    </> );
}

export default Thankyou;