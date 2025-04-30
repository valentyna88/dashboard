import css from './SearchInput.module.css';

const SearchInput = () => {
  return <input type="text" placeholder="Search" className={css.input} />;
};

export default SearchInput;
