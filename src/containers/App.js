import React, { Component } from 'react';

import logo from '../assets/img/logo.svg';

import MovieList from '../components/MovieList/MovieList';
import Filter from '../components/Filter/Filter';
import MenuItemList from '../components/MenuItemList/MenuItemList';
import Spinner from '../components/Spinner/Spinner';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            searchText: '',
            movies: [],
            categories: [
                { id: 43873, name: 'Infantiles' },
                { id: 43861, name: 'Acción' },
                { id: 43864, name: 'Ciencia Ficción' },
            ],
            url: 'https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=la3krjfckhqh6cd5njgcurfbm1&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861'
        };
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.url !== this.state.url) {
            // this.setState({isFetching: true});
            this.fetchData();
            // this.setState({isFetching: false});
        }
    }
    
    fetchData() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({movies: data.response.groups}))
            .catch(error => console.error(error));
    }
    
    searchTextHandler = event => {
        this.setState({
            searchText: event.target.value.toLowerCase().trim()
        });
    }
    
    changeCategoryHandler = (id) => {
        const baseURL = `https://mfwkweb-api.clarovideo.net/services/content/list?`;
        const params = new URLSearchParams('quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=43861&region=mexicoapi_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52');
        params.set('node_id', id);
        this.setState({
           url: (baseURL + params.toString())
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
                <nav className="app-navbar">
                    <MenuItemList categories={this.state.categories} changeCategoryHandler={this.changeCategoryHandler}/>
                </nav>
                <div className="app-movies-container">
                    {
                        this.state.isFetching
                            ?
                                <div className="spinner-container">
                                    <Spinner/>
                                </div>
                            :
                                <MovieList movies={filteredMovies}/>
                    }
                </div>
            </div>
        );
    }
}

export default App;