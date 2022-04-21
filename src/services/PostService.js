import {db} from '../config';
import {uid} from 'uid';
import {set,ref, onValue,update} from 'firebase/database';
import {log,logtype} from './LogService';

export const getPosts = async (res) => {
    try{
        await onValue(ref(db,`/Post`),snapshot=>{
            const data = snapshot.val();
            log("Services->PostService->getPosts->data",logtype.Debug);
            log(data,logtype.Debug);
            log("Get Posts Successful",logtype.Info);
            res(data)
          })
    }
    catch(error)
    {
        log("Services->PostService->getPosts->Error getting Post data",logtype.Error)
        log(error,logtype.Error);
    }
   
}

export const makePost = async (post) => {
    log("Services->PostService->makePost->Post body data for creating post",logtype.Debug);
    log(post,logtype.Debug);
    try{
        let uuid = uid();
        let response = await update(ref(db,`/Post/${uuid}`),{
         ...post,
        uid:uuid
        })
        log("Services->PostService->makePost->response",logtype.Debug);
        log(response,logtype.Debug);
        log("Post Created Successful",logtype.Info);
    }
    catch(error)
    {
        log("Services->PostService->makePost->Error getting Post data",logtype.Error)
        log(error,logtype.Error);
    }
    
}

export const likePost = async (post,likes) => {
    log("Services->PostService->likePost->Post body data for creating post",logtype.Debug);
    log(post,logtype.Debug);
    log("likes : "+likes,logtype.Debug);
    try{
        let response = await update(ref(db,`/Post/${post.uid}`),{
            ...post,
            like:likes
        })
        log("Services->PostService->likePost->response",logtype.Debug);
        log(response,logtype.Debug);
        log("Post liked Successful",logtype.Info);
    }
    catch(error)
    {
        log("Services->PostService->likePost->Error getting Post data",logtype.Error)
        log(error,logtype.Error);
    }
}