import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import userimg from '../../../image/social/users-icon.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[confirmPassword,setConfirmPassword]=useState('')
    const[error,setError]=useState('');

   const [ createUserWithEmailAndPassword,user,loading]=useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true });

    const handleEmail =(event)=>{
      setEmail(event.target.value)
  };
  const handlePassword =(event)=>{
      setPassword(event.target.value)
  };
  const handleConfirmPassword =(event)=>{
    setConfirmPassword(event.target.value)
};
const navigate=useNavigate();

   useEffect(()=>{
    if(user){
        navigate("/")
    }
   },[user])

  if(loading){
     return<Loading></Loading> 
 }



  const registar = (event)=>{
      event.preventDefault();
     if(password!==confirmPassword){
        setError("Please Match Your Password With Confirmpassword");
        return;
    }
    if(password.length<6){
        setError("Password must be atleast 6 charecter")
    }
    createUserWithEmailAndPassword(email,password);
  }
    return (
        <div className='container'>
          <div className='mx-auto  px-3 form-container'>
          <div className='user-img pt-3'>
            <img  src={userimg} alt="" />
            </div>
            <div className='d-flex align-items-center justify-content-center'>
            <div style={{height:"1px",backgroundColor:"black"}} className=' w-25'></div>
            <h3 className='mx-2 mt-2'>Registration</h3>
            <div style={{height:"1px",backgroundColor:"black"}} className='w-25'></div>
        </div>
        <Form onSubmit={registar}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ConfirmPassword</Form.Label>
                <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="ConfirmPassword" required/>
            </Form.Group>
            <p style={{color:"red"}}>{error}</p>
            <Button style={{backgroundColor:"#FF5400",border:'none'}} className='w-50 mx-auto d-block mb-2' variant="success" type="submit">
               Register
            </Button>
        </Form>
        <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none">Please Login</Link></p>
        <SocialLogin></SocialLogin>
        </div>  
    </div>
    );
};

export default Register;