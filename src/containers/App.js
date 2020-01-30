import React, { Component } from 'react';

import MovieList from '../components/MovieList/MovieList';
import Filter from '../components/Filter/Filter';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchText: ''
        };
    }
    
    componentDidMount() {
        fetch('https://mfwkweb-api.clarovideo.net/services/content/list?quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexicoapi_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52')
            .then(response => response.json())
            .then(data => this.setState({movies: data.response.groups}))
            .catch(error => console.error(error));
    }
    
    searchTextHandler = event => {
        this.setState({
            searchText: event.target.value.toLowerCase().trim()
        });
    }
    
    render() {
        const {movies, searchText} = this.state;
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
        return (
            <div className="App">
                <div className="filter-continer">
                    <Filter searchTextHandler={this.searchTextHandler} placeholder="Type to Search"/>
                </div>
                <div className="movies-container">
                    <MovieList movies={filteredMovies}/>
                </div>
            </div>
        );
    }
}

export default App;
