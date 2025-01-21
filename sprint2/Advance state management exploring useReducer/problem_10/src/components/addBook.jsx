import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack,Input, Center , Button} from '@chakra-ui/react'

const AddBook = () => {
    const [book, setBook] = useState({ title: '', author: '', genre: '', status: 'unread' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure the book object contains all necessary properties
        if (book.title && book.author && book.genre) {
            dispatch({
                type: 'ADD_BOOK',
                payload: { ...book, id: Date.now() }, // Generate a unique ID
            });

            // Clear the form
            setBook({ title: '', author: '', genre: '', status: 'unread' });
        } else {
            alert("All fields are required!");
        }
    };

    return (
        <Center>
        <form onSubmit={handleSubmit}>
            <Stack w="700px">
            <Input
                name="title"
                placeholder="Title"
                value={book.title}
                onChange={handleChange}
                
                focusBorderColor='pink.400'
                required
            />
            <Input
                name="author"
                placeholder="Author"
                value={book.author}
                onChange={handleChange}
                focusBorderColor='pink.400'
                required
            />
            <Input
                name="genre"
                placeholder="Genre"
                value={book.genre}
                onChange={handleChange}
                focusBorderColor='pink.400'
                required
            />
            <Button colorScheme='blue' type="submit">Add Book</Button>
            </Stack>
        </form>
        </Center>
    );
};

export default AddBook;
