import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner className='d-block m-auto ' animation='border' variant='info'/>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;