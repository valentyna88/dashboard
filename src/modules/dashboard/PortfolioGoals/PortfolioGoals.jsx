import css from './PortfolioGoals.module.css';
import sprite from '../../../assets/sprite.svg';

const PortfolioGoals = () => {
  return (
    <section className={css.goals}>
      <h2>Portfolio goals</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.labelRow}>
            <span className={css.label}>Portfolio Loss Ratio Target</span>
          </div>

          <div className={css.progressWrapper}>
            <div className={css.topIndicator}>
              <span className={css.value}>TG:55%</span>
              <svg width="17" height="11" className={css.arrowIcon}>
                <use href={`${sprite}#icon-arrow-blue`} />
              </svg>
            </div>

            <div className={css.barSegment}>
              <div className={css.green}></div>
              <div className={css.yellow}></div>
              <div className={css.red}></div>
              <span className={css.barValue}>48.2%</span>
            </div>

            <div className={css.indicatorBottom}>
              <svg width="17" height="11" className={css.arrowIcon}>
                <use href={`${sprite}#icon-arrow-green`} />
              </svg>
            </div>
          </div>

          <div className={`${css.note} ${css.greenNote}`}>-6.8% (GOOD)</div>
        </li>

        <li className={css.item}>
          <div className={css.labelRow}>
            <span className={css.label}>Renewal Retention</span>
          </div>

          <div className={css.progressWrapper}>
            <div className={css.topIndicator}>
              <span className={css.value}>TG:85-90%</span>
            </div>

            <div className={css.barSegment}>
              <div className={css.red}></div>
              <div className={css.yellow}></div>
              <div className={css.green}></div>
              <span className={css.barValue}>88%</span>
            </div>

            <div className={css.indicatorBottom}>
              <svg width="17" height="11" className={css.arrowIcon}>
                <use href={`${sprite}#icon-arrow-green`} />
              </svg>
            </div>
          </div>

          <div className={`${css.note} ${css.greenNote}`}>ON TARGET</div>
        </li>

        <li className={css.item}>
          <div className={css.labelRow}>
            <span className={css.label}>New Business Target</span>
          </div>

          <div className={`${css.progressWrapper} ${css.blue}`}>
            <div className={css.progressRow}>
              <div className={css.progressBar}>
                <div className={css.fill} style={{ width: '67%' }}>
                  $8.1M
                </div>
              </div>
              <span className={css.goal}>$12M</span>
            </div>
          </div>

          <div className={`${css.note} ${css.blueNote}`}>67%</div>
        </li>

        <li className={css.item}>
          <div className={css.labelRow}>
            <span className={css.label}>Annual GWP Target</span>
          </div>

          <div className={`${css.progressWrapper} ${css.blue}`}>
            <div className={css.progressRow}>
              <div className={css.progressBar}>
                <div className={css.fill} style={{ width: '67%' }}>
                  $28.4M
                </div>
              </div>
              <span className={css.goal}>$42M</span>
            </div>
          </div>

          <div className={`${css.note} ${css.blueNote}`}>68%</div>
        </li>
      </ul>
    </section>
  );
};

export default PortfolioGoals;
