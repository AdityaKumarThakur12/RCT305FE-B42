import { useState } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



const Home = ()=>{
    const [name, setName] = useState("");
    const [category , setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [questions , setQuestions] = useState(5);
    const navigate = useNavigate()



    const handleStart = (e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify({
            name, category, difficulty, questions
        }));

        navigate("/quiz")
    }
   

    return (
        <div style={{backgroundColor:"black"}}>
        <div style={{display:"flex", border:"1px solid gray",padding:"15px", backgroundColor:"white", borderRadius:"40px",margin:"auto",marginTop:"80px", width:"45%", height:"500px", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
            <h1 style={{fontSize:"28px", fontWeight:"500"}}>Quiz App</h1>
            <Input type=" text" placeholder="Enter your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <Select backgroundColor="white" value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option>Select Category</option>
                <option value="g">General Knowledge</option>
                <option value="21">Sports</option>
                <option value="11">Film & Entertainment</option>
                <option value="23">History</option>
            </Select>
            <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">hard</option>
            </Select>
            <Input type="number" value={questions} placeholder="Enter the number of question" onChange={(e)=> setQuestions(e.target.value)} min={1} max={50} />
            <Button colorScheme="teal" onClick={handleStart}>Start Quiz</Button>
        </div>
        </div>
    )
}
export default Home;