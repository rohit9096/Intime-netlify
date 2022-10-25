import Image from 'next/image'
import List from './Lists/list';
import WhatIsIntimeImage from '/styles/Assets/Home_Assets/what-is-intime.svg';

function WhatIsIntime() {
    return ( <>
    
        <div className='container whats_intime py-5'>
            <h2 className='text-white text-center pt-3 position-relative'>What is <span className="underline pb-1 text-white">in time PRO</span></h2>
            <div className="row py-5">
                <div className="col-lg-6 col-xs-12 whats-intime-div position-relative">
                 <Image src={WhatIsIntimeImage} alt="What is intime pros" width={786} height={500} />
                </div>
                <div className="col-lg-6 col-xs-12">
                    <List />
                </div>
            </div>
            <div className='text-center'>
                <button className='bg-white rounded btn btn-secondary text-blue'>BOOK DEMO</button>
            </div>
        </div>

    
    </> );
}

export default WhatIsIntime;