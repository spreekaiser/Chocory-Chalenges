import React from 'react';
import './Session.css';

import FoodOrder from '../FoodOrder/FoodOrder';

export default function Session() {
    return (
        <main className='session'>
            <h1 className='session__title'>Place your order</h1>
            {/* Here Add the component for the Session */}
            <FoodOrder />
        </main>
    );
}
