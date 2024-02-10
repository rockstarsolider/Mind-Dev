import Header from '../components/Header';
import Footer from '../components/Footer';
import pic1 from '../style/stay-motivated 1.png';
import pic2 from '../style/imagenum1.png';
import pic3 from '../style/learn-at-your-level 1 (1).png';
import pic4 from '../style/../style/stay-motivated 1.png';
import Button from '../components/Button';

function CourseIntro() {
    var link = document.location.href.split('/');
    link = link[link.length - 1];

    const Course = () => {
        if (link === 'ai') { return 'هوش مصنوعی'; } else
        if (link === 'graphic') { return 'گرافیک'; } else
        if (link === 'game') { return 'بازی سازی'; } else
        if (link === 'web') { return 'برنامه نویسی وب'; }
    };

    const Image = () => {
        if (link === 'ai') { return <img className='picture' src={require('../style/main/ai.png')}/> } else
        if (link === 'graphic') { return <img className='picture' src={require('../style/main/design.png')}/> } else
        if (link === 'game') { return <img className='picture' src={require('../style/main/game.png')}/> } else
        if (link === 'web') { return <img className='picture' src={require('../style/main/web design.png')}/> }
    }

    const Section = () => {
        return (
            <div className='intro first-intro'>
                <Image/>
                <div className='width'>
                    <h2> بهترین روش یادگیری <span className='color-blue'> <Course /> </span></h2>
                    <br />
                    <Button primary>شروع کنید</Button>
                </div>
            </div>
        );
    };

    const Courses = ({p, head}) => {
        return(
            <div className='flex-c'>
                <div className='sec'>
                    <h4 className='color-blue'>{head}</h4>
                    <p>{p}</p>
                </div>
                <div className='sec index'>
                    <h4 className='color-blue'>{head}</h4>
                    <p>{p}</p>
                </div>
                <div className='sec'>
                    <h4 className='color-blue'>{head}</h4>
                    <p>{p}</p>
                </div>
                <div className='img-con'><img className='special-img' alt='' src={require('../style/course-road/road map.jpg')}/></div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <Section/>
            <Courses head='آشنایی با HTML و CSS' p='زمان کمی در روز را صرف یاد گرفتن کنید اما هر روز یاد بگیرید. این شیوه صحیح یاد گرفتن است' classn='intro' />
            {/* <Courses head='یادگیری Figma' p='با برنامه ریزی خوب قطعا سرعت یادگیریتان چند برابر بشتر میشود' classn='intro index' />
            <Courses head='یادگیری گیت . گیتهاب' p='قطعا هر کسی برای رسیدت به هدف باید انگیزه ای داشته باشد که ما آنرا هم در نظر گرفته ایم'  classn='intro' /> */}
            <Footer />
        </>
    );
}

export default CourseIntro;