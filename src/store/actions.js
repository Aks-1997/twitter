export const SET_MODAL = "Set_Modal";

export function setModal(istrue)
{
    // console.log("action token : ",token," name : ",name);
    return{
        type: SET_MODAL,
        istrue : istrue
    }
}