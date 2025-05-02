import css from './FilterGroupBar.module.css';

const FilterGroupBar = () => {
  return (
    <div className={css.controls}>
      <input type="text" placeholder="Search" />
      <div className={css.actions}>
        <button className={css.btn}>Filter</button>
        <button className={css.btn}>Group</button>
      </div>
    </div>
  );
};
export default FilterGroupBar;
