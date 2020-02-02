import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

import Filter from '../components/Filter/Filter';
import Navigation from '../components/Navigation/Navigation';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieList from '../components/MovieList/MovieList';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            movies: [],
            currentGenre: { id: 43873, name: 'Infantiles' },
            currentMovieId: 123
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const node_id = this.state.currentGenre.id;
        const url = `https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=la3krjfckhqh6cd5njgcurfbm1&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=${node_id}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({movies: data.response.groups});
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
            <div className="app">
                <header className="app-header">
                    <img className="app-logo" src={logo} alt="app logo"/>
                    <Filter searchTextHandler={this.searchTextHandler} placeholder="Buscar"/>
                </header>
                <Router>
                    <Navigation/>
                    <div className="app-movies-container">
                        <Switch>
                            <Route path="/:genre" exact>
                                <MovieList movies={filteredMovies}/>
                            </Route>
                            <Route path="/:genre/:id" exact>
                                <MovieDetail greet="hi"/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;