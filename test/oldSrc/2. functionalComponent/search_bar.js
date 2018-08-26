// Here we are creating a component with a function (not with a ES6 class)
// Functional Component vs Class Component.

import React from 'react';

const SearchBar = () => {
    return <input />;
};

const foo = 5;

// This way the constant foo is not visible, not exported.
export default SearchBar;

// Functional  component are used when  we just want to take in some information
// and spit out some JSX.