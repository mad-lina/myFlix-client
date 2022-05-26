import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Row, Col, Button } from 'react-bootstrap';
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


  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
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
    const { movies, user } = this.state;

    return (
      <Router>


        <Button onClick={() => { this.onLoggedOut(); }}>Logout</Button>

        <Row className="main-view justify-content-md-center">

          <Route exact path="/" render={() => {
            if (!user)
              return (
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              );

            if (movies.length === 0)
              return <div className="main-view" />;

            return movies.map(m => (
              <Col md={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ));
          }} />

          <Route
            exact path="/register" render={() => {
              if (user)
                return <Redirect to="/" />;
              if (!user)
                return (
                  <Col>
                    <RegistrationView />
                  </Col>
                );
            }} />

          <Route path='/users/:username' render={({ history, match }) => {
            if (!user)
              return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            if (movies.length === 0)
              return <div className="main-view" />
            return
            <ProfileView history={history} movies={movies} user={user === match.params.username} />
          }} />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user)
              return (
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              );

            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)}
                onBackClick={() => history.goBack()} />
            </Col>;
          }} />

          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user)
              return (
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              );

            if (movies.length === 0)
              return <div className="main-view" />;
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director}
                onBackClick={() => history.goBack()} />
            </Col>;
          }} />

          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user)
              return (
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
              );

            if (movies.length === 0)
              return <div className="main-view" />;
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                onBackClick={() => history.goBack()} />
            </Col>;
          }} />

        </Row>
      </Router>
    );
  }


}

