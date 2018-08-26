import React, { Component } from 'react';

// When we need the component has some functionalities, like communicate with other
// component and so on we upgrade the Functional React Component to a 
// Class React Component

// Each React component has its own copy of its state
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Only inside the constructor function the state in manipulated directly like this:
        this.state = {
            term: ''
        };
    }

    // Each React component has to implement a render method to render its representation
    render() {
        return (
            <div>
                <input onChange={event => {
                    this.setState({ term: event.target.value});
                    console.log('Value of the input: ', this.state.term);
                    }
                } />
                Value of the input: {this.state.term}
            </div>
        );
    }

}

export default SearchBar;

// Every Class React Component has a plain json object that represent its state.
// Every time the state is changed the Componete render method is reexecuted.

// Accessing the state object
// 1. In the constructer to set it up : this.state = {} Only can be done here.
// 2. To show its value : this.state.term
// 3 . To change it : this.setState({term: 'calamaro'})

// NEVER DO THAT : this.state.term = 'gabinete'