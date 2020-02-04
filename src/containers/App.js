import React, { Component, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

import Filter from '../components/Filter/Filter';
import Navigation from '../components/Navigation/Navigation';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieList from '../components/MovieList/MovieList';

// import store from '../redux/store/store';
// import updateGenre from '../redux/actions/updateGenre';
// import setMovies from '../redux/actions/fetchMovies';
// import updateMovieId from '../redux/actions/updateMovieId';

import './App.css';


const App = props => {
    const dispatch = useDispatch();
    const reference = useRef();

    const {movies, searchText} = props;

    useEffect(() => {
        console.log('hi');
    });

    const fetchData = () => {
        const node_id = props.currentGenre;
        //const url = `https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.89&region=mexico&HKS=eevqocbhcj6k8bn5jdjr25mp77&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=${node_id}`;
        const url2 = `https://api.themoviedb.org/3/list/10?api_key=5cd0bd57f3b8c39c2053faef6694ccd4&language=en-US`;
        fetch(url2)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'FETCH_MOVIES', payload: data.items
                })   
            })
            .catch(error => console.log(error));
    }
    
    const searchTextHandler = event => {
        this.setState({
            searchText: event.target.value.toLowerCase().trim()
        });
    }
        
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));

    return (
        <div className="app">
            <header className="app-header">
                <img className="app-logo" src={logo} alt="app logo"/>
                <Filter searchTextHandler={searchTextHandler} placeholder="Buscar"/>
            </header>
            <Router>
                <Navigation/>
                <div className="app-movies-container">
                    <Switch>
                        <Route path="/infantiles" exact>
                            <MovieList movies={props.movies}/>
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

const mapStateToProps = state => {
    return {
        movies: state.movies,
        searchText: state.searchText,
        currentGenre: state.currentGenre,
        currentMovieId: state.currentMovieId,
    }
};

export default connect(mapStateToProps)(App);