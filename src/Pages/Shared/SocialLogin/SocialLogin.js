import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../../image/social/google-icon-logo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error ) {
        errorElement=
          <div>
            <p>Error: {error?.message}</p>
          </div>
      }
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      useEffect(()=>{
        if(user){
          console.log(user)
          const email = user.user.email;
          console.log(email)

          const url = 'https://ancient-dawn-90111.herokuapp.com/login';
          fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email:email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken",data.accessToken);
                navigate(from, { replace: true });
            });
    }
    },[user]);

      if (loading ) {
        return <Loading></Loading>;
      };
    
    
    
    return (
        <div className='mb-2 '>
        <div className='d-flex align-items-center'>
            <div style={{height:"1px",backgroundColor:"black"}} className=' w-50'></div>
            <p className='mx-2 mt-2'>or</p>
            <div style={{height:"1px",backgroundColor:"black"}} className='w-50'></div>
        </div>
        <div>
            { errorElement}
            <button className='btn' onClick={() => signInWithGoogle()} >
                <img style={{width:"10%",margin:"0 auto",border:"none"}} className=" " src={google} alt="" />
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;