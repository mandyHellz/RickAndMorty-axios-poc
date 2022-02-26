import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "../UserInfo";
import "./styles.css";

const Search = () => {
  const [character, setCharacter] = useState("");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rick");

  useEffect(() => {
    getCharacter();
  }, [query]);

  const getCharacter = async () => {
    const { data: char } = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${query.trim()}`
    );
    setCharacter(char);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <p className="title">Rick and Morty Multiverse Search</p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Find a character in multiverse by typing their name"
          className="character-input"
          onChange={searchHandler}
          value={search}
        />
        <button className="search-button">Buscar</button>
      </form>

      <div className="cards">
        {character.results?.map((char) => (
          <UserInfo key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default Search;
