import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBDiMBzjWDslLuiReTEhZvgO7QHOkpBBJc';

// Create a new component. This component should produce some HTML
const App = function() {
    return (
        <div>Hi!</div>
    );
}
const ArrowNotation = () => {
    const sum = 3 + 5;
    return <div>The total figure is {sum}</div>;
}

const ArrowNotationOneStatement = () => <div>React in action</div>;

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render(<ArrowNotation />, document.getElementById('anotherElement'));
ReactDOM.render(<ArrowNotationOneStatement />, document.getElementById('oneMoreElement'));

// function() {}
// =>

// Both syntax means the same, two ways to declare a function. The  only differences:
// 1. With arrow notation save typing
// 2. With arrow notation and one single statement you can remove curly brackets and return
// 3. IMP -> With arrow notation 'this' keyword is always pointing to the object where the method is sitting in. 