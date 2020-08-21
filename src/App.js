import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import PizzaForm from './PizzaForm';


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

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
     <div>
     <Switch>
     <Route path='/pizzaForm'>
       <PizzaForm  />
     </Route>

     <Route path='/'>
       <HomePage  />
     </Route>
   </Switch>
     </div>
    </>
  );
};
export default App;
