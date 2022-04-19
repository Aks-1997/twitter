import * as actions from './actions';

const initialState = {
    // properties

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
        default : 
        break;
    }
    return state;
}

export default reducer;