import React,{useState} from 'react';
import classes from './NewPost.module.css';
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux';
import {makePost} from '../../services/PostService';

const NewPost = (props) => {

    const name = useSelector(state=>state.name);
    const email = useSelector(state=>state.email);
    const image = useSelector(state=>state.userimage);

    const [post,setPost] = useState("");

    const handlePost = (event) => {
        setPost(event.target.value);
    }

    const handleCreatePost = async () => {
        let postdata = {
            author : name,
            authormail : email,
            content : post,
            datetime : new Date(),
            like : 0,
            image : image
        }
        await makePost(postdata);
        props.close();
    }

    const handleClose = () => {
        props.close();
    }

    return (
        <div className={classes.newpost}>
            <div className={classes.cancel} onClick={handleClose}> 
                X
            </div>
            <div>
                <img className={classes.image} src="https://lh3.googleusercontent.com/a/AATXAJzrevvoalptLDxgw9S-e9JuVMsa1m6iW692FHVm=s96-c" /> Akash Sharma
            </div>
            <textarea rows={4} placeholder="What's happening?" onChange={handlePost}  className={classes.input+" ps-2 mt-2"} />
            <div className={classes.button}>
                <Button variant="contained" className={"ms-auto"} onClick={handleCreatePost}>Post</Button>
            </div>
        </div>
    )
}

export default NewPost;