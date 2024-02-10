import './Header.css';
import Button from "./Button";
import { Link } from 'react-router-dom';
import logo from '../style/logo.png'

function Header() {
    return (
        <div className="header-main">
            <Link to='/' className="txt-decor color-black logo-title">
                <img src={logo}/>
            </Link>
            <div className='links'>
                <Link className='txt-decor color-black' to='/about'>درباره ما</Link>
                <Link className='txt-decor color-black' to='/about'>دوره ها</Link>
            </div>
            <div className="button-container">
                <Link to='/LoginPage'><Button secondary>ورود</Button></Link>
                <Link to= '/signup'><Button primary>شروع کنید</Button></Link>
            </div>
        </div>
    );
}

export default Header;