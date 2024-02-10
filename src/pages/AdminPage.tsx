import { useState } from 'react'
import './AdminPage.css'
import Button from '../components/Button'
import * as React from 'react';
import ReactPlayer from 'react-player'
import {Box, Card} from './PricingPage'

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { MdOutlineTaskAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

function AdminPage() {
    const [currentPage, setCurrentPage] = useState('Welcome')

    const pageData = [
        {
            id: 'NextTask',
            name: 'تسک پیش رو',
            p: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
            img: require('../style/learn-at-your-level 1 (1).png'),
            icon: <MdOutlineTaskAlt/>
        },
        {
            id:'PrevTasks',
            name: 'تسک های قبلی',
            tasks:[
                {number:1, video: require('../style/landingpage_cs.mp4'), p: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',img: require('../style/learn-at-your-level 1 (1).png')},
                {number:2, video: require('../style/landingpage_cs.mp4'), p: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',img: require('../style/learn-at-your-level 1 (1).png')},
                {number:3, video: require('../style/landingpage_cs.mp4'), p: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',img: require('../style/learn-at-your-level 1 (1).png')},
            ],
            icon:<FaTasks />
        },
        {
            id: 'Timing',
            name: 'زمان، وضعیت حضور در جلسات',
            meta: ' چهارشنبه ها ساعت 7',
            main: ' یکشنبه ها ساعت 7:30',
            present: ['حاضر','حاضر','حاضر','غایب'],
            icon:<FaCalendarTimes />
        },
        {
            id: 'Teacher',
            name: 'راهنما آموزشی',
            teacher: 'فرهاد رضاقلی',
            job: 'وب و بازی سازی',
            img: require('../style/Group 1.png'),
            icon: <FaChalkboardTeacher />
        },
        {
            id: 'Pricing',
            name: 'خرید اشتراک',
            icon:<FaMoneyBillWave />
        },
        {
            id: 'Group',
            name: 'هم تیمی ها',
            group:[
                {title:'امیر',number: '09270001234',img:(require('../style/Group 2.png'))},
                {title:'رضا',number: '09270001234',img:(require('../style/Group 4.png'))},
                {title:'علی',number: '09270001234',img:(require('../style/Group 5.png'))},
            ],
            icon:<RiTeamFill />
        },
        {
            id: 'Setting',
            name: 'تنظیمات',
            icon:<IoMdSettings />
        },
    ]

    const Header = () => {
        return(
            <div className="admin-header">
                <img alt='' src={require('../style/Group 2.png')}/>
                <p>پوریا غیاثی</p>
                <p>امتیاز 15</p>
            </div>
        )
    }

    const SideBar = () => {
        const handleClick = (id) => {
            currentPage === 'Welcome' ? console.log() : document.getElementById(currentPage).style.backgroundColor = '#1F2DAE'
            setCurrentPage(id)
        }

        return(
            <div className='sidebar'>
                <h2>پنل کاربری</h2>
                {pageData.map((item, index) => {
                    return <div id={item.id} onClick={() => handleClick(item.id)} className='sidebarEl' key={index}><p>{item.name}</p>{item.icon}</div>
                })}
            </div>
        )
    }

    // Shows the main content(like tasks,payment,...) on the page
    const Content = () => {
        const Welcome = () => {
            return <div className='welcome flex-box'>
                <img alt='' width={'15%'} src={require('../style/Group 2.png')}/>
                <h2 >خوش آمدی پوریا</h2>
                <p>در حال حاضر 15 امتیاز داری که میتونی با حل تمرینات و شرکت در جلسات امتیاز خودت رو بالا ببری</p>
            </div>
        }

        const NextTask = () => {
            return <div className='next-task timing'>
                <p>{pageData[0].p}</p>
                <img alt='' src={pageData[0].img}/>
                <Button primary>محتوای مورد نیاز</Button>
                <Button secondary>اطلاعات بیشتر</Button>
            </div>
        }

        const Teacher = () => {
            return <div className='teacher flex-box'>
                <img alt='' src={pageData[3].img}/>
                <h2>{pageData[3].teacher}</h2>
                <p>{pageData[3].job}</p>
                <Button primary>چت خصوصی</Button>
            </div>
        }

        const Group = () => {
            function createData(name, calories, fat) {
                return { name, calories, fat };
            }

            const rows = [
                createData('امیر', '09270001234', <img alt='' width='15%' src={require('../style/Group 1.png')}/>  ),
                createData('رضا', '09270001234', <img alt='' width='15%' src={require('../style/Group 2.png')}/>),
                createData('علی', '09270001234', <img alt='' width='15%' src={require('../style/Group 4.png')}/>),
            ];        
              
            return <div className='group-table' dir='rtl'>
                <TableContainer component={Paper} sx={{maxWidth:1000}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell >نام</TableCell>
                            <TableCell align="right">شماره تماس</TableCell>
                            <TableCell align="right">تصویر</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        }

        const PrevTasks = () => {
            return <div className='prev-tasks ' dir='rtl'>
                {pageData[1].tasks.reverse().map((task, index) => {
                    return <Accordion sx={{width:'75%'}} key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                            تسک شماره {task.number}
                        </AccordionSummary>
                        <AccordionDetails>
                            <div  className='timing-rtl'>
                            <p>{task.p}</p>
                            <img src={task.img} alt=''/>
                            <ReactPlayer url={task.video} width={'50%'} controls/>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                })}
            </div>
        }

        const Timing = () => {
            function createData(name, calories, fat) {
                return { name, calories, fat };
            }

            const rows = [
                createData('1402/1/1','فنی', 'غایب'),
                createData('1402/1/1', 'متا', 'حاضر'),
                createData('1402/1/1', 'فنی', 'حاضر'),
            ]; 

            return <div className='timing'>
                <h2>زمان جلسات هفتگی</h2>
                <div className='card-con flex'>
                    <div className='time-card flex-col'>
                        <h3>جلسه متا</h3>
                        <p>{pageData[2].meta}</p>
                        <a href='https://meet.google.com'><Button primary>ورود به جلسه متا</Button></a>
                    </div>
                    <div className='time-card flex-col'>
                        <h3>جلسه فنی</h3>
                        <p>{pageData[2].main}</p>
                        <a href='https://meet.google.com'><Button primary>ورود به جلسه فنی</Button></a>
                    </div>
                </div>
                <div className=''>
                    <h2>حضور در جلسات</h2>
                    <TableContainer component={Paper} dir='rtl' sx={{width:1000}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell >تاریخ</TableCell>
                            <TableCell align="right">جلسه</TableCell>
                            <TableCell align="right">حضور</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
            </div>
        }

        const Setting = () => {
            const [age, setAge] = React.useState('');

            const handleChange = (event) => {
                setAge(event.target.value);
            };

            return <div className='grey-box setting'>
                <h2>تکمیل یا تغییر حساب کاربری</h2>
                <TextField InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="نام" variant="outlined" />
                <TextField InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="نام خانوادگی" variant="outlined" />
                <TextField InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="ایمیل" variant="outlined" />
                <TextField InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="سن" variant="outlined" type="number"/>
                <FormControl sx={{width:'10rem'}} size='small' dir='rtl'>
                    <InputLabel sx={{fontWeight:500,fontFamily:'yekan'}} id="demo-simple-select-label">استان</InputLabel>
                    <Select dir='rtl' labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                        <MenuItem dir='rtl' value={10}>فارس</MenuItem>
                        <MenuItem dir='rtl' value={20}>تهران</MenuItem>
                        <MenuItem dir='rtl' value={30}>گلستان</MenuItem>
                    </Select>
                </FormControl>
                <Button primary>ثبت تغییرات</Button>
                <h2>تغییر رمز ورود</h2>
                <TextField name="email1" InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="رمز قبلی" variant="outlined" type='password'/>
                <TextField name="email2" InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="رمز جدید" variant="outlined"  type='password'/>
                <TextField name="password" InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="تکرار رمز جدید" variant="outlined" type='password' />
                <Button primary>تغییر رمز</Button>
                <h2>خروج از حساب کاربری</h2>
                <a href='/'><Button secondary>خروج از حساب کاربری</Button></a>
            </div>
        }

        const Pricing = () => {
            return <div>
                <Box/>
                <Card/>
            </div>
        }
        
        // Selects the content that should be shown.
        if (currentPage === 'Welcome'){
            return <Welcome/>
        } else if (currentPage === 'NextTask') {
            return <NextTask/>
        } else if (currentPage === 'Teacher') {
            return <Teacher/>
        } else if (currentPage === 'Group') {
            return <Group/> 
        } else if (currentPage === 'PrevTasks') {
            return <PrevTasks/>
        } else if (currentPage === 'Timing') {
            return <Timing/>
        } else if (currentPage === 'Setting') {
            return <Setting/>
        } else if (currentPage === 'Pricing') {
            return <Pricing/>
        }
    }
    
    return(
        <>
        <Header/>
        <div className='admin-main'>
            <div className='content'><Content/></div>
            <SideBar/>
        </div>
        </>
    )
}

export default AdminPage