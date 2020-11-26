import { Component } from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    fetch(`http://api.themoviedb.org/3/search/movie?query=Avengers&api_key=c0cfde6eeaf28982f2de2403db46d141`)
    .then(response => response.json())
    .then(data => this.setState({movies:data.results}));
    // .then(data => data.result)
    // .then(result => console.log(result))
  }

  render() {
    console.log(this.state.movies)
    return (
      <CardList movies = {this.state.movies}/>
    );
  }
}

export default App;
