import { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    fetch(`http://api.themoviedb.org/3/search/movie?query=Superman&api_key=c0cfde6eeaf28982f2de2403db46d141`)
    .then(response => response.json())
    .then(data => this.setState({movies:data.results}));
    // .then(data => data.result)
    // .then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.movies.map(movie => (
            <h1>{movie.title}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
