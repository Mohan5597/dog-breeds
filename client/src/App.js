import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import TopNav from './components/topNav/topNav'
import Registration from "./components/user/registration"
import Login from './components/user/login'
import Logout from './components/user/logout'
import BreedList from './components/breed/list';
import Random from './components/breed/random';


function App() {
  
  return (
    <BrowserRouter>
     <div>
     <ul>
       
       <TopNav/>
       </ul>
 
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/users/breedlist" component={BreedList} exact={true} />
        <Route path="/user/:name" component={Random} exact={true} />
      </Switch>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
