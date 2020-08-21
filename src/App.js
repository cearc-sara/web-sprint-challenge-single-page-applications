import React, {useState, useEffect} from "react";
import { Route, Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';
import formSchema from './formSchema';

const initialOrdersList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Samuel',
    pizza_size: 'large',
    toppings: {
      cheese: true,
      pepperoni: false,
      mushroom: false,
      pineapple: false,
      bacon: false,
      sausage: false,
      onion: false,
    },
  },
]


const initialFormValues = {
  name: '',
  pizza_size: '',
  toppings: {
    cheese: false,
    pepperoni: false,
    mushroom: false,
    pineapple: false,
    bacon: false,
    sausage: false,
    onion: false,
  },
  special_instructions: '',
}

const initialFormErrors = {
  name: '',
  pizza_size: '',
}

const initialOrders = []
const initialDisabled = true

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialOrdersList })
}
const fakeAxiosPost = (url, { name, pizza_size, toppings, special_instructions }) => {
  const newOrder = { id: uuid(), name, pizza_size, toppings, special_instructions }
  return Promise.resolve({ status: 200, success: true, data: newOrder })
}



const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 


const getOrders = () => {
  fakeAxiosGet('fake.com')
  .then(res => {
    setOrders(res.data)
  })
  .catch(err => {
    debugger
  })
}

const postNewOrder = () => {
  fakeAxiosPost('fake.com', newOrder)
  .then(res => {
    setOrders(orders.concat(res.data))
  })
  .catch(err => {
    debugger
  })
  .finally(() => {
    setFormValues(initialFormValues)
  })
}

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({...formErrors, [name]: ""})
  })
  .catch(err => {
    setFormErrors({...formErrors, [name]: err.errors[0]})
  })
  setFormValues({...formValues, [name]: value})
}

const checkboxChange = (name, isChecked) => {
  setFormValues({...formValues, toppings: {...formValues.toppings, [name]: isChecked}})
}

const submit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    pizza_size: formValues.pizza_size,
    toppings: Object.keys(formValues.toppings),
    special_instructions: formValues.special_instructions.trim(),
  }
}

  return (
    <>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/PizzaForm'>Pizza Form</Link>
        </div>
      </nav>

      <div>
        {/* <Switch> */}
          <Route path='/PizzaForm'>
            <PizzaForm />
          </Route>

          {/* <Route path='/'>
            <HomePage />
          </Route> */}
        {/* </Switch> */}
      </div>
    </>
  );
};
export default App;
