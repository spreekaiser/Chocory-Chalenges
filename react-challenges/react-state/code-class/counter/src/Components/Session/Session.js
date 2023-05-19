import React from 'react';
import './Session.css';

import Counter from '../Counter/Counter';

export default function Session() {
    return (
        <main className='session'>
            <h1 className='session__title'>Let's Count </h1>
            {/* Here Add the component for the Session */}
            <Counter />
            <Counter />
            <Counter />
        </main>
    );
}
