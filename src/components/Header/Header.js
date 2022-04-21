import React,{useState} from 'react';
import classes from './Header.module.css';
import Modal from '@material-ui/core/Modal';
import { setModal } from '../../store/actions';
import {useSelector,useDispatch} from 'react-redux';
import LoginPage from '../LoginPage/LoginPage';
import LogoutPage from '../LogoutPage/LogoutPage';
 
const Header = () => {

    const Dispatch = useDispatch();
    const name = useSelector(state=>state.name);
    const image = useSelector(state=>state.userimage);
    const modal = useSelector(state=>state["modal"]);
    const isauth = useSelector(state=>state.isLogin);
    const [modaltype,setModalType] = useState(null); 


    const handleClose = () => {
        setModalType(null);
        Dispatch(setModal(false));
    }

    const handleLogin = () => {
        setModalType("login");
        Dispatch(setModal(true));
    }

    const handleLogout = () => {
        setModalType("logout");
        Dispatch(setModal(true));
    }

    let display = null;

    if(isauth)
    {
        display = (
            <div className={classes.headercontent+" mb-1 mb-md-2"}>
                <div>
                    <img className={classes.image} src={image} title={name} /> <div className={classes.name+" d-none d-sm-inline"}>{name}</div>
                </div>
                <div className={classes.loginout+' mx-3 mb-xs-1 mb-md-1'} onClick={handleLogout}>
                    Logout
                </div>
            </div>
        )
    }
    else
    {
        display = (
            <div className={classes.headercontent+" mb-1 mb-md-2"}>
                <div onClick={handleLogin}>
                    Login
                </div>
                <div className={classes.loginout+' mx-3 mb-xs-1 mb-md-1'} onClick={handleLogin}>
                    SignIn
                </div>
            </div>
        )
    }

    let displayModal = null;

    if(modal&&modaltype)
    {
        if(modaltype=="login")
        {
            displayModal = (
                <LoginPage close={handleClose} />
            )
        }
        else if(modaltype=="logout")
        {
            displayModal=(
                <LogoutPage close={handleClose} />
            )
        }
    }

    return(
        <div className={classes.Header}>
            <Modal
                open={modal}
                onClose={handleClose}
            >
                {displayModal}
            </Modal>
            <div className={classes.title+" ms-2 mb-1"}>
                AKS Twitter
            </div>
            {display}
        </div>
    )
}

export default Header;