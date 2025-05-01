import Winnability from '../Winnability/Winnability';
import css from './AccountDetails.module.css';

const AccountDetails = () => {
  return (
    <section>
      <h2>Account Details</h2>
      <div className={css.wrapper}>
        <aside className={css.sidebar}>
          <nav className={css.list}>
            <div className={css.groupActive}>
              <p className={css.groupTitle}>
                DECISION SUPPORT <span className={css.count}>4</span>
              </p>
              <ul className={css.list}>
                <li className={css.active}>Winnability</li>
                <li>Exposure Review & Suggested Coverage</li>
                <li>Portfolio Strategy Alignment</li>
                <li>Broker Analytics</li>
              </ul>
            </div>

            <p className={css.groupTitle}>
              RISK ASSESSMENT <span>6</span>
            </p>
            <p className={css.groupTitle}>
              DOCUMENTS AND COMPLIANCE <span>2</span>
            </p>
          </nav>
        </aside>
        <Winnability />
      </div>
    </section>
  );
};

export default AccountDetails;
