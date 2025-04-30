import Avatar from '../../components/Avatar/Avatar';
import SearchInput from '../../components/SearchInput/SearchInput';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <p className={css.welcome}>Hi Arthur, welcome! You have 12 open tasks.</p>
      <div className={css.right}>
        <SearchInput />
        <Avatar initials="AR" />
      </div>
    </div>
  );
};
export default Header;
