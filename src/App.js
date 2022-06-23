import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import FooterComponent from './components/Footer';
import FormComponent from './components/Form';
import ButtonComponent from './components/Button';
import RoutesComponent from './routes';

class App extends Component{

  render(){
    return (
      <div>
          <RoutesComponent />


      </div>
    );
  }

}

export default App;

/*state = {
      movies: []
    };

  componentDidMount(){
    fetch('http://localhost:3131/movie').then(response => response.json()).then(movies => this.setState({movies}));
  }

  handleClick = () =>{
    const { id } = this.state;
    this.setState({id: id + 1});
  }

  render(){

    const { movies } = this.state;

    return (
      <div className="App">

        { movies.map(movies => (
        <div key={movies.id}>
          <h1> {movies.name} </h1>
          <h2> {movies.year} </h2>
          <h2> {movies.duration} </h2>
          <h2> {movies.description} </h2>
        </div>
        ))}
        <GlobalStyles />
      </div>
    );
  }
}
*/
