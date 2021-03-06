import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster"><img src={movie.imagePath} /></div>
        <div className="movie-title">
          <span className='label'>Title:</span>
          <span className='value'>{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className='label'>Description:</span>
          <span className='value'>{movie.Description}</span>
        </div>

        <Link to={`/directors/${movie.Director.Name}`}>
          <Button variant="link">Director</Button>
        </Link>

        <Link to={`/genres/${movie.Genre.Name}`}>
          <Button variant="link">Genre</Button>
        </Link>
        <Button onClick={() => { onBackClick(); }}>Back</Button>
      </div>

    )
  }

}