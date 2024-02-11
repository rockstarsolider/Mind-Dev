import "./MainPage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import game from '../style/main/game.png'
import ai from '../style/main/ai.png'
import web from '../style/main/web design.png'
import graphic from '../style/main/design.png'
import Button from '../components/Button';
import { useState } from "react";
import { Link } from 'react-router-dom';
import v1 from '../style/v1.mp4'
import v2 from '../style/v2.mp4'
import v3 from '../style/v3.mp4'
import v4 from '../style/v4.mp4'
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TextField } from "@mui/material";

function MainPage() {
    const info = [
        {
            src: v1,
            title: 'برنامه نویسی وب',
            one: 'html, css, java script',
            two: 'طراحی با فیگما',
            three: 'React',
            four: 'Next.js'
        },
        {
            src: v2,
            title: 'گرافیک',
            one: 'مبانی طراحی گرافیکی',
            two: 'Photoshop',
            three: 'Illustrator',
            four: 'طراحی انیمیشن',
        },
        {
            src: v3,
            title: 'بازی سازی',
            one: 'Pygame',
            two: 'Unity',
            three: 'ساخت بازی های پلتفرمر',
            four: 'Unreal Engine',
        },
        {
            src: v4,
            title: ' هوش مصنوعی',
            one: 'مبانی هوش مصنوعی',
            two: 'یادگیری مصنوعی',
            three: 'پایتون',
            four: 'شبکه های عصبی',
        },
    ]

    const Intro = () => {
        return (
            <div className='intro'>
                <img alt=" " className="intro-pic" src={require('../style/main/heroo.jpg')}/>
                <div className="intro-con">
                    <h2>بهترین روش یادگیری<span className="color-blue"> کدنویسی</span></h2>
                    <p>چه تازه کار باشید چه حرفه ای، مایند دِو بهترین مکان شما برای یادگیری برنامه نویسی است. از هوش مصنوعی و طراحی وب گرفته تا بازی سازی و گرافیک را میتوانید در مایند دِو یاد بگیرید.
                        شما همچنین میتوانید در سایت آموزشی ما به جلسات هفتگی و تمرینات فعالانه و با پیگیری معلم بپردازید
                    </p>
                    <br />
                    <Link to='/signup' className=""><Button primary>شروع یادگیری</Button></Link>
                </div>
            </div>
        );
    };

    const Section = ({ head, p, pic, classn }) => {
        return (
            <div className={classn}>
                <img src={pic} className="picture" alt='pic' />
                <div className='width'>
                    <h2>{head}</h2>
                    <br />
                    <p>{p}</p>
                </div>
            </div>
        );
    };

    const Card = () => {
        const onEnter = ({ currentTarget }) => {gsap.to(currentTarget, { scale: 1.05 });};
        const onLeave = ({ currentTarget }) => {gsap.to(currentTarget, { scale: 1 });};
        return (
            <div className="cards-sec">
            <h2>در این دوره شما می  توانید  هر یک از علایق خود را دنبال کنید</h2>
            <div className='cards'>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img alt="" src={game} className='icon4' />
                    <Link to='/game' className='color-black txt-decor'><p>بازی سازی</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img alt="" src={ai} className='icon4' />
                    <Link to='/ai' className='color-black txt-decor'><p>هوش مصنوعی</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img alt="" src={web} className='icon4' />
                    <Link to='/web' className='color-black txt-decor'><p>برنامه نویسی وب</p></Link>
                </div>
                <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <img alt="" src={graphic} className='icon4' />
                    <Link to='/graphic' className='color-black txt-decor'><p>گرافیک</p></Link>
                </div>
            </div>
            </div>
        );
    };

    const Table = ()=> {
        const [number, setNumber] = useState(0)

        const handleClicking = (event, num) => {
            setNumber(num)
            document.querySelector('.b1').style.border = '1px solid grey'
            document.querySelector('.b2').style.border = '1px solid grey'
            document.querySelector('.b3').style.border = '1px solid grey'
            document.querySelector('.b4').style.border = '1px solid grey'
            event.currentTarget.style.border = '1px solid blue'
        }

        return(
            <>
            <div className="buttons">
                <button type="button" id="b1" className="item b1" onClick={(event) => handleClicking(event, 0)}>{info[0].title}</button>
                <button type="button" id="b2" className="item b2" onClick={(event) => handleClicking(event, 1)}>{info[1].title}</button>
                <button type="button" id="b3" className="item b3" onClick={(event) => handleClicking(event, 2)}>{info[2].title}</button>
                <button type="button" id="b4" className="item b4" onClick={(event) => handleClicking(event, 3)}>{info[3].title}</button>
            </div>
            <div class="mp-table">
                <video id="mp-video" type='video/mp4' src={info[number].src} className="" autoPlay loop muted></video>
                <div class="container9">
                    <h2>دروس <span>{info[number].title}</span></h2>
                    <ul className="course-list" id="course-list">
                        <li className="list-item" id="1" type="none">{info[number].one}<div className="circle"/></li>
                        <li className="list-item" id="2" type="none">{info[number].two}<div className="circle"/></li>
                        <li className="list-item" id="3" type="none">{info[number].three}<div className="circle"/></li>
                        <li className="list-item" id="4" type="none">{info[number].four}<div className="circle"/></li>
                    </ul>
                </div>
            </div>
            </>
        )
    }

    const Testimonials = () => {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <Slider className='carousel' {...settings}>
                <div className="car-item">
                <div className='testi'>
                    <div className="empty"/>
                    <div className="testi-div">
                        <h2>نظر سنجی</h2>
                        <p>سرعت یادگیری در مایند دِو بالاست و فضا هم صمیمی هست</p>
                        <h3>محمد مرادی</h3>
                        <img alt="" width='40%' src={require('../style/main/star.jpg')}/>
                    </div>
                    <img className="testi-img" alt="" src={require('../style/main/pro1 (1).jpg')}/>
                </div>
                </div>
                <div className="car-item">
                <div className='testi'>
                    <div className="empty"/>
                    <div className="testi-div">
                        <h2>نظر سنجی</h2>
                        <p>محتوای آموزشی ساختار یافته و منظم هستند</p>
                        <h3>رضا علی زاده</h3>
                        <img alt="" width='50%' src={require('../style/main/star.jpg')}/>
                    </div>
                    <img alt=""  className="testi-img" src={require('../style/main/pro1 (2).jpg')}/>
                </div>
                </div>
            </Slider>
        )
    }

    const LastSec = () => {
        return(
            <div className="learn">
                <img className="learn-img2" alt="" src={require('../style/main/Frame 26.jpg')}/>
                <div className="learn-div">
                    <h2>به دنیای یادگیری بپیوندید</h2>
                    <TextField InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="ایمیل" variant="outlined" />
                    <Link to='/SignUp'><Button primary>اکنون شروع کنید</Button></Link>
                </div>
                <img className="learn-img up-pos" alt="" src={require('../style/main/Frame 27.jpg')}/>
            </div>
        )
    }

    return (
        <div className='main-page'>
            <Header></Header>
            <Intro></Intro>
            <Section head='یادگیری موثر' p='زمان کمی در روز را صرف یاد گرفتن کنید 
اما هر روز یاد بگیرید. این شیوه صحیح 
یاد گرفتن است' pic={require('../style/main/photo_5863912991349655975_y.jpg')} classn='intro'></Section>
            <Section head='برنامه ریزی' p='با برنامه ریزی خوب قطعا سرعت 
یادگیریتان چند برابر بیشتر میشود' pic={require('../style/main/photo_5863912991349655976_y.jpg')} classn='intro'></Section>
            <Section head='انگیزه' p='قطعا هر کسی برای رسیدت به هدف 
باید انگیزه ای داشته باشد که ما آن
را هم در نظر گرفته ایم' pic={require('../style/main/photo_5863912991349655977_y.jpg')} classn='intro'></Section>
            <Card></Card>
            <Table></Table>
            <Testimonials/>
            <LastSec></LastSec>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;
