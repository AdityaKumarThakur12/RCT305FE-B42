import {useParams} from 'react-router-dom'

export const UserProfile = ()=>{
    const {userId} = useParams();
    const userNames = {
        1: "Alice",
        2: "Bob",
        3: "Charlie"
    }
    const userName = userNames[userId]
    return(
        <h1>User profile for Id : {userName}</h1>
    )
}