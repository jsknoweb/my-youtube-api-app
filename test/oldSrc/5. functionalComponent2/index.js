import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBDiMBzjWDslLuiReTEhZvgO7QHOkpBBJc';

// FUNCTIONAL BASED COMPONENT
// Create a new component. This component should produce some HTML
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 


// Another example of FUNCTIONAL BASED COMPONENT IS OUR MAIN APP

/*
// FUNCTIONAL BASED COMPONENT
// Create a new component. This component should produce some HTML
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
*/

// In this case our App functional  component contains a CLASS BASED COMPONENT