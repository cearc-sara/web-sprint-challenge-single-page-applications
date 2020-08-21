import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Link to={'/PizzaForm'}>
            <h2>Click here to order</h2>
            </Link>
        </div>
    )
}

export default HomePage