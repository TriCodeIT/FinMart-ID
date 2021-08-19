import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
