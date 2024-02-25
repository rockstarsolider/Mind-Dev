import './PreSignup.css'
import { Link } from 'react-router-dom'
import {TbArrowLeft} from 'react-icons/tb'
import { useState } from 'react'
import { gsap } from 'gsap'
import Button from '../components/Button'
import TextField from '@mui/material/TextField';
import BoxComp from '@mui/material/Box';

function PreSignup() {
    const pageData = [
        {
            dialog: 'سلام خوش آمدی',
            img:'robot.jpg'
        },
        {
            dialog: 'بریم شروع کنیم',
            img: 'robot.jpg'
        },
        {
            dialog: 'تو از کدام شهر هستی؟',
            img: 'robot.jpg',
            boxProps: [
                {
                city:'شیراز',
                img: require('../style/cities/kerman.png')
                },
                {
                city:'تهران',
                img:require('../style/cities/kerman.png')
                },
                {
                city:'اصفهان',
                img:require('../style/cities/kerman.png')
                },
                {
                city:'تبریز',
                img:require('../style/cities/kerman.png')
                },
                {
                city:'کرج',
                img:require('../style/cities/kerman.png')
                }
            ]
        },
        {
            dialog: 'چه چیزی دوست داری یاد بگیری؟',
            img: 'robot.jpg',
            boxProps: [
                {
                city:'طراحی وب',
                img: require('../style/main/web design.png')
                },
                {
                city:'هوش مصنوعی',
                img: require('../style/main/ai.png')
                },
                {
                city:'بازی سازی',
                img: require('../style/main/game.png')
                },
                {
                city:'گرافیک',
                img: require('../style/main/design.png')
                },
            ]
        },
        {
            dialog: 'چرا طراحی وب یاد میگیری؟',
            img: 'robot.jpg',
            boxProps: [
                {
                city:'اصرار خانواده',
                img: require('../style/cities/kerman.png')
                },
                {
                city:'کسب مهارت',
                img: require('../style/cities/kerman.png')
                },
                {
                city:'کسب درآمد',
                img: require('../style/cities/kerman.png')
                },
                {
                city:'موارد دیگر',
                img: require('../style/cities/kerman.png')
                },
            ]
        },
        {
            dialog: 'میدونیم خیلی سخته که همیشه با انگیزه باشی ',
            img:'robot.jpg'
        },
        {
            dialog: 'ما در مایندو بهت کمک میکنیم تا همیشه فعال بمونی',
            img:'robot.jpg'
        },
        {
            dialog: 'میخوای بهتر بهت کمک کنیم تا به هدفت برسی؟',
            img:'robot.jpg'
        },
    ]

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [progValue, setProgValue] = useState(12)
    
    const [arg, setArg] = useState('')

    const nextPage = () => {
        setCurrentPage(currentPage+1)
        setProgValue(progValue+12)
    }

    const Box = () => {
        const [topping, setTopping] = useState('')
        const [prevButton, setPrevButton] = useState('0')
        const setTop = (event,item)=> {
            setTopping(item)
            document.getElementById(prevButton).style.border='1px solid grey'
            document.getElementById(event.currentTarget.id).style.border='1px solid blue'
            setPrevButton(event.currentTarget.id)
            document.getElementById('continue').style.display='block'
        }
        
        return(
            pageData[currentPage].boxProps.map((item, index) => {
                if (currentPage === 3){
                    return(
                        <button key={index} id={index} onClick={(event) => setTop(event,item.city)} className='box-comp'>
                            <img src={item.img} width='45px'/>
                            <p>{item.city}</p>
                        </button>
                    )
                } else {
                    return(
                        <button key={index} id={index} onClick={(event) => setTop(event,item.city)} className='box-comp'>
                            <img src={item.img} width='70px'/>
                            <p>{item.city}</p>
                        </button>
                    )
                }
            })
        )
    }

    const SignUpForm = () => {
        const handleSubmit = (event) => {
            event.preventDefault();
            const fields = new FormData(event.currentTarget);
    
            var state = 0
    
            if ( fields.get('password') === fields.get('passwordAgain')){
                state = state+1
            } else {
                document.getElementById('error').innerHTML='رمز ها مطابقت ندارند';
                state = state-1
            }

            if ( fields.get('password').length < 7){
                document.getElementById('error').innerHTML='رمز باید حداقل 7 حرف باشد'
                state = state-1
            } else {state = state+1}

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields.get('email'))){
                state = state+1
            } else {
                document.getElementById('error').innerHTML='ایمیل صحیح نیست';
                state = state-1
            }
    
            if(state === 3){
                document.getElementById('error').innerHTML=''
                // console.log({
                //     email: data.get('email'),
                //     password: data.get('password'),
                // });
            }
        };

        return (
            <div className="signup">
                <BoxComp component="form" onSubmit={handleSubmit} noValidate sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                    <TextField name='email' InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="ایمیل" variant="outlined" />
                    <TextField name="password" margin="normal" InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="رمز" variant="outlined" type='password' autoComplete="current-password"/>
                    <TextField name="passwordAgain" margin="normal" InputLabelProps={{style:{fontWeight:500,fontFamily:'yekan'}}} size='small' label="تکرار رمز" variant="outlined" type='password' autoComplete="current-password"/>
                    <p id="error"></p>
                    <Button primary>ثبت نام</Button>
                </BoxComp>
                <p>-------------   یا   -------------</p>
                <div><Button secondary>ورود با گوگل</Button></div>
            </div>
        )
    }

    const toUpRight = (()=> {
        gsap.to('.showcase', { x: -300 , scale: .8, y:-30 });
    })

    const toDownLeft = (()=> {
        gsap.to('.showcase', { x:-1, scale: 1 , y:20});
    })

    const Rest = () => {
        if (currentPage === 2) {
            toUpRight()
            document.getElementById('continue').style.display='none'
            setArg('city')
            return <div dir='rtl' className='boxes'><Box/></div>    
        } else if( currentPage === 3) {
            document.getElementById('continue').style.display='none'
            setArg('course')
            return <div dir='rtl' className='boxes'><Box/></div>
        } else if( currentPage === 4) {
            document.getElementById('continue').style.display='none'
            setArg('why')
            return <div dir='rtl' className='boxes'><Box/></div>
        } else if ( currentPage === 5){
            toDownLeft()
        } else if ( currentPage === 7 ){
            toUpRight()
            document.getElementById('continue').style.display='none'
            return <SignUpForm/>
        }
    }

    return(
        <div className='pre-signup'>
            <div className='pre-header'>
                <Link to='/Educational-Site/'><TbArrowLeft className='icon back'/></Link>
                <progress value={progValue} max={100} className='progress-bar'/>
            <div/>
            </div>
            <div id='showcase' className='showcase'>
                <div className='dialog'><p id='paragraph'>{pageData[currentPage].dialog}</p></div>
                <img src={require(`../style/${pageData[currentPage].img}`)} className='robot'/>
            </div>
            <Rest/>
            <div className='padding' id='continue' onClick={nextPage}><Button primary>ادامه</Button></div>
        </div>
    )
}

export default PreSignup