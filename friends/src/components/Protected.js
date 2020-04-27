import React from 'react';
import Friends from './Friends';
import Form from './Form';

class Protected extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <Friends />
            </div>
        );
    }
}

export default Protected;