import React, {Component} from "react";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Protected from './components/Protected';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <Link to="/public">Public Page</Link><br/>
          <Link to="/protected">Protected Page</Link><br/>
          <Link to="/login">Login</Link>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;