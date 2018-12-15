import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        console.log(term)
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization:
                    'Client-ID f9070a66b9b572e04f166f7a7e2ffed0c8b679e594069d7a37c54902a0013b8a'
            }
        });
        console.log(response.data.results)
    }



    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;