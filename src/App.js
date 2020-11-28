import React, { Component } from 'react';

import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';

import './App.css';
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
  }

  feachMovieData(){
    console.log(this.state.searchField)
    fetch(`http://api.themoviedb.org/3/search/movie?query=${this.state.searchField}&api_key=c0cfde6eeaf28982f2de2403db46d141`)
    .then(response => response.json())
    .then(data => this.setState({movies:data.results}));
  }

  render() {
    
    console.log(this.state.movies)
    return (
      <div className = 'App'>
      
        <SearchBox 
          placeholder= {this.state.searchField} 
          handleChange = {e => this.setState({searchField: e.target.value})} 
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
