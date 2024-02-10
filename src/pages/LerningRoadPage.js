import Image2 from "../style/image 11 (2).png";
import './LearningRoad.css';
import Header2 from '../components/Header2'
import platform from '../style/platform.png'
import platform2 from '../style/platform2.png'
import {Link} from 'react-router-dom'
import Button from "../components/Button";
import  {gsap}  from "gsap";
import React, { createRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";

function LearningRoadPage(){

    const data1 = {
        img: Image2,
        name: 'منطق ترتیبی',
        courseLen: 28
    }
    const data = [
        {
            name: 'منطق استراتژی نوبتی',
            state: 'active',
            key: 1,
            desc: 'در درس استراتژی نوبتی شما مفهوم هایی در این رابطه را درک خواهید کرد و می توانید به سوالات پاسخ دهید'
        },
        {
            name: 'یادگیری منطق استراتژی نوبتی',
            state: 'active',
            key: 2,
            desc: 'در درس یادگیری استراتژی نوبتی شما مفهوم هایی در این رابطه را درک خواهید کرد و می توانید به سوالات پاسخ دهید'
        },
        {
            name: 'حقیقت جویی',
            state: 'active',
            key: 3,
            desc: 'در درس یادگیری استراتژی نوبتی شما مفهوم هایی در این رابطه را درک خواهید کرد و می توانید به سوالات پاسخ دهید'
        },
        {
            name: 'یادگیری حقیقت جویی',
            state: 'deactive',
            key: 4
        },
        {
            name: 'ازمون حقیقت جویی',
            state: 'deactive',
            key: 5

        },
        {
            name: 'بدترین حالت ها',
            state: 'deactive',
            key: 6
        },
        {
            name: 'اطلاعات غلط',
            state: 'deactive',
            key: 7
        },
    ]

    const Title = () => {
        return (
            <div className="border-area">
                <img src={data1.img}></img>
                <h3>{data1.name}</h3>
                <p>{data1.courseLen} درس</p>
            </div>
        )
    }

    const Road = () => {
        var prev = 'course0'
        return(
            data.map(function (item, index){
                let num = `course${index}`

                const onEnter = ({ currentTarget }) => {
                    gsap.to(currentTarget, { cursor: 'pointer' , scale: 1.05 });
                };
                  
                const onLeave = ({ currentTarget }) => {
                    gsap.to(currentTarget, { cursor: 'none', scale: 1 });
                };

                const handleClick = () => {
                    document.getElementById(prev).style.display = 'none'
                    document.getElementById(num).style.display = 'flex'
                    prev = num
                }

                const closeAll = () => {
                    document.getElementById(prev).style.display = 'none'
                }

                if (item.state === 'deactive'){
                    return(
                        <div key={index} id="vs" className='box-item'>
                            <img onMouseEnter={onEnter} onMouseLeave={onLeave} src={platform}/>
                            <p>{item.name}</p>
                        </div>
                    )
                } else {
                    return (
                        <>
                        <div key={index} className='box-item'>
                            <div onClick={handleClick}><img  onMouseEnter={onEnter} onMouseLeave={onLeave} src={platform2}/></div>
                            <p>{item.name}</p>
                        </div>
                        <div key={index} id={num} className="desc">
                            <IoMdClose onClick={closeAll} className="closebtn"/>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            <Link to='/Educational-Site/coursepage'><Button primary>شروع درس</Button></Link>
                        </div>
                        </>
                    )
                }
            })
        )
    }

    return(
        <div>
            <Header2/>
            <div className="lerning-road">
                <div className="title"><Title/></div>
                <div className="all-boxes"><Road/></div>
            </div>
        </div>
    )
}

export default LearningRoadPage