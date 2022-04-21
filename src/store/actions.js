export const SET_MODAL = "Set_Modal";
export const SET_LOGIN = "Set_Login";
export const Set_LOGOUT = "Set_Logout";

export function setModal(istrue)
{
    return (dispatch) => {
        dispatch({
            type: SET_MODAL,
            istrue : istrue
        }
    )}
}


export function onLogin(isLogin,name,email,accesstoken,userimage)
{
    // console.log("action token : ",token," name : ",name);
    return (dispatch)=>{
        dispatch({
            type: SET_LOGIN,
            isLogin : isLogin,
            name : name,
            email : email,
            accesstoken : accesstoken,
            userimage : userimage
        })
    }
}

export function onLogout()
{
    return (dispatch)=>{
        dispatch({
            type: Set_LOGOUT
        })
    }
}