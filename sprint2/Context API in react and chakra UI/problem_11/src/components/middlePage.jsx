import { BottomMainRight } from "./bottomMainRight"

export const MiddlePage = ({userName})=>{
    return (
        <div style={{backgroundColor:"grey", padding:"50px", margin:'20px'}}>
            <h1>This is middle page</h1>
            <BottomMainRight userName={userName}/>
        </div>
    )
}