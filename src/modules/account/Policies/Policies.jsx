import sprite from '../../../assets/sprite.svg';
import css from './Policies.module.css';

const policies = [
  {
    icon: 'icon-cargo',
    label: 'Marine Cargo',
    premium: '$625,000',
    date: '6/30/2026',
    color: css.blue,
  },
  {
    icon: 'icon-liability',
    label: 'General Liability',
    premium: '$175,000',
    date: '6/30/2026',
    color: css.green,
  },
  {
    icon: 'icon-workers',
    label: 'Workers Comp',
    premium: '$75,000',
    date: '---',
    color: css.purple,
  },
  {
    icon: 'icon-property',
    label: 'Property',
    premium: '$64,829.83',
    date: '---',
    color: css.yellow,
  },
  {
    icon: 'icon-umbrella',
    label: 'Umbrella',
    premium: '$275,000',
    date: '13/03/2026',
    color: css.red,
  },
];

const Policies = () => {
  return (
    <section className={css.policies}>
      <h2>Policies</h2>
      <ul className={css.list}>
        {policies.map(({ icon, label, premium, date, color }, index) => (
          <li key={index} className={css.card}>
            <div className={css.header}>
              <svg className={`${css.icon} ${color}`} width={20} height={20}>
                <use href={`${sprite}#${icon}`} />
              </svg>
              <span className={css.title}>{label}</span>
            </div>
            <p className={css.text}>Premium: {premium}</p>
            <p className={css.text}>Eff.Date: {date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Policies;
