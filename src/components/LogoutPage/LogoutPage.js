import React from 'react';
import classes from './LogoutPage.module.css';
import {GoogleLogout} from 'react-google-login';
import {useDispatch} from 'react-redux'; 
import { onLogout } from '../../store/actions';
import Button from '@mui/material/Button';

const LogoutPage = (props) =>{
    const Dispatch = useDispatch();
    const onSuccess = ()=>{
        Dispatch(onLogout());
        localStorage.removeItem("auth");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("image");
        props.close();
    }

    const handleCancel = () => {
        props.close();
    }

    return (
        <div className={classes.logout}>
            <div className={classes.cancel+" mb-2"}>
                X
            </div>
            <div className={classes.head+' mx-auto'}>
                Do You want to Logout?
            </div>
            <div className={classes.flexbutton+" mt-2"}>
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_TOKEN}
                    buttonText='Logout'
                    onLogoutSuccess={onSuccess}
                ></GoogleLogout>
                <Button variant="contained" onClick={handleCancel}>Cancel</Button>
            </div>
        </div>
    );
}

export default LogoutPage;