import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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
      if (loading ) {
        return <Loading></Loading>;
      };
   
        if(user ){
          navigate ('/')
        }
      
       
    
    return (
        <div className='mb-5 '>
        <div className='d-flex align-items-center'>
            <div style={{height:"1px",backgroundColor:"#2acd35"}} className=' w-50'></div>
            <p className='mx-2 mt-2'>or</p>
            <div style={{height:"1px",backgroundColor:"#2acd35"}} className='w-50'></div>
        </div>
        <div>
            { errorElement}
            <button onClick={() => signInWithGoogle()} className=' d-flex align-items-center justify-content-center mx-auto d-block btn btn-success w-75 m-3'>
                <img style={{width:"30px",}} className="me-2" src={google} alt="" />
                <span>Sign in with google</span>
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;