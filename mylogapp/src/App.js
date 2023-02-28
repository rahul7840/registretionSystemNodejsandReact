import './App.css';
import Homepage from './componets/homepage/homepage';
import EntryTable from './componets/homepage/homepage';
import Loginpage from './componets/login/login.js';
import Registerpage from './componets/registretion/registretion';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';


function App() {

  const [user, setLoginUser] = useState({})


  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id
                ?
              
                <EntryTable setLoginUser={setLoginUser} />
                :
                <Loginpage setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Loginpage setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Registerpage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
