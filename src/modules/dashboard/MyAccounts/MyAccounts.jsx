import { useNavigate } from 'react-router-dom';
import { accounts } from '../../../data/accounts';
import sprite from '../../../assets/sprite.svg';
import css from './MyAccounts.module.css';

const MyAccounts = () => {
  const navigate = useNavigate();

  const handleRowClick = id => {
    navigate(`/account/${id}`);
  };

  return (
    <section className={css.myAccounts}>
      <div className={css.header}>
        <h2>My accounts</h2>
        <div className={css.actions}>
          <input className={css.search} type="text" placeholder="Search" />
          <button className={css.btn}>Filter</button>
          <button className={css.btn}>Sort</button>
          <button className={css.btn}>Group</button>
          <button className={css.btnPrimary}>+ New</button>
        </div>
      </div>

      <table className={css.table}>
        <thead>
          <tr>
            <th>Account Name/Type</th>
            <th>Line</th>
            <th>Broker</th>
            <th>Renewal Date</th>
            <th>Premium</th>
            <th>Rated Premium</th>
            <th>Loss Ratio</th>
            <th>Appetite</th>
            <th>Status</th>
            <th>Triage</th>
            <th>Winnability</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(acc => (
            <tr key={acc.id} onClick={() => handleRowClick(acc.id)}>
              <td>
                <strong>{acc.name}</strong>
                <br />
                <small className={css.muted}>{acc.type}</small>
              </td>
              <td>{acc.line}</td>
              <td>{acc.broker}</td>
              <td>{acc.renewalDate}</td>
              <td className={css.blue}>{acc.premium}</td>
              <td className={css.muted}>{acc.ratedPremium}</td>
              <td>
                <span className={`${css.loss} ${css[acc.lossRatioColor]}`}>
                  {acc.lossRatio}
                </span>
              </td>
              <td>
                <span className={css.badge}>{acc.appetite}</span>
              </td>
              <td>
                <span className={css.statusDot}></span>
                {acc.status}
              </td>
              <td>
                <span className={css.triage}>{acc.triage}</span>
              </td>
              <td>
                <svg width="146" height="24" className={css.arrowIcon}>
                  <use href={`${sprite}#icon-strong`} />
                </svg>
              </td>
              <td>
                <button className={css.more}>⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyAccounts;
