import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
BrowserRouter as Router,
Route,
Link ,
Redirect, 
useHistory
}from 'react-router-dom';
import {fakeAuth} from './component/fakeAuth.js';
import Login from "./component/Login.js";
import { connect } from 'react-redux';




function App() {
const Public = () => <h2> Public</h2>
const Protected = () => <h2>YOUR LOGGED IN AND VIEWING Protected<br/>
                          <Link to="/logout">
                          <button > Sign Out</button> 
                          </Link> 

                        </h2>


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props =>(
        fakeAuth.isAuthenticated === true 
         ? 
         <Component {...props} />
         : 
          <Redirect to={{
            pathname: "/login", 
            state:{from: props.location}

             }}/>
        
     )}
    />
  
);

const SignOut = () => {
   fakeAuth.isAuthenticated=false;
    return(
     <Redirect to={{ pathname: "/login" }} />
     )
    }

return (
<div className="App">
  <p>
    <img src={logo}  className="App-logo" alt="logo" />
  </p>
  <Router>
    <div>
    
      <ul style ={{ listStyleType: "none" }}>
        <li><Link to="/public">Public page</Link> </li>
        <li><Link to="/protected">Protected </Link> </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path = "/protected"  component={Protected}/>
        <Route path="/logout" component={SignOut}
/>
      </div>
    </Router>
  </div>
  );
  }


const mapStateToProps = state =>{
console.log('apps',state)
  return{ 
    fakeAuth: state.isAuthenticated

    }


}
export default connect(mapStateToProps,null)(App);