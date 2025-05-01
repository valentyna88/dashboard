import sprite from '../../../assets/sprite.svg';
import css from './AccountStatus.module.css';

const steps = [
  { label: 'Submitted', done: true },
  { label: 'Review', done: true },
  { label: 'Quote', done: true },
  { label: 'Bind', done: true },
  { label: 'Issue', done: true },
  { label: 'Renew', done: false },
];

const AccountStatus = () => {
  return (
    <section className={css.statusBox}>
      <h2>Account Status</h2>
      <div className={css.steps}>
        {steps.map((step, index) => (
          <div key={step.label} className={css.step}>
            <svg width={25} height={25} className={css.icon}>
              <use
                href={`${sprite}#${
                  step.done ? 'icon-check' : 'icon-check-grey'
                }`}
              />
            </svg>
            <span>{step.label}</span>

            {index < steps.length - 1 && <div className={css.line} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountStatus;
