import React from 'react';
import axios from 'axios';
import { Row, Col, CardGroup } from 'react-bootstrap';
import './main-view.scss';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view'
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get('https://cryptic-taiga-17986.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    if (!user) {
      return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
    }

    if (movies.length === 0) {
      return <div className="main-view" />;
    }

    //Using the ternary operator
    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie ?
          (<Col md={8} className="d-flex">
            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          </Col>)
          : movies.map(movie => (
            <Col md={3} className="d-flex">
              <MovieCard key={movie._id} movie={movie} onMovieClick={movie => { this.setSelectedMovie(movie); }} />
            </Col>))
        }
      </Row>
    );

  }


}
