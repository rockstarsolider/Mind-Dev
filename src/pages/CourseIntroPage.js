import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function CourseIntro() {
    const data = [
        {
            title: 'سفر به دنیای جذاب گرافیک',
            text:'در این دوره، با اصول طراحی گرافیک آشنا می‌شوید و با استفاده از نرم‌افزارهای فتوشاپ، ایلوستریتور و Figma، خلاقیت خود را به کار می‌گیرید و : تصاویر جذابلوگوها و آیکون‌های خلاقانه طراحی می‌کنید. ویرایش و خلق می‌کنید. رابط‌های کاربری زیبا و کاربرپسند برای وب‌سایت‌ها می‌سازید. مهارت‌های جدیدی یاد می‌گیرید و استعداد خود را در دنیای طراحی گرافیک کشف می‌کنید.',
            image: require('../style/main/design.png'),
            road: [
                {
                    title: 'اصول طراحی گرافیک',
                    text:'با قوانین رنگ، ترکیب‌بندی، تایپوگرافی و دیگر اصول طراحی گرافیک آشنا شوید تا کارهایتان حرفه‌ای به نظر برسد',
                    image: require('../style/course-road/graphic1.jpg')
                },
                {
                    title: 'فتوشاپ مقدماتی',
                    text:'با ابزار شگفت انگیز فوتوشاپ، بوم خلاقیت‌تان را کشف کنید و با ویرایش، ارتقا و تغییر تصاویر آثار هنری جذاب خلق کنید',
                    image: require('../style/course-road/graphic2.png')
                },
                {
                    title: 'Illustrator مقدماتی',
                    text:'با ادوبی ایلوستریتور، گرافیک برداری را یاد بگیرید و لوگوها، آیکون‌ها و تصاویر جذابی را با این نگاه خاص خلق کنید',
                    image: require('../style/course-road/graphic3.png')
                },
                {
                    title: 'طراحی رابط کاربری با فیگما',
                    text:'وارد دنیای بزرگ طراحی وب شوید. با استفاده از Figma، یکی از بهترین ابزار ها، رابط‌های کاربری وب جذاب و کاربرپسند بسازید',
                    image: require('../style/course-road/graphic4.png')
                },
                {
                    title: 'فتوشاپ پیشرفته',
                    text:'مهارت‌های خود در زمینه طراحی گرافیک را با یادگیری تکنیک‌های پیشرفته برای ویرایش تصاویر، افکت‌ها و موارد دیگر گسترش دهید',
                    image: require('../style/course-road/graphic5.jpeg')
                },
            ]
        }
    ]

    var link = document.location.href.split('/');
    link = link[link.length - 1]; 

    var info = ''

    if (link === 'ai') { info = data[0]} else
    if (link === 'graphic') { info = data[0] } else
    if (link === 'game') { info = data[0] } else
    if (link === 'web') { info = data[0] }

    const Section = () => {
        return (
            <div className='intro first-intro'>
                <img className='picture' src={info.image}/>
                <div className='width'>
                    <h2 className='color-blue'>{info.title}</h2>
                    <p>{info.text}</p>
                    <br/>
                    <Link><Button primary>شروع کنید</Button></Link>
                </div>
            </div>
        );
    };

    const Courses = () => {
        return(
            <div className='flex-c'>
                {info.road.map((sec, index) => {
                    return(
                        <div className='sec-box'>
                            <div className='flex-col'>
                                <div className='img-container'><img width='50%' src={sec.image}/></div>
                                <div className='under-pic'/>
                            </div>
                            <div className='line-c'/>
                            <div className='sec'>
                                <h4 className='color-blue'>{sec.title}</h4>
                                <p>{sec.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <Header />
            <Section/>
            <Courses />
            <Footer />
        </>
    );
}

export default CourseIntro;