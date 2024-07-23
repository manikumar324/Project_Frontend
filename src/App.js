import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/Signup';
import Recipes from './Components/Recipes/Recipes';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';
import DosaMenu from './Components/DosaMenu/DosaMenu';
import About from './Components/About';
import NotFound from './Components/NotFound/NotFound';
import OrderForm from './Components/OrderForm/OrderForm';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/user-login' element={<Login />} />
          <Route path='/' element={<SignUp />} />
          <Route path='/recipes/menu-list' element={<Recipes />} />
          <Route path='/user-change-password' element={<UpdatePassword />} />
          <Route path='/recipes-about-section' element={<About />} />
          <Route path='/recipeslist/:itemId' element={<DosaMenu />} />
          <Route path='/item-order-form' element={<OrderForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
