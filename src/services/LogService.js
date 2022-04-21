export const logtype = {
    Info:1,
    Debug:2,
    Error:3
}

export const log = (text,type) => {
    if(type==1)
    {
        console.info(text);
    }
    if(type==2)
    {
        // console.log(text);
    }
    if(type==3)
    {
        console.error(text);
    }
}