import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
    const [counter, setCounter] = useState(3);
    console.log('counter: ', counter);

    function handleButton() {
        console.log('counter: ', counter);
        // counter++;

        setCounter(counter + 1);
    }
    return (
        <button onClick={handleButton}>
            You have clicked this button {counter} times
        </button>
    );
}
