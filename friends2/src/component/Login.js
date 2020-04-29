import React ,{useState} from 'react'; 
import {fakeAuth} from './fakeAuth'
import {
BrowserRouter as Router,
Route,
Link ,
Redirect
}from 'react-router-dom';

const Login = (props) => {

const [state, setState] = useState({
			redirectState: false 
	})

const login = () => { 
	fakeAuth.authenticate( ()=>{
		setState( () => ({
			redirectState: true 
			})
		)
	})


}

const {from} = props.location.state || {from: {pathname:"/"}}

if (state.redirectState === true ){
	return (
		<Redirect to= {from} /> 
		)

	}

	return (
		<div>
			<p> 
			LOGIN to view page the page called {from.pathname}
			</p> 

			<button onClick = {login} > 
			LOGIN
			</button> 
		</div>
		)

}
export default Login 