import css from './AttentionBanner.module.css';
import sprite from '../../../assets/sprite.svg';

const AttentionBanner = () => {
  return (
    <section className={css.banner}>
      <div className={css.header}>
        <svg width="20" height="20" className={css.icon}>
          <use href={`${sprite}#icon-attention`} />
        </svg>
        <h3>Needs Attention</h3>
      </div>

      <ul className={css.list}>
        <li>
          <p className={css.title}>
            Marine Survey Required - <span>Scheduled for 06/12/2025</span>
          </p>
          <a className={css.link} href="#">
            Review details link →
          </a>
        </li>
        <li>
          <p className={css.title}>
            Loss Control Complete - <span>Last inspection: 02/15/2025</span>
          </p>
          <a className={css.link} href="#">
            View report →
          </a>
        </li>
        <li>
          <p className={css.title}>
            Claims Review Required - <span>3 open claims // $245,000 TTL</span>
          </p>
          <a className={css.link} href="#">
            View claims →
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AttentionBanner;
