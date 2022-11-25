import Image from 'next/image'
import logo from '/styles/Assets/logo.svg'
import Link from 'next/link'
import TrialDemo from './trial-demo';
import SignIn from './sign-in';

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
                    <li className="nav-item">
                    <Link href='/#features' scroll={false}><a className="nav-link">
                            Features
                        </a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/#automation' scroll={false}><a className="nav-link">Automation</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link href='/#home-price' scroll={false}><a className="nav-link">Pricing</a></Link>
                    </li>
                    <li className="nav-item">
                       <Link href="/faq"><a className="nav-link">FAQ</a></Link> 
                    </li>
                    <li className="nav-item">
                        <Link href="/signin" className="nav-link pe-auto"><a className='primary-link text-decoration-none'>Sign in</a></Link>
                    </li>
                    <li className="nav-item">
                        <a href="#"><button className="btn btn-primary text-white rounded-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">START FREE TRIAL</button></a>
                    </li>
                    <li className="nav-item">
                        <select className="form-select border-0" aria-label="Default select example">
                        <option value="DEFAULT">Lang</option>
                        <option value="1">Eng (UK)</option>
                        <option value="2">Eng (US)</option>
                        <option value="3">African</option>
                        </select>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>

    </>);
}

export default Header;