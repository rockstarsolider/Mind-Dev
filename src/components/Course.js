import './Course.css'
import Button from './Button'
import { useState, useEffect } from 'react'
import {TbArrowLeft} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player'

function Course({data}){
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)
    if (newCount<count){
        setNewCount(count)
    }

    const dataLen = data.length

    const Header = ()=>{
        const Nav = ()=> {
            //const [lengths, setLengths] = useState([])
            const lengths = []
            data.map(function (item, index){
                var length = 0
                var nextItem = item
                while (true){
                    length++
                    if('next' in nextItem){
                        nextItem = nextItem.next
                    } else {
                        //setLengths([...lengths,length])
                        lengths.push(length)
                        break
                    }
                }
            })
            return(
                lengths.map((len,index)=> {
                    if (index-1 < newCount){
                        return <div key={index} style={{width : `calc(${len}* 100%)`}} id={index+10} onClick={() => setCount(newCount-index)} className='prog-active'/>
                    } else {
                        return <div key={index} style={{width : `calc(${len}* 100%)`}} className='prog'/>
                    }
                })
            )
        }
        return(
            <div className='heading'>
                <Link to='/Educational-Site/learning-road'><TbArrowLeft className='icon back'/></Link>
                <div className='progress'>
                    <Nav/>
                </div>
                <div/>
            </div>
        )
    }

    const handle = ()=>{
        if (count === dataLen-1){
            window.location.replace('/Educational-Site/lession-end')
        } else {
            setCount(count+1)
        }
    }
    
    const info = data[count]

    const VideoValid = () => {
        if ('img' in info){
            return <img src={require(`../style/${info.img}`)} />
        }
    }

    const Introduction = ({h2,p}) => {
        return(
            <div id='introduction' className="introduction">
                <VideoValid/>
                <div className="explain">
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    <div onClick={handle}><Button secondary>ادامه</Button></div>
                </div>
            </div>
        )
    }

    const Ending = ({h2,p}) => {
        return(
            <div id='introduction' className="introduction">
                <VideoValid/>
                <div className="explain">
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    <Link to='/Educational-Site/lession-end'><Button secondary>پایان درس</Button></Link>
                </div>
            </div>
        )
    }

    const Video = ({video}) => {
        return(
        <div className='video-player'>
            <ReactPlayer width='80%' url={require(`../style/${video}`)} controls/>
            <div onClick={handle}><Button secondary>ادامه</Button></div>
        </div>
        )
    }

    const Audio = ({audio}) => {
        return(
        <div className='audio-player'>
            <ReactAudioPlayer src={require(`../style/${audio}`)} controls/>
            <div onClick={handle}><Button secondary>ادامه</Button></div>
        </div>
        )
    }

    const Start = ({h2,p}) => {
        return(
            <div id='introduction' className="start">
                <VideoValid/>
                <div className="explain2">
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    <div onClick={handle}><Button secondary>شروع درس</Button></div>
                </div>
            </div>
        )
    }

    const TwoAnswer = (props) => {
        const [topping, setTopping] = useState(0)

        const RadioButtons = () => {
            const onOptionChange = e => {
                setTopping(e.target.value)
                document.getElementById('123').style.display='block'
            }
            
            return (
                <div className="radio-buttons2">
                    <div id='1' className='aligning'><input type="radio" name="topping" className='input' value={props.wrong} id={props.wrong} checked={topping === props.wrong} onChange={onOptionChange}/>
                    <label htmlFor={props.wrong}>{props.wrong}</label></div>

                    <div id='2' className='aligning'><input type="radio" name="topping" className='input' value={props.ans} id={props.ans} checked={topping === props.ans} onChange={onOptionChange} />
                    <label htmlFor={props.ans}>{props.ans}</label></div>
                </div>
            )
        }

        return(
            <div className='two-answer'>
                <p>{props.p}</p>
                <RadioButtons/>
                <div className='btn2'>
                    <div id='123' style={{display:'none'}} onClick={handle}><Button secondary>ادامه</Button></div>
                </div>
            </div>
        )
    }

    const FourAnswer = (props)=> {
        const [topping, setTopping] = useState(0)

        const RadioButtons = () => {
            const onOptionChange = e => {
                setTopping(e.target.value)
                document.getElementById('123').style.display='block'
            }
            
            return (
                <div className="radio-buttons">
                    <div id='1' className='aligning'><input type="radio" name="topping" className='input' value={props.wrong1} id={props.wrong1} checked={topping === props.wrong1} onChange={onOptionChange}/>
                    <label htmlFor={props.wrong1}>{props.wrong1}</label></div>

                    <div id='2' className='aligning'><input type="radio" name="topping" className='input' value={props.wrong2} id={props.wrong2} checked={topping === props.wrong2} onChange={onOptionChange} />
                    <label htmlFor={props.wrong2}>{props.wrong2}</label></div>

                    <div id='3' className='aligning'><input type="radio" name="topping" className='input' value={props.ans} id={props.ans} checked={topping === props.ans} onChange={onOptionChange} />
                    <label htmlFor={props.ans}>{props.ans}</label></div>
                
                    <div id='4' className='aligning'><input type="radio" name="topping" className='input' value={props.wrong3} id={props.wrong3} checked={topping === props.wrong3} onChange={onOptionChange} />
                    <label htmlFor={props.wrong3}>{props.wrong3}</label></div>
                </div>
            )
        }

        const handleClick = ()=>{
            if (topping === info.ans){
                document.getElementById('1').className='aligning aligning-active';
                document.getElementById('2').className='aligning aligning-active';
                document.getElementById('3').className='aligning aligning-active';
                document.getElementById('4').className='aligning aligning-active';
                setTimeout(() => { handle() }, 1000);
            } else {
                document.getElementById('1').className='aligning aligning-de';
                document.getElementById('2').className='aligning aligning-de';
                document.getElementById('3').className='aligning aligning-de';
                document.getElementById('4').className='aligning aligning-de';
            }
        }

        const [showState, setShowState] = useState(false)
        const setShowStat = () => {setShowState(!showState)}

        if (showState == false){
            return(
                <div className='four-answer'>
                    <p>{props.p}</p>
                    <img src={require (`../style/${props.img}`)}/>
                    <div className='question-box' id='question-box'>
                        <p>{props.sub}</p>
                        <RadioButtons/>
                        <div className='btn2'>
                            <div onClick={setShowStat}><Button secondary>نمایش جواب</Button></div>
                            <div id='123' style={{display:'none'}} onClick={handleClick}><Button primary>ثبت جواب</Button></div>
                        </div>
                    </div>
                </div>
            )
        } else if (showState == true) {
            return(
                <div className='four-answer'>
                    <p>{props.p}</p>
                    <img src={require (`../style/${props.img}`)}/>
                    <div className='question-box' id='question-box'>
                        <p>{props.solution}</p>
                        <div onClick={setShowStat}><Button secondary>بازگشت به سوال</Button></div>
                    </div>
                </div>
            )
        }
    }

    var nex = info
    var pagesList = []

    while (true){
        pagesList.push(nex)
        if('next' in nex){
            nex = nex.next
        }else{break}
    }
    const Objects = () => {
        return pagesList.map((array,index)=> {
            if (array.type === 'intro'){
                return <Introduction key={index} h2={array.h2} p={array.p}/>
            } else if (array.type === 'ending'){
                return <Ending key={index} h2={array.h2} p={array.p}/>
            } else if (array.type === 'four-answer'){
                return <FourAnswer {...array}/>
            } else if (array.type === 'start'){
                return <Start h2={array.h2} p={array.p}/>
            } else if (array.type === 'video'){
                return <Video video={array.video}/>
            } else if (array.type === 'audio'){
                return <Audio audio={array.audio}/>
            }  else if (array.type === 'two-answer'){
                return <TwoAnswer {...array}/>
            } 
        })
    }

    return(
        <>
        <Header length={pagesList.length}/>
        <Objects/>
        </>
    )
}

export default Course