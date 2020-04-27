import React from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';

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
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'age') {
            value = parseInt(value, 10);
        }

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [ev.target.name]: value
            }
        }));
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

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps, {addFriend})(Form);