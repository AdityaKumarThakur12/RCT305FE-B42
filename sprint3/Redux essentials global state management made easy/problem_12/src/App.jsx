// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const error = useSelector(state => state.error);

    const addItem = () => {
        dispatch({ type: 'ADD_ITEM', payload: 'Item ' + (data.length + 1) });
    };

    const addItemWithError = () => {
        dispatch({ type: 'ADD_ITEM_ERROR', error: 'Failed to add item' });
    };

    return (
        <div>
            <h1>Redux Error Handling Example</h1>
            <button onClick={addItem}>Add Item</button>
            <button onClick={addItemWithError}>Add Item with Error</button>
            <h2>Items:</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
    );
};

export default App;