import Image from 'next/image'
import AxisImage from '/styles/Assets/Home_Assets/Axis.png'
import VectorSoftwareImage from '/styles/Assets/Home_Assets/vectorsoftware.png'
import SoftwareImage from '/styles/Assets/Home_Assets/software.png'
import SystemsImage from '/styles/Assets/Home_Assets/Systems.png'

function Logo() {
    return ( <>
    
        <div className='container py-4 mb-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <Image src={AxisImage} alt="Home Banner" className='Power BI' width={75} height={70} />
                <Image src={VectorSoftwareImage} alt="Home Banner" className='Power BI' width={75} height={70} />
                <Image src={SoftwareImage} alt="Home Banner" className='Power BI' width={75} height={70} />
                <Image src={AxisImage} alt="Home Banner" className='Power BI' width={75} height={70} />
                <Image src={SystemsImage} alt="Home Banner" className='Power BI' width={75} height={70} />
            </div>
        </div>

    </> );
}

export default Logo;