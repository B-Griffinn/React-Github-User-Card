import React from 'react';
import './App.css';



class App extends React.Component {

  state = {
    followers: []
  };

  // Handlers

  componentDidMount() {
    fetch(`https://api.github.com/users/B-Griffinn/followers`)
    .then(res => res.json())
    .then(res => this.setState({ followers: res }) )
    .catch(err => console.log(err))
  }

  render() {
  return (
    <div className="App">
    </div>
  )

 };

}

export default App;
