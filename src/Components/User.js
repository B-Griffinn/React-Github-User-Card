import React from 'react';

import './Components.css';

const User = ({githubUser}) => {

    return (
    <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={githubUser.avatar_url} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{githubUser.login}
            <i className="material-icons right">About Me</i></span>
            <p><a href={githubUser.html_url} target="_blank">Checkout My GitHub</a></p>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{githubUser.login}<i className="material-icons right">X</i></span>
            <p>{githubUser.bio}</p>
        </div>
    </div>
    )
}

export default User;
