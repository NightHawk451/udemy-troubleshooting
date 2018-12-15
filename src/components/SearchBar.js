import React from 'react';

class SearchBar extends React.Component {

    state = { term: 'input' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term) // this allows us to pass this back up to the App.js
    }




    render() {
        return (<div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input
                        type="text"
                        value = {this.state.term} 
                        // this move the input value from HTML to a state variable
                        onChange={(e) => this.setState({ term: e.target.value })}  /> 
                </div>
            </form>

        </div>
        );
    }
}

export default SearchBar;