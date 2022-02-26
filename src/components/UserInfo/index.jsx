import "./styles.css";

export default function UserInfo({ char }) {
  return (
    <div className="profile">
      <div className="id-profile">
        <img className="profile-picture" src={char.image} alt="Profile Pic" />
        <p className="character-name">{char.name}</p>
      </div>
      <div className="profile-info">
        <div className="infos-section">
          <div>
            <p>Specie: {char.species}</p>
            <p>Status: {char.status}</p>
          </div>
          <div>
            <p>Specie: {char.type}</p>
            <p>Status: {char.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
