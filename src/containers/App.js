import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

import Filter from '../components/Filter/Filter';
import Navigation from '../components/Navigation/Navigation';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieList from '../components/MovieList/MovieList';

import fetchMoviesAction from '../redux/actions/fetch-movies-action';

import './App.css';

const App = props => {
    let filteredMovies = props.movies.filter(movie => movie.title.toLowerCase().includes(props.searchText));
    
    useEffect(() => {
        fetchData();
    }, [props.currentGenre]);

    const fetchData = () => {
        const url = `https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=eevqocbhcj6k8bn5jdjr25mp77&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=${props.currentGenre}`;
        fetch(url)
            .then(response => response.json())
            .then(data => props.fetchMovies(data.response.groups))
            .catch(error => console.error(error));
    }       

    return (
        <main className="app">
            <Router>
                <header className="app-header">
                    <Link to="/">
                        <img className="app-logo" src={logo} alt="app logo"/>
                    </Link>
                    <Filter/>
                </header>
                <Navigation/>
                <section className="app-movies-container">
                    <Switch>
                        <Route path="/" exact>
                            <h2 className="app-title">Selecciona un género para ver películas</h2>
                        </Route>
                        <Route path="/:genre" exact>
                            <MovieList movies={filteredMovies}/>
                        </Route>
                        <Route path="/:genre/:id" exact>
                            <MovieDetail />
                        </Route>
                    </Switch>
                </section>
            </Router>
        </main>
    );
}

const mapStateToProps = state => ({
    movies: state.movies,
    searchText: state.searchText,
    currentGenre: state.currentGenre,
    currentMovie: state.currentMovie,
});

const mapDispatchToProps = dispatch => ({
    fetchMovies(movies) {
        dispatch(fetchMoviesAction(movies));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);