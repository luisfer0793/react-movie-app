import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

import Filter from '../components/Filter/Filter';
import Navigation from '../components/Navigation/Navigation';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieList from '../components/MovieList/MovieList';

import store from '../redux/store';
import fetchMovies from '../redux/actions/fetchMovies';
import filterMovies from '../redux/actions/filterMovies';

import './App.css';

const App = props => {
    let filteredMovies = props.movies;

    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [props.currentGenre]);

    useEffect(() => {
       updateMovieList();
    }, [props.searchText]);

    const updateMovieList = () => {
        filteredMovies = props.movies.filter(movie => movie.title.toLowerCase().includes(props.searchText));
        store.dispatch(filterMovies(filteredMovies));
    }

    const fetchData = () => {
        const url = `https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=eevqocbhcj6k8bn5jdjr25mp77&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=${props.currentGenre}`;
        fetch(url)
            .then(response => response.json())
            .then(data => store.dispatch(fetchMovies(data.response.groups)))
            .catch(error => console.error(error));
    }       

    return (
        <div className="app">
            <header className="app-header">
                <img className="app-logo" src={logo} alt="app logo"/>
                <Filter/>
            </header>
            <Router>
                <Navigation/>
                <div className="app-movies-container">
                    <Switch>
                        <Route path="/:genre" exact>
                            <MovieList />
                        </Route>
                        <Route path="/:genre/:id" exact>
                            <MovieDetail movies={filteredMovies}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const mapStateToProps = state => ({
    movies: state.movies,
    searchText: state.searchText,
    currentGenre: state.currentGenre,
    currentMovie: state.currentMovie,
});

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);