import React,{useState} from 'react';
import classes from './LoginPage.module.css';
import GoogleLogin from 'react-google-login';
import {onLogin} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {log,logtype} from '../../services/LogService';

const NewPost = (props) => {

    const Dispatch = useDispatch();
    const [warning,setWarning] = useState(null);


    const successresponseGoogle = (response) => {
        log("success",logtype.Info);
        log("login data : ",logtype.Debug);
        log(response,logtype.Debug);
        Dispatch(onLogin(true,response?.profileObj?.name,response?.profileObj?.email,response?.tokenObj?.access_token,response?.profileObj?.imageUrl))
        localStorage.setItem("auth",true);
        localStorage.setItem("name",response?.profileObj?.name);
        localStorage.setItem("email",response?.profileObj?.email);
        localStorage.setItem("accesstoken",response?.tokenObj?.access_token);
        localStorage.setItem("image",response?.profileObj?.imageUrl)
        props.close();
    }

    const errorresponseGoogle = (response) => {
        setWarning("Login not successful");
    }

    const handleClose = () => {
        props.close();
    }

    let displaywarning = null;
    if(warning)
    {
        displaywarning=(
            <div className={classes.warning}>
                {warning}
            </div>
        )
    }

    return (
        <div className={classes.loginpage}>
            <div className={classes.cancel+" mb-1"} onClick={handleClose}>
                    X
            </div>
            <div className={classes.loginwrap}>
                <div className={classes.login}>
                    <div className={classes.head}>
                        Login to Twitter
                    </div>
                    <GoogleLogin
                        className={classes.loginbtn+" mt-2"}
                        clientId={process.env.REACT_APP_GOOGLE_TOKEN}
                        buttonText="Login with your Gmail"
                        onSuccess={successresponseGoogle}
                        onFailure={errorresponseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />
                </div>
            </div>
        </div>
    )
}

export default NewPost;