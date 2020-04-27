import React, { Component } from 'react';
import { connect } from 'react-redux';


const Friends  = (props) => {

   return (
            <div>
              {props.friends.map(friend => (
                  <div className='friendcard' key={friend.name}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <i className="far fa-trash-alt"></i>
                  </div>
                ))}
            </div>
          );


}


const mapStateToProps = state => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, {})(Friends);