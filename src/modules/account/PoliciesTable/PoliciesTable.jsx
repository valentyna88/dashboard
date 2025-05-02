import { policiesData } from '../../../data/policiesData';
import FilterGroupBar from '../../../components/FilterGroupBar/FilterGroupBar';
import sprite from '../../../assets/sprite.svg';
import css from './PoliciesTable.module.css';

const PoliciesTable = () => {
  return (
    <section className={css.policies}>
      <h2>Policies</h2>
      <div className={css.wrapper}>
        <FilterGroupBar />

        <table className={css.table}>
          <thead>
            <tr>
              <th>LINE</th>
              <th>EFF. DATE</th>
              <th>EXP. DATE</th>
              <th>STATUS</th>
              <th>EXPIRING TECH</th>
              <th>EXPIRING PREMIUM</th>
              <th>RENEWAL TO TECH</th>
              <th>RENEWAL TECH</th>
              <th>RENEWAL PREMIUM</th>
              <th>RATE CHANGE</th>
              <th>LOSS RATIO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {policiesData.map(row => (
              <tr key={row.id}>
                <td>
                  <div className={css.lineCell}>
                    <svg className={`${css.icon} ${css[row.color]}`}>
                      <use href={`${sprite}#${row.icon}`} />
                    </svg>
                    <span>{row.line}</span>
                  </div>
                  <div className={css.id}>{row.id}</div>
                </td>
                <td>{row.effDate}</td>
                <td>{row.expDate}</td>
                <td>
                  <span
                    className={`${css.status} ${css[row.status.toLowerCase()]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.expTech}</td>
                <td>{row.expPremium}</td>
                <td>{row.renToTech}</td>
                <td>{row.renTech}</td>
                <td>
                  <strong>{row.renPremium}</strong>
                </td>
                <td className={css.rate}>{row.rateChange}</td>
                <td>
                  {row.lossRatio.value !== 'N/A' ? (
                    <span className={`${css.loss} ${css[row.lossRatio.level]}`}>
                      {row.lossRatio.value}
                    </span>
                  ) : (
                    <span className={css.loss}>{row.lossRatio.value}</span>
                  )}
                </td>
                <td>
                  <button className={css.menuBtn}>
                    <svg width="20" height="20">
                      <use href={`${sprite}#icon-menu`} />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            <tr className={css.total}>
              <td>TOTAL (4)</td>
              <td></td>
              <td></td>
              <td></td>
              <td>$992,500</td>
              <td>$1,020,000</td>
              <td>$1,121,000</td>
              <td>$1,137,500</td>
              <td>
                <strong>$1,150,000</strong>
              </td>
              <td>6.9%</td>
              <td>
                <span className={`${css.loss} ${css.medium}`}>58.3%</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default PoliciesTable;
