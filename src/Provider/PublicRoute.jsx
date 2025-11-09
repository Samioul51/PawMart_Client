import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';

const PublicRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    if(loading)
        return <Loading></Loading>;
    
    if(user && user.email)
        return <Navigate to="/" replace></Navigate>;
    return children;
};

export default PublicRoute;