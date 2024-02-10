import "./LoginPage.css"
import { Link } from "react-router-dom";
import rocket from "../style/Screenshot (23).png"
import Button from '../components/Button'
import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/email')
    };

    return(
            <div className="login-page">
                <img alt="" src={rocket}/>
                <p className="Login">بهترین مکان برای یادگیری تکنولوژی های روز دنیا</p>
                <div className="buttons-login">
                    <Button primary onClick={handleClick}>Email ورود با</Button>
                    <Button secondary>  Google   ورود با  </Button>
                </div>
                <h4 className="login-c">   کاربر جدید هستید؟؟ <Link to='/signup' className="login-link"> ثبت نام کنید   </Link></h4>
            </div>  
    )
}
export default Login;
