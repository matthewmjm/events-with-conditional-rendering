import { Component } from 'react';
import TvShowsSection from './components/TvShowsSection'
import './App.css';

const tvShowsURL = "http://api.tvmaze.com/shows"

class App extends Component {

  state= {
    tvShows: [],
    isClicked: false
  }

  componentDidMount(){
    this.getTvShows()
  }

  getTvShows = () => {
    fetch(tvShowsURL)
      .then(response => response.json())
      .then(tvShows => this.setState({ tvShows: tvShows }))
  }

  handleClick = () => {
    this.setState({isClicked: true})
  }

  render(){
    return (
      <div className="App">
        <h1>TV Shows!</h1>
        {this.state.isClicked
          ? <TvShowsSection tvShows={this.state.tvShows} />
          : <button onClick={this.handleClick}>Get Shows!</button>
        }
      </div>
    );
  }
}

export default App;
