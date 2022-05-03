import React from 'react';
import { useAuthState, useSendEmailVerification} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user,loading]= useAuthState(auth)
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(
        auth
      );
    if(loading){
        return<Loading></Loading>
    }
if(!user){
    
    return <Navigate to="/login" state={{ from: location }} replace />;
}
if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
    return <div className='mx-auto w-50 border p-4 my-5'>
        <h3 className='text-danger'>Your Email is not veryfied!!!</h3>
        <p className='text-success'>Please verify your email</p>
        <button onClick={async () => {
          await sendEmailVerification();
          toast('Sent verification email');
        }} className='btn btn-primary'>Send Verification</button>
       <ToastContainer />
    </div>
}
     return children;
};
export default RequireAuth;