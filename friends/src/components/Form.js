import React, {useState} from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';


// const Form = () => {
// 	const [friend, setFriend] = useState(
// 		{
//             name: '',
//             age: '',
//             email: '',
//         } )

// 	const changeHandler = e => {
//         // e.persist();
//         let value = e.target.value;
//         if (e.target.name === 'age') {
//             value = parseInt(value, 10);
//         }

//         setFriend({...friend, [e.target.name]: value });
//     };

//     const  handleSubmit = e => {
//         e.preventDefault();
        
//           props.dispatch({type:"ADD_FRIEND", payload:friend});
        
//         setFriend(
//    				{
//                 name: '',
//                 age: '',
//                 email: '',
//             }
//         );
//     };
//         return (
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         name="name"
//                         onChange={changeHandler}
//                         placeholder="Name"
//                         value={friend.name}
//                     />
//                     <div className="baseline" />

//                     <input
//                         name="age"
//                         onChange={changeHandler}
//                         placeholder="Age"
//                         value={friend.age}
//                     />
//                     <div className="baseline" />

//                     <input
//                         name="email"
//                         onChange={changeHandler}
//                         placeholder="Email"
//                         value={friend.email}
//                     />
//                     <div className="baseline" />

//                     <button className="md-button form-button">{`${
//             'Add New'} Friend`}</button>
//                 </form>
//             </div>
//         );
    


// }
class Form extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
        },
        active: false
    };


    changeHandler = ev => {
        // ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'age') {
            value = parseInt(value, 10);
        }

        this.setState({
            friend: {
                ...this.state.friend,
                [ev.target.name]: value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.active) {
            this.props.updateFriend(this.state.friend);
        } else {
            this.props.addFriend(this.state.friend);
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: '',
            },
            active: false
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Name"
                        value={this.state.friend.name}
                    />
                    <div className="baseline" />

                    <input
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="Age"
                        value={this.state.friend.age}
                    />
                    <div className="baseline" />

                    <input
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="Email"
                        value={this.state.friend.email}
                    />
                    <div className="baseline" />

                    <button className="md-button form-button">{`${
            this.state.active ? 'Update' : 'Add New'} Friend`}</button>
                </form>
            </div>
        );
    }
}




export default connect(null, {addFriend})(Form);

