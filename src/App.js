import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
