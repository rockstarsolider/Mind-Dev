import "./Email.css"
import Button from '../components/Button';
import rocket from '../style/Screenshot (23).png'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Email(){
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        var state = 0

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.get('email'))){
            state = state+1
        } else {
            document.getElementById('error').innerHTML='ایمیل صحیح نیست';
            state = state-1
        }

        if (data.get('password').length === 0){
            document.getElementById('error').innerHTML='گذرواژه خود را وارد کنید'
            state = state-1
        } else {state = state+1}

        if (data.get('email').length === 0){
            document.getElementById('error').innerHTML='ایمیل خود را وارد کنید'
            state = state-1
        } else {state = state+1}

        if(state === 3){
            navigate('/admin')
            // console.log({
            //     email: data.get('email'),
            //     password: data.get('password'),
            // });
        }
    };

    return(
        <div className="email-page" dir="rtl">
            <img className="rocket" alt="" src={rocket}/>
            <p className="Login-1">ورود</p>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                <TextField name="email" required margin="normal" autoComplete="email" variant="outlined" id="email1" label=" ایمیل" size="small"></TextField>
                <TextField name="password" required margin="normal" autoComplete="current-password" variant="outlined"  id="password1" type="password" label=" گذرواژه" size="small"></TextField>
                <p id="error"></p>
                <Button secondary>ورود</Button>
            </Box>
        </div>
    )
}
export default Email;