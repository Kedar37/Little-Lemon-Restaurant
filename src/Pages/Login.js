import React, {useState, useEffect} from 'react'
import { auth, provider } from '../firebase'
import {signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import './SignUp.css'

function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate("/home");
      } catch (error) {
        console.error(error);
      }
    }

    const Login = async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            console.error('Google login error:', error);
          });
          navigate('/home')
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            setUser(user);
            // navigate('/home');
          } else {
            setUser(null);
            navigate('/');
          }
        });
        return () => unsubscribe();
      }, [navigate]);


    return (
            <div className='SubContainer'>
                <h2 className='signHead'>Welcome to Little Lemon!</h2>
                <div className='formContainer'>
                    <h3 className='head2'>Login</h3>
                    <form onSubmit={handleSubmit} className='signForm'>
                    <div className='field'>
                        <label htmlFor='email'>Enter Email</label>
                        <input 
                        type='email' 
                        id='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label htmlFor='pass'>Enter Password</label>
                        <input 
                        type='password' 
                        id='pass' 
                        required min={8}
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)}/>
                        <div className='forgetPass'>
                            <a href='#'>Forget Password?</a>
                        </div>
                    </div>
                    <div className='createBtn'>
                        <button type='submit' className='submitBtn'>Login</button>
                    </div>
                    </form>

                    <div className='divider'></div>

                    <div className='googleLogin'>
                        <button onClick={Login}>Login With Google</button>
                    </div>
                    <div className='Login'>
                        <p>Not registered yet? <Link to="/signup">Sign Up</Link></p>
                    </div>
                    <div className='guest'>
                        <button className='guestBtn' onClick={() => navigate('/home')}>Join as Guest</button>
                    </div>
                </div>
            </div>
    )
}

export default Login