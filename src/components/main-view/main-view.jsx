import React from 'react';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...' },
        { id: 2, Title: 'The Shawshank Redemtion', Description: 'desc2...', ImagePath: '...' },
        { id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...' }
      ]
    }
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return <div className="main-view">This list is empty!</div>;
    }
    return (
      <div className="main-view">
        {movies.map((movie) => <div key={movie._id}>{movie.Title}</div>)}
      </div>
    );
  }
}