import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const [name, setName] = useState("");
    const [category , setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [question , setQuestion] = useState(5);
    const navigate = useNavigate()



    const handleStart = (e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify({
            name, category, difficulty, question
        }));

        navigate("/quiz")
    }
   

    return (
        <>
        <div>
            <h1>Quiz App</h1>
            <input type=" text" placeholder="Enter your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option>Select Category</option>
                <option value="g">General Knowledge</option>
                <option value="21">Sports</option>
                <option value="11">Film & Entertainment</option>
                <option value="23">History</option>
            </select>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">hard</option>
            </select>
            <input type="number" value={question} placeholder="Enter the number of question" onChange={(e)=> setQuestion(e.target.value)} min={1} max={50} />
            <Button onClick={handleStart}>Start Quiz</Button>
        </div>
        </>
    )
}
export default Home;