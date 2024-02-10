import "../style/HTML.css";
import "./PricingPage.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import im5 from "../style/im3.png";
import Button from '../components/Button'
import gsap from 'gsap'
import computer from '../style/computer.png'
import programming from '../style/programming.png'
import science from '../style/science.png'
import math from '../style/math.png'
import { Link } from "react-router-dom";
import game from '../style/main/game.png'
import ai from '../style/main/ai.png'
import web from '../style/main/web design.png'
import graphic from '../style/main/design.png'

const Box = () => {
    return (
        <div className="pricing flex-col">
            <h2>تمدید اشتراک</h2>
            <div className="prices flex">
                <div className="price flex-col">
                    <h3>اشتراک 3 ماهه</h3>
                    <p>چهار میلیون تومان</p>
                    <Button primary>خرید اشتراک</Button>
                </div>
                <div className="popular">
                <div className="price flex-col">
                    <h3>اشتراک 6 ماهه</h3>
                    <p>چهار میلیون تومان</p>
                    <Button primary>خرید اشتراک</Button>
                </div>
                </div>
                <div className="price flex-col">
                    <h3>اشتراک 1 ماهه</h3>
                    <p>چهار میلیون تومان</p>
                    <Button primary>خرید اشتراک</Button>
                </div>
            </div>
            <p className="popular-p">پر طرفدار ترین</p>
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

function PricingPage() {
    const Box = () => {
        return (
            <div className="pricing flex-col pad-top">
                <h2>اشتراک ها</h2>
                <div className="prices flex">
                <div className="price flex-col">
                    <h3>اشتراک 3 ماهه</h3>
                    <p>چهار میلیون تومان</p>
                    <Button primary>خرید اشتراک</Button>
                </div>
                <div className="popular">
                <div className="price flex-col">
                    <h3>اشتراک 6 ماهه</h3>
                    <p>چهار میلیون تومان</p>
                    <Button primary>خرید اشتراک</Button>
                </div>
                </div>
                <div className="price flex-col">
                    <h3>اشتراک 1 ماهه</h3>
                    <p>چهار میلیون تومان</p>
                    <Button primary>خرید اشتراک</Button>
                </div>
            </div>
            <p className="popular-p">پر طرفدار ترین</p>
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
                <img alt="" src={math} className='icon4' />
                <Link to='/Educational-Site/math' className='color-black txt-decor'><p>بازی سازی</p></Link>
            </div>
            <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img alt="" src={computer} className='icon4' />
                <Link to='/Educational-Site/engineering' className='color-black txt-decor'><p>هوش مصنوعی</p></Link>
            </div>
            <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img alt="" src={programming} className='icon4' />
                <Link to='/Educational-Site/programming' className='color-black txt-decor'><p>برنامه نویسی وب</p></Link>
            </div>
            <div className='card' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img alt="" src={science} className='icon4' />
                <Link to='/Educational-Site/datascience' className='color-black txt-decor'><p>گرافیک</p></Link>
            </div>
        </div>
        </div>
    );
    };

  return (
    <div>
      <Header />
      <div className="pricing-page">
        <Box />
        <Card/>
      </div>
      <Footer />
    </div>
  );
}

export default PricingPage;
export {Box, Card}