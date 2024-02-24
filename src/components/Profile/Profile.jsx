import css from "../Profile/Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profilecard}>
      <div className={css.profiledata}>
        <img
          className={css.profileimg}
          src={avatar}
          alt="User avatar"
          width="250"
        />
        <p className={css.profilename}>{username}</p>
        <p className={css.profiletag}>@{tag}</p>
        <p className={css.profilelocation}>{location}</p>
      </div>

      <ul className={css.profilelist}>
        <li className={css.profileitem}>
          <span className={css.profiletitle}>Followers</span>
          <span className={css.profiledigit}>{stats.followers}</span>
        </li>
        <li className={css.profileitem}>
          <span className={css.profiletitle}>Views</span>
          <span className={css.profiledigit}>{stats.views}</span>
        </li>
        <li className={css.profileitem}>
          <span className={css.profiletitle}>Likes</span>
          <span className={css.profiledigit}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
