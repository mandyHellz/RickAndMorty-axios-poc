import { useState } from 'react';
import axios from 'axios';

import './styles.css'

function SearchBar() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({})

  function handleInputChange(event) {
    setUsername(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { data: githubUser } = await axios.get(`https://api.github.com/users/${username}`);
    console.log(githubUser)
    setUser(githubUser);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" 
          placeholder="Digite seu usuario do github"
          className="username-input"
          onChange={handleInputChange}
        />
        <button className="search-button">Buscar</button>
      </form>

    {Object.entries(user).length && (
      <>
        <h1>{user.login}</h1>
        <span>Followers: {user.followers}</span>
        <span>Following: {user.following}</span>
        <img className="profile-picture" src={user.avatar_url} alt="Profile Pic" />
      </>
    )}
    </>
  )
}

export default SearchBar;