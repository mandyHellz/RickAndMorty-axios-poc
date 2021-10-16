import './styles.css';

export default function UserInfo(props) {
  return (
    <div className="user-profile">
      <img className="profile-picture" src={props.user.avatar_url} alt="Profile Pic" />
      <div className="user-info">
        <p className="username">{props.user.login}</p>
        <span>Followers: {props.user.followers}</span>
        <span>Following: {props.user.following}</span>

      </div>
    </div>
  )
}