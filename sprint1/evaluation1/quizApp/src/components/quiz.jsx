import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@chakra-ui/react";



const Quiz = ()=>{

    const [quest, setQuest] = useState([]);
    const [currQuesIndex, setCurrQuesIndex] = useState(0);
    const [userAns, setUSerAns] = useState(null);
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
        (selectedAnswer) => {
            const correctAnswer = quest[currQuesIndex].correct_Answer;
            if(selectedAnswer===correctAnswer){
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

    const question = quest[currQuesIndex] ;
    // const answers = [...question.correctAnswer, question.correctAnswer];
    answers.sort(()=> Math.random() - 0.5)
    




    return(
        <>
            <div>
                <h2>{question.question}</h2>
                {answers.map((answer,i)=>(
                    <Button key={i} onClick={()=>handleAnswer(answer)}>{answer}</Button>
                ))}

            </div>
        </>
    )
}
export default Quiz;