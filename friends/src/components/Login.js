import React, {useState} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';


const Login = (props) => {
	const [credentials, setCredentials] = useState({
	  username: 'Lambda School',
      password: 'i<3Lambd4'
							 })


  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    props.login(credentials).then(() => {
      props.history.push('/protected');
    });
  };

    return (
      <div>
        <form onSubmit={submit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}


export default connect(null,{login})(Login);