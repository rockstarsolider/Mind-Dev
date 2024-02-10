import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../style/logo.png'
import Button from "./Button";
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <div className="footer">
        <div className="flex-col"><img alt="" className="pic flex-col" src={logo}/></div>
        <div className="flex-col gap">
            <Link className="color-decor" to='/about'>درباره ما</Link>
            <Link className="color-decor" to='/pricing'>اشتراک ها</Link>
            <Link className="color-decor" to='/'>همکاری با ما</Link>
        </div>
        <div className="flex-col">
            <Link to='/signup'><Button primary>شروع کردن</Button></Link>
        </div>
        <div className="flex-col">
            <LuInstagram className='icon'/>
        </div>
    </div>
  );
}

export default Footer;