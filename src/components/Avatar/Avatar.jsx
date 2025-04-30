import css from './Avatar.module.css';

const Avatar = ({ initials }) => {
  return <div className={css.avatar}>{initials}</div>;
};

export default Avatar;
