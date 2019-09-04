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
    .then(() => { 
      axios.get(this.state.user.followers_url)
      .then(res => {
        this.setState({ followers: res.data })
        console.log(this.state.followers)
      })
      .catch()
     } )
    .catch(err => console.log(err))
  }

//   componentDidUpdate(prevState) {
//       // if(this.state.user !== prevState.user) {
//         axios.get(this.state.user.followers_url)
//         .then(res => { this.setState({ followers: res.data }) })
//       .catch(err => {
//         console.log(err)
//       })
//       // }
//     console.log(this.state.user !== prevState.user)
// }
      
  render() {
  return (
    <div className="App">
      <UserCard githubUser={this.state.user} />
      
      {this.state.followers.map(follower => {
        return(<Followers key={follower.id} githubFollowers={follower}/>)
      })
      
    }
    </div>
  )

 };

}

export default App;
