import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";



const Quiz = ()=>{

    const [quest, setQuest] = useState([]);
    const [currQuesIndex, setCurrQuesIndex] = useState(0);
    const [userAns, setUSerAns] = useState(null);
    const [score, setScore] = useState(0);
    const [quizEnd , setQuizEnd] = useState(false);

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));

        if(!user){
            Navigate("/");
            return;
        }

        axios.get(`https://opentdb.com/api_config.php`,{
            params: {
                amount: user.question,
                category: user.category,
                difficulty: user.difficulty,
                type: "multiple"
            }
        })
        .then((res)=>{
            setQuest(res.data.results)
        })
        .catch((err)=>{
            console.log("Error loading to questions", err)
        })
    },[])
    console.log(quest)




    return(
        <>
            <h1>Welcome to the Quiz Section</h1>
        </>
    )
}
export default Quiz;