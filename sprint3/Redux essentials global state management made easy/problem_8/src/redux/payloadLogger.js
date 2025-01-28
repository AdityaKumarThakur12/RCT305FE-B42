const payloadLogger = store => next => action =>{
    console.log(`Payload: ${JSON.stringify(action.payload)}`);
    return next(action);
}
export default payloadLogger;