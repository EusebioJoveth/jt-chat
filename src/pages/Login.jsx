import {React, useState} from 'react'
import add from "../img/addAvatar.png";
import {useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
function Login() {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmite = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
navigate('/')
    }catch(err) {

    }
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>JovethTecnologia</span>
            <span className='title'>Registo</span>
            <form onSubmit={handleSubmite}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Palavra pass'/>
                <button>Entrar</button>
                {err && <span>Algo deu errado</span>}

            </form>
            <p>Ainda não tem conta? <Link to="/register">Regista-se</Link></p>
        </div>
    </div>
  )
}

export default Login