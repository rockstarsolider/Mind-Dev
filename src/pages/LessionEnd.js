import image from '../style/complete.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import './LearningRoad.css'

function LessionEnd() {
    return(
        <div className='lession-end'>
            <img src={image}/>
            <h2>Lession
                Complete
            </h2>
            <Link to='/Educational-Site/learning-road'><Button primary>ادامه</Button></Link>
            <Link to='/Educational-Site/coursepage'><Button secondary>انجام دوباره درس</Button></Link>
        </div>
    )
}

export default LessionEnd