import React from 'react';

const PizzaForm = (props) => {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onCheckboxChange = evt => {
    const {name, checked} = evt.target
    checkboxChange(name, checked)
}

const onInputChange = evt => {
    const {name, value} = evt.target
    inputChange(name, value)
}



    return (
        <div className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add an Order</h2>
                <button id='submitBtn' disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.pizza_size}</div>
                    <div>{errors.toppings}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>Order Information</h4>

                <label>Name
                    <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>

                <label>Pizza Size
                    <select
                    onChange={onInputChange}
                    value={values.pizza_size}
                    name='pizza_size'
                    >
                        <option value=''>--Select a Size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

                <label>Special Instructions
                    <input
                    value={values.special_instructions}
                    onChange={onInputChange}
                    name='special_instructions'
                    type='text'
                    />
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h4>Toppings:</h4>

                <label>Cheese
                    <input
                    type='checkbox'
                    name='cheese'
                    checked={values.toppings.cheese}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.toppings.pepperoni}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Mushroom
                    <input
                    type='checkbox'
                    name='mushroom'
                    checked={values.toppings.mushroom}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Pineapple
                    <input
                    type='checkbox'
                    name='pineapple'
                    checked={values.toppings.pineapple}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Bacon
                    <input
                    type='checkbox'
                    name='bacon'
                    checked={values.toppings.bacon}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    checked={values.toppings.sausage}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Onion
                    <input
                    type='checkbox'
                    name='onion'
                    checked={values.toppings.onion}
                    onChange={onCheckboxChange}
                    />
                </label>
            </div>
        </div>
    )
}

export default PizzaForm