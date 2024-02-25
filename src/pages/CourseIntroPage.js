import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function CourseIntro() {
    const data = [
        {
            title: 'سفر به دنیای جذاب هوش مصنوعی',
            text:'در سال های اخیر پیشرفت های جشمگیری در زمینه هوش مصنوعی اتفاق افتاده است و این تکنولوژی جذاب روی تمامی جنبه های زندگی امرز ما تاثیر گذار بوده و در آبنده این تاثیرات بیشتر خواهد شد. الان بهترین فرصت برای رمز گشایی از این تکنولژی جذاب و یادگیری آن است',
            image: require('../style/main/ai.png'),
            road: [
                {
                    title:'مقدمه ای بر هوش مصنوعی',
                    text:'پا به دنیای جذاب هوش مصنوعی بگذارید، اصول اولیه و کاربردهای آن در زندگی واقعی را درک کنید',
                    image: require('../style/course-road/ai1.png')
                },
                {
                    title:'زبان پایتون',
                    text:'پر استفاده ترین و معروف ترین زبان برنامه نویسی در حوزه هوش مصنوعی یعنی پایتون را یاد بگیرید',
                    image: require('../style/course-road/ai2.png')
                },
                {
                    title:'یادگیری ماشین با برنامه نویسی بلاکی',
                    text:'با کشیدن و رها کردن بلوک‌های کد، راهی سرگرم‌کننده و بصری برای یادگیری مفاهیم کلیدی هوش مصنوعی و یادگیری ماشین را تجربه کنید',
                    image: require('../style/course-road/ai3.png')
                },
                {
                    title:'مقدمه ای بر یادگیری ماشین با پایتون',
                    text:'وارد دنیای یادگیری ماشین شوید.از کتابخانه قدرتمند scikit-learn برای ساخت مدل های یادگیری ماشین با استفاده از مهم ترین الگوریتم های این حوزه بپردازید',
                    image: require('../style/course-road/ai4.png')
                },
                {
                    title:'یادگیری pandas',
                    text:'pandas یک ابزار ضروری برای سازماندهی و دستکاری مجموعه داده‌های هوش مصنوعی، در مدیریت داده‌ها استاد شوید',
                    image: require('../style/course-road/ai5.png')
                },
                {
                    title:'ادامه یادگیری ماشین با پایتون (متوسط)',
                    text:'با تکنیک‌های پیشرفته  scikit-learn مسائل پیچیده را حل کنید و مهارت‌های یادگیری ماشین خود را ارتقا دهید',
                    image: require('../style/course-road/ai4.png')
                },
                {
                    title:'مصور سازی داده ها با seaborn',
                    text:'با seaborn، داده‌ها را به صورت جذاب و در قلب نمودار های متنوع مصور کنید',
                    image: require('../style/course-road/ai7.png')
                },
                {
                    title:'مقدمه ای بر یادگیری عمیق',
                    text:'وارد دنیای پیشرفته هوش مصنوعی یعنی  یادگیری عمیق شوید، جایی که ماشین‌ها از الگوهای مشابه مغز انسان برای یادگیری استفاده میکنند',
                    image: require('../style/course-road/ai8.png')
                },
            ]
        },
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
    if (link === 'graphic') { info = data[1] } else
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
        let align = 1
        return(
            <div className='flex-c'>
                {info.road.map((sec, index) => {
                    if (align === 0){
                        align = 1
                        return(
                            <div className='sec-box2' style={{left:'6rem'}}>
                                <div className='img-container' style={{left:'5rem'}}><img width='70%' src={sec.image}/></div>
                                <div className='line-rot2'/>
                                <div className='sec'>
                                    <h4 className='color-blue'>{sec.title}</h4>
                                    <p>{sec.text}</p>
                                </div>
                                {/* <div className='line-c'/> */}
                            </div>
                        )
                    } else if (align === 1){
                        align = 0
                        return (
                            <div className='sec-box' style={{right:'6rem'}}>
                                <div className='sec'>
                                    <h4 className='color-blue'>{sec.title}</h4>
                                    <p>{sec.text}</p>
                                </div>
                                <div className='line-rot'/>
                                <div className='img-container' style={{right:'5rem'}}><img width='70%' src={sec.image}/></div>
                                {/* <div className='line-c'/> */}
                            </div>
                        )
                    }
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