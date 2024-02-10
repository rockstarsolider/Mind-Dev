import './Header2.css';
import Button from "./Button";
import { Link } from 'react-router-dom';
import { TbMenu2, TbHome, TbPaperBag, TbSearch } from 'react-icons/tb';
import SearchBar from './SearchBar'
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

function Header2() {
    const [state, setState] = useState('closed')

    const HandleClick = () => {
        if(state === 'closed'){
            setState('open')
            document.getElementById('hamburger').style.display='block'
            document.getElementById('icon2').classList.add('effect')
        } else if (state === 'open'){
            setState('closed')
            document.getElementById('hamburger').style.display='none'
            document.getElementById('icon2').classList.remove('effect')
        }
    }

    return (
        <div>
            <div className="header2">
                <h2>LearnPlus</h2>
                <div className="icon-container">
                    <Link to='/Educational-Site/userpage' className="color-black txt-decor" ><TbHome className="icon2" /></Link>
                    <Link to='/Educational-Site/userpage' className="color-black txt-decor txt-hide"><p>خانه</p></Link>
                </div>
                <div className="icon-container">
                    <Link to='/Educational-Site/courses-page'  className="color-black txt-decor "><TbPaperBag className="icon2" /></Link>
                    <Link to='/Educational-Site/courses-page' className="color-black txt-decor txt-hide"><p>دروس</p></Link>
                </div>
                <div className='search-hide'>
                    <form>
                        <FiSearch className="search-icon2" />
                        <input ></input>
                    </form>
                </div>
                <Link to='/Educational-Site/pricing' className='txt-hide'><Button primary>اشتراک ویژه</Button></Link>
                <TbMenu2 onClick={HandleClick} id='icon2' className='icon2'/>
            </div>
            <div id='hamburger' style={{display:'none'}}>
                <Link className='txt-decor color-black mt' to='/Educational-Site/pricing'>قیمت گذاری</Link><br/>
                <Link className='txt-decor color-black mt' to='/'>اصول</Link><br/>
                <Link className='txt-decor color-black mt' to='/'>خروج</Link>
            </div>
        </div>
    );
}

export default Header2;