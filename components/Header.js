import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import Link from 'next/link'

function Header() {
    return (  <>
    <div className="container-fluid main-navigation position-sticky top-0 px-0">
        <nav className="navbar navbar-expand-lg bg-white d-flex align-items-center py-2">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <a><Image src={logo}  alt="logo" width={120} height={50} /></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 d-flex align-items-center">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Features
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Automation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                       <Link href="/faq"><a className="nav-link">FAQ</a></Link> 
                    </li>
                    <li className="nav-item">
                        <Link href="/signin" className="nav-link pe-auto"><a className='primary-link text-decoration-none'>SIGN IN</a></Link>
                    </li>
                    <li className="nav-item">
                        <a href="#"><button className="btn btn-primary text-white">START FREE TRIAL</button></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>

    </>);
}

export default Header;