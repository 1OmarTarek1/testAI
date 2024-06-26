import { useEffect, useState } from 'react'
import { LoginForm, SignUpForm } from '../../Components'
import BackVid from '../../Assets/Videos/144584-785095786_medium.mp4'
import './Login.css'






const Login = ({ setAuthenticated, setProfilePictureUrl }) => {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(()=>{
        let registerLink = document.querySelector(".Register");
        let loginLink    = document.querySelector(".LoginLink");
        let signUpForm   = document.querySelector(".signUpForm");
        let loginForm    = document.querySelector(".loginForm");


        // Active SignUp
        let showSignUp = () => { 
            loginForm.style.opacity  = "0"
            loginForm.style.visibility  = "hidden"
            
            signUpForm.style.visibility  = "visible"
            signUpForm.style.opacity  = "1"
        }
        registerLink.addEventListener('click', showSignUp )
        

        // Active Login
        let showLogin = () => {
            signUpForm.style.opacity  = "0"
            signUpForm.style.visibility  = "hidden"
            
            loginForm.style.visibility  = "visible"
            loginForm.style.opacity  = "1"
        }
        loginLink.addEventListener('click', showLogin )
        
        
        return () => {
            registerLink.removeEventListener('click', showSignUp )
            loginLink.removeEventListener('click', showLogin )
        }
    })


    return (
        <>
            <div className="LoginPage">
                <div className="video-background">
                    <video className='backVid' src={BackVid} autoPlay loop muted />
                </div>
                <LoginForm 
                setAuthenticated={setAuthenticated} 
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                setProfilePictureUrl={setProfilePictureUrl}
                />
                <SignUpForm 
                setAuthenticated={setAuthenticated}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                setProfilePictureUrl={setProfilePictureUrl}
                />
            </div>
        </>
    )
}

export default Login