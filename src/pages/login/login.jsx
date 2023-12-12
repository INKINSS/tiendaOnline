import axios from 'axios';
import { API_URL } from '../../constants/env'
import { TextField } from '@mui/material';
import './login.scss'
import { setToken } from '../../helpers/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const nav = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(data)
        axios.post(`${API_URL}/public/login`, data)
        .then( resp => { setToken(resp.data.data.token)
            nav('/') } )
            .catch(err => (console.log(err)))
    }

    return (
        <div className='loginPage'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h2>iniciar sesion</h2>
                <div>
                    <TextField className='input' name='email' fullWidth id="outlined-email" label="email" variant="outlined" />
                </div>
                <div>
                    <TextField className='input' name='password' type='password' fullWidth id="outlined-password" label="contraseña" variant="outlined" />

                </div>
                <div>
                    <button className='buttonLogin' type="submit">ingresar</button>
                </div>
                <section className='support'>
                    <p>¿Has olvidado tu contraseña?</p>
                    <p>Comunicate con <strong className='admin'>Administracion</strong> </p>
                </section>
            </form>
        </div>
    )
}

export default Login
