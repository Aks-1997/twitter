import React,{useEffect,useState} from 'react';
import classes from './Home.module.css';
import {getPosts} from '../services/PostService';
import Modal from '@material-ui/core/Modal';
import { onLogin } from '../store/actions';
import {useSelector,useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import NewPost from './NewPost/NewPost';
import GridOnIcon from '@mui/icons-material/GridOn';
import ListIcon from '@mui/icons-material/List';
import {Row} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridPost from './GridPost/GridPost';
import ListPost from './ListPost/ListPost';

const useStyles = makeStyles({
    postborder: {
        borderBottom: "1px solid gainsboro !important"
    },
  });

const Home = (props) => {
      let mystyle = useStyles(props);
    const Dispatch = useDispatch();
    const isauth = useSelector(state=>state.isLogin);
    const [modal,setModal] = useState(false);
    const [modaltype,setModalType] = useState(null); 
    const [post,setPost] = useState(null);
    const [view,setView] = useState("list");

    useEffect(()=>{
        (async ()=>{
            await getPosts(res=>{
                let obj = Object.keys(res);
                obj.sort((a,b)=>{
                    let date1 = new Date(res[a].datetime);
                    let date2 = new Date(res[b].datetime);
                    return date2.getTime()-date1.getTime();
                })
                let newres = obj.map(info=>{
                    return res[info]
                })
                setPost(newres)
            });
        })()
    },[])

    const handleClose = () => {
        setModalType(null);
        setModal(false);
    }

    const handleView = () => {
        if(view=="list")
        {
            setView("grid")
        }
        else if(view=="grid")
        {
            setView("list");
        }
    }

    const handleCreatePost = () => {
        setModalType("createpost");
        setModal(true);
    }

    if(localStorage.getItem("auth"))
    {
        Dispatch(onLogin(true,localStorage.getItem("name"),localStorage.getItem("email"),localStorage.getItem("accesstoken"),localStorage.getItem("image")));
    }

    let display = null;
    if(post)
    {
        if(view=="list")
        {
            display = post?.map((info,id)=>{
                return (
                    <ListPost info={info} key={info+id} />
                )
            })
        }
        else if(view=="grid")
        {
            display = post?.map((info,id)=>{
                return (
                    <GridPost info={info} key={info+id} />
                )
            })
        }
    }

    let displayModal = null;

    if(modal)
    {
        if(modaltype=="createpost")
        {
            displayModal = (
                <NewPost close={handleClose} totalpost={post?.length||0} />
            )
        }
    }

    let displaycreatepost = null;

    if(isauth)
    {
        displaycreatepost = (<Button variant="outlined" className={classes.button} onClick={handleCreatePost}>Create Post</Button>)
    }

    return(
        <div className={classes.home+" "+(view=="grid"?mystyle.postborder:null)}>
            <Modal
                open={modal}
                onClose={handleClose}
            >
                {displayModal}
            </Modal>
            <div className={classes.createpostwrapper+" mt-2"}>
                <div className={classes.createpost}>
                    {displaycreatepost}
                    {view=="list"?(
                        <span className={classes.viewicon+" ms-auto"} onClick={handleView}>
                            <span className='d-none d-md-inline'>Switch to Grid View </span>
                            <GridOnIcon className="ms-1" />
                        </span>):(
                        <span className={classes.viewicon+" ms-auto"} onClick={handleView}>
                            <span className='d-none d-md-inline'>Switch to List View</span>
                            <ListIcon className="ms-1" />
                        </span>
                    )}
                </div>
            </div>
            {view=="list"?
            display:
            (
                <Row className={classes.gridrow+" px-5 mt-2"}>
                    {display}
                </Row>
            )}
        </div>
    )
}

export default Home;