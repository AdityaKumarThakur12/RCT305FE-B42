const errorMiddleWare = store => next => action => {
    if(action.error){
        console.error("Error Occurred:", action.error)
    }
    return next(action);
}
export default errorMiddleWare;