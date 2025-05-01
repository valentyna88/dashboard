import logo from '../../../assets/img/company-logo.png';
import css from './AccountSummaryCard.module.css';

const AccountSummaryCard = ({ account }) => {
  return (
    <section className={css.summary}>
      <div className={css.info}>
        <img src={logo} alt="Company Logo" className={css.logo} />

        <div className={css.details}>
          <h2 className={css.name}>{account.name}</h2>

          <div className={css.row}>
            <p className={css.address}>{account.address}</p>

            <ul className={css.meta}>
              {account.accountNumber && (
                <li className={css.metaItem}>
                  <span className={css.label}>EXISTING ACCOUNT</span>
                  <span className={css.value}>{account.accountNumber}</span>
                </li>
              )}
              {account.broker && (
                <li className={css.metaItem}>
                  <span className={css.label}>BROKER</span>
                  <span className={css.value}>{account.broker}</span>
                </li>
              )}
              {account.underwriter && (
                <li className={css.metaItem}>
                  <span className={css.label}>UNDERWRITER</span>
                  <span className={css.value}>{account.underwriter}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSummaryCard;
