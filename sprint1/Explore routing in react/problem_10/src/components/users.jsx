import { Link } from 'react-router-dom'

export const Users = ()=>{
    const users = [
        {id:1, name:"Alice"},
        {id:2, name:"Bob"},
        {id:3, name:"Charlie"},
    ]

    return(
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.map((ele)=>(
                        <li key={ele.id}>
                            <Link to="/Users/${ele.id}">{ele.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}