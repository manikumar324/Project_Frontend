import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/user-login' element={<Login />}/>
            <Route exact path='/new-user-signup' element={<SignUp />}/>
            <Route exact path="/recipes/menu-list" element={<Recipes />}/>
            <Route exact path='/user-change-password' element={<UpdatePassword />}/>
            <Route exact path='/recipes-about-section' element={<About />}/>
            <Route exact path='/recipeslist/:itemId' element={<DosaMenu />}/>
            <Route exact path='/item-order-form' element={<OrderForm />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
     </div>
    
  )
}

export default App;