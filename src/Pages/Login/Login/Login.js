import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import userimg from '../../../image/social/users-icon.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail =(event)=>{
        setEmail(event.target.value)
    };
    const handlePassword =(event)=>{
        setPassword(event.target.value)
    };
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
      auth
      );
     
      const submit = event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
      
useEffect(()=>{
    if(user){
        navigate('/') ;
        navigate(from, { replace: true });
    }
},[user]);
if(sending){
    return <Loading></Loading>;
  }
    return (
        <div className=' container '>
            <div className='mx-auto form-container px-3'>
            <div className='user-img pt-3'>
            <img  src={userimg} alt="" />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
            <div style={{height:"1px",backgroundColor:"black"}} className=' w-25'></div>
            <h3 className='mx-2 mt-2'>Login</h3>
            <div style={{height:"1px",backgroundColor:"black"}} className='w-25'></div>
        </div>
        <Form onSubmit={submit}>
            <Form.Group  controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
            </Form.Group>
            {
                error?.message  && <p>{error.message}</p>
            }
            {
                error1?.message  && <p>{error1.message}</p>
            }
            {
            loading && <Loading></Loading>
            
        }
            <Button style={{backgroundColor:"#FF5400",border:'none'}} className='w-50 mx-auto d-block mb-2' type="submit">
                Login
            </Button>
        </Form>
        <p>New to here? <Link to="/register" className="text-danger pe-auto text-decoration-none">Please Registre</Link></p>
        
        <p>Forget Password? <Link to="" className="text-danger pe-auto text-decoration-none" onClick={async () => {
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }else{
            toast('plese enter your email'); 
        }
        }}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
           <ToastContainer />
         </div>     
    </div>
    );
};

export default Login;