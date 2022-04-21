import React,{useEffect,useState} from 'react';
import classes from './ListPost.module.css';
import {useSelector} from 'react-redux';
import TimeAgo from 'react-timeago';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from '@material-ui/core/Modal';
import LoginPage from '../LoginPage/LoginPage';
import {likePost} from '../../services/PostService';

const ListPost = (props) => {

    const isauth = useSelector(state=>state.isLogin);
    const [modal,setModal] = useState(false);
    const [likes,setLikes] = useState(props?.info?.like);
    const [liked,setLiked] = useState(false);

    const handleLike = async () => {
        await likePost(props.info,likes+1);
        setLikes((likes)=>likes+1);
        setLiked(true);
    }

    const handleLogin = () => {
        setModal(true);
    }

    const handleClose = () => {
        setModal(false);
    }

    const handleunLike = async () => {
        await likePost(props.info,likes-1);
        setLikes((likes)=>likes-1);
        setLiked(false)
    }

    let displaylike = null;

    if(isauth)
    {
        if(liked)
        {
            displaylike = (
                <div className={classes.like+" mt-1 p-1"} onClick={handleunLike}>
                    <FavoriteIcon className={classes.liked} />  {likes}
                </div>
            )
        }
        else
        {
            displaylike = (
                <div className={classes.like+" mt-1 p-1"} onClick={handleLike}>
                    <FavoriteBorderIcon className={classes.likeicon} /> {likes}
                </div>
            )
        }
    }
    else
    {
        displaylike = (
            <div className={classes.like+" mt-1 p-1"} onClick={handleLogin}>
                <FavoriteBorderIcon className={classes.likeicon} /> {likes}
            </div>
        )
    }

    let displayModal = null;

    if(modal)
    {
            displayModal = (
                <LoginPage close={handleClose} />
            )
    }

    return(
        <div>
            <Modal
                open={modal}
                onClose={handleClose}
            >
                {displayModal}
            </Modal>
            <div className={classes.postwrapper+" mt-2 mb-3"} >
                <div className={classes.post+" p-2"}>
                    <div className={classes.postinfo}>
                        <div className={classes.name}>
                            <img src={props.info?.image} className={classes.postimage} title={props?.info?.author} />    {props.info.author}  ~
                        </div>
                        <div className={classes.time+" ms-1"}>
                            <TimeAgo date={props.info.datetime} />
                        </div>
                    </div>
                    <div className={classes.body+" mt-2 p-1"}>
                        {props.info.content}
                    </div>
                    {displaylike}
                </div>
            </div>
            <hr className='mb-0' />
        </div>
    )
} 

export default ListPost;