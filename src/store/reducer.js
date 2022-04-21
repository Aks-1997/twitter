import * as actions from './actions';

const initialState = {
    // properties
    modal : false,
    accesstoken : null,
    isLogin : false,
    name : null,
    email : null,
    userimage : null
}

const reducer = (state=initialState,action) => {
    switch(action.type)
    {
        case actions.SET_MODAL :
            state={
                ...state,
                modal:action.istrue
            }
            break;
        case actions.SET_LOGIN:
            state={
                ...state,
                isLogin:action.isLogin,
                accesstoken:action.accesstoken,
                name:action.name,
                email:action.email,
                userimage:action.userimage
            }
            break;
        case actions.Set_LOGOUT :
            state={
                ...state,
                isLogin:false,
                accesstoken:null,
                name:null,
                email:null,
                userimage:null
            }
        default : 
        break;
    }
    return state;
}

export default reducer;