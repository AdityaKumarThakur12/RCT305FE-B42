import { useState } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'



const Home = ()=>{
    const [name, setName] = useState("");
    const [category , setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [questions , setQuestions] = useState(5);
    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure()



    const handleStart = (e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify({
            name, category, difficulty, questions
        }));

        navigate("/quiz")
    }
   

    return (
        <div style={{backgroundColor:"black"}}>
        <div style={{display:"flex", border:"1px solid gray",padding:"15px", backgroundColor:"whiteSmoke", borderRadius:"20px",margin:"auto",marginTop:"80px", width:"45%", height:"500px", flexDirection:"column",  }}>
            <h1 style={{fontSize:"28px", fontWeight:"500", textAlign:"center", marginBottom:"14px"}}>Quiz App</h1>
            <FormLabel textAlign="left">Name</FormLabel>
            <Input type=" text" backgroundColor="whiteSmoke" required placeholder="Enter your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <FormLabel textAlign="left" marginTop="20px">Category</FormLabel>
            <Select backgroundColor="whiteSmoke" value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option>Select Category</option>
                <option value="g">General Knowledge</option>
                <option value="21">Sports</option>
                <option value="11">Film & Entertainment</option>
                <option value="23">History</option>
            </Select>
            <FormLabel marginTop="20px" textAlign="left">Difficulty</FormLabel>
            <Select backgroundColor="whiteSmoke" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">hard</option>
            </Select>
            <FormLabel marginTop="20px" textAlign="left">Questions</FormLabel>
            <Input type="number" backgroundColor="whiteSmoke" value={questions} placeholder="Enter the number of question" onChange={(e)=> setQuestions(e.target.value)} min={1} max={50} />
            <Button marginTop="20px" marginBottom="20px" padding="10px" colorScheme="teal" width="100%" onClick={onOpen}>Start Quiz</Button>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to our Quiz App</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="green.700" fontSize="18px">
            we are staring you quiz, Are You ready?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handleStart}>Start Quiz</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}
export default Home;