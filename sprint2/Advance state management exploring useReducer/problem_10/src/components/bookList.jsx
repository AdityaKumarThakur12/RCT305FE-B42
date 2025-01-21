import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
    // Get books and filters from the Redux store
    const books = useSelector(state => state.books || []); // Fallback to an empty array
    const filters = useSelector(state => state.filters || {});

    // Filter books based on criteria
    const filteredBooks = books.filter(book => {
        const matchesAuthor = filters.author ? book.author?.includes(filters.author) : true;
        const matchesGenre = filters.genre ? book.genre === filters.genre : true;
        const matchesStatus = filters.status ? book.status === filters.status : true;
        return matchesAuthor && matchesGenre && matchesStatus;
    });

    // Render the list
    return (
        <div>
            <h2>Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>No books match the criteria.</p>
            ) : (
                <ul>
                    {filteredBooks.map(book => (
                        <li key={book.id}>
                            <strong>{book.title}</strong> by {book.author}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookList;
