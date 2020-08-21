import React, {useState, useEffect} from "react";
import { Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';
import formSchema from './formSchema';


const initialFormValues = {
  name: '',
  pizza_size: '',
  toppings: {
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

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled) 
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
