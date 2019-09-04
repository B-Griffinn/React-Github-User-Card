import React from 'react';
import './Components.css';

const Followers = ({ githubFollowers }) => {

      return (
    <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={githubFollowers.avatar_url} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{githubFollowers.login}
            <i className="material-icons right">About Me</i></span>
            <p><a href={githubFollowers.html_url} target="_blank">Checkout My GitHub</a></p>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{githubFollowers.login}<i className="material-icons right">X</i></span>
            <p>{githubFollowers.bio || 'No bio provided by user.'}</p>
        </div>
    </div>
    );
}

export default Followers;
