import { Component } from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies: [],
      searchField: 'Avengers'
    };
    
  }

  componentDidMount(){
    fetch(`http://api.themoviedb.org/3/search/movie?query=Avengers&api_key=c0cfde6eeaf28982f2de2403db46d141`)
    .then(response => response.json())
    .then(data => this.setState({movies:data.results}));
    // .then(data => data.result)
    // .then(result => console.log(result))
  }

  feachMovieData(){
    console.log(this.state.searchField)
    fetch(`http://api.themoviedb.org/3/search/movie?query=${this.state.searchField}&api_key=c0cfde6eeaf28982f2de2403db46d141`)
    .then(response => response.json())
    .then(data => this.setState({movies:data.results}));
  }

  render() {
    // this.feachMovieData(this.state.searchName)
    console.log(this.state.movies)
    return (
      <div className = 'App'>
        <input 
          type = 'search'
          placeholder = 'search movies'
          onChange = {e => this.setState({searchField: e.target.value})}
        />
        <button
          onClick = {() => this.feachMovieData()} 
        />
        <CardList movies = {this.state.movies}/>
      </div>
      
    );
  }
}

export default App;
