import React, { Component } from 'react';

// CLASS BASED COMPONENT
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input className="search-bar"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;