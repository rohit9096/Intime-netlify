import Image from 'next/image'
import FeatureIntegrationImage from '/styles/Assets/Home_Assets/feature-integration.svg'

function FeatureIntegration() {
    return ( <>

        <div className='container-fluid py-5 mt-4'>
            <h3 className='text-center pt-3 underline-text position-relative'>Multiple feature integrat<span className="underline pb-1">ion under one platform</span></h3>
            <div className='pt-5 text-center'>
                <Image src={FeatureIntegrationImage} alt="Feature Integration" />
            </div>
        </div>
        
    
    </> );
}

export default FeatureIntegration;