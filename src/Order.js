import React from 'react';

function Order({details}) {
    if(!details) {
        return <h3>Working on fetching your order details...</h3>
    }

    return (
        <div className='order container'>
            <h2>{details.name}</h2>
            <p>{details.pizza_size}</p>
            <p>{details.special_instructions}</p>

            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                    </div>
            }
        </div>
    )
}

export default Order