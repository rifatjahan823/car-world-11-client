import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

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
        <div className='container mx-auto pb-5 form-container'>
        <h2 className='text-center  mt-2'>Please Registration</h2>
        <Form onSubmit={registar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Button className='w-50 mx-auto d-block mb-2' variant="success" type="submit">
               Register
            </Button>
        </Form>
        <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none">Please Login</Link></p>
        <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;