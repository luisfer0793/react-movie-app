import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

import Filter from '../components/Filter/Filter';
import Navigation from '../components/Navigation/Navigation';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieList from '../components/MovieList/MovieList';


import './App.css';

const App = props => {
    const movies = useSelector(state => state.movies);
    const currentGenre = useSelector(state => state.currentGenre);
    const currentMovieId = useSelector(state => state.currentMovieId);
    const searchText = useSelector(state => state.searchText);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [currentGenre]);

    useEffect(() => {
        updateMovieList();
    }, [searchText]);

    const updateMovieList = () => {
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
        dispatch({
            type: 'FILTER_MOVIE_LIST', payload: filteredMovies
        });
    }

    const fetchData = () => {
        const nodeId = currentGenre;
        const url = `https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=eevqocbhcj6k8bn5jdjr25mp77&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=${nodeId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'FETCH_MOVIES', payload: data.response.groups
                })   
            })
            .catch(error => console.log(error));
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
                            <MovieList/>
                        </Route>
                        <Route path="/:genre/:id" exact>
                            <MovieDetail/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        searchText: state.searchText,
        currentGenre: state.currentGenre,
        currentMovie: state.currentMovie,
    }
};

export default connect(mapStateToProps)(App);