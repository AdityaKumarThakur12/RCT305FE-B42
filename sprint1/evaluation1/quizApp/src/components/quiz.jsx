import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";



const Quiz = ()=>{

    const [quest, setQuest] = useState([]);
    const [currQuesIndex, setCurrQuesIndex] = useState(0);
    // const [userAns, setUSerAns] = useState(null);
    const [score, setScore] = useState(0);
    const [quizEnd , setQuizEnd] = useState(false);
    const navigate = useNavigate()

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));

        if(!user){
            Navigate("/");
            return;
        }

        axios.get(`https://opentdb.com/api_config.php`,{
            params: {
                amount: user.questions,
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
    },[navigate])

    const handleAnswer = ()=>{
        (answer) => {
            const correct = quest[currQuesIndex].correct_Answer;
            if(answer===correct){
                setScore(score+1)
            };

            const nextQuestionIndex = currQuesIndex + 1;
            if(nextQuestionIndex < quest.length){
                setCurrQuesIndex(nextQuestionIndex);
            }else{
                setQuizEnd(true);
            }

        }
    }

    const handleRetry = ()=>{
        localStorage.removeItem("user");
        navigate("/")
    }

    const current_question = quest[currQuesIndex] ;
    const answers = [...current_question.incorrect_answers, current_question.correct_answer];
    answers.sort(()=> Math.random() - 0.5)
    




    return(
        <>
            <div>
                <h2>{current_question.question}</h2>
                {answers.map((answer,i)=>(
                    <Button key={i} onClick={()=>handleAnswer(answer)}>{answer}</Button>
                ))}

            </div>
        </>
    )
}
export default Quiz;