import { useState } from 'react';
import axios from 'axios';

import UserInfo from '../UserInfo';

import './styles.css'
import UserList from '../UserList';

function SearchBar() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  function handleInputChange(event) {
    setUsername(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { data: githubUser } = await axios.get(`https://api.github.com/users/${username}`);
    setUsers([...users, githubUser]);

    setUsername('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type="text" 
          placeholder="Digite seu usuario do github"
          className="username-input"
          onChange={handleInputChange}
          value={username}
        />
        <button className="search-button">Buscar</button>
      </form>

    {!!(users.length) && (
      <UserList>
        { users.map(user => <UserInfo key={user.id} user={user} /> ) }
      </UserList>
    )}
    </>
  )
}

export default SearchBar;