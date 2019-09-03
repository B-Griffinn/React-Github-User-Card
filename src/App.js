import React from 'react';
import './App.css';
import axios from 'axios';

import UserCard from './Components/User';
import Followers from './Components/Followers';

class App extends React.Component {
// Constructor not needed bc there is no binidng
// We just need state
  state = {
    user: [],
    followers: []
  };

  // Handlers

  componentDidMount() {
    axios.get(`https://api.github.com/users/B-Griffinn`)
    // Setting the state to our response from the fetch request
    .then(res => this.setState({ user: res.data }) )
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.followers !== prevState.followers) {
      axios.get(`https://api.github.com/users/B-Griffinn/followers`)
      .then(res => { this.setState({ followers: res.data }) })
    .catch(err => {
      console.log(err)
    })
   } 
  }

  render() {
  return (
    <div className="App">
      <UserCard githubUser={this.state.user} />
      <Followers githubFollowers={this.state.followers}/>
    </div>
  )

 };

}

export default App;
