import sprite from '../../../assets/sprite.svg';
import css from './Winnability.module.css';

const metricsUp = [
  { label: 'Brokers relationship', value: '+28%', width: '90%' },
  { label: 'Loss history', value: '+22%', width: '80%' },
  { label: 'Industry growth', value: '+16%', width: '65%' },
  { label: 'Multiline opportunity', value: '+11%', width: '50%' },
];

const metricsDown = [
  { label: 'Premium pricing', value: '-24%', width: '90%' },
  { label: 'Total exposure', value: '-18%', width: '75%' },
  { label: 'Loss ratio trend', value: '-13%', width: '60%' },
  { label: 'Market competition', value: '-5%', width: '45%' },
];

const MetricCard = ({ title, icon, items, type }) => (
  <div className={`${css.metricCard} ${css[type]}`}>
    <div className={css.metricHeader}>
      <svg width={20} height={20} className={css.icon}>
        <use href={`${sprite}#${icon}`} />
      </svg>
      <h3>{title}</h3>
    </div>
    <ul className={css.metricList}>
      {items.map((item, index) => (
        <li key={index} className={css.metricItem}>
          <span className={css.index}>{index + 1}</span>
          <span className={css.label}>{item.label}</span>
          <div className={css.barWrapper}>
            <div
              className={css.bar}
              style={{
                width: item.width,
                background:
                  type === 'gain'
                    ? 'linear-gradient(to right, rgba(59, 185, 121, 0), #3bb979)'
                    : 'linear-gradient(to right, rgba(253, 210, 97, 0), #fdd261)',
              }}
            ></div>
          </div>
          <span className={css.value}>{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PositionBar = ({ label }) => (
  <div className={css.positionBar}>
    <span>{label}</span>
    <div className={css.positionFill}></div>
  </div>
);

const Recommendation = ({ title, text }) => (
  <div className={css.recoBlock}>
    <div>
      <p className={css.recoTitle}>{title}</p>
      <p className={css.recoText}>{text}</p>
    </div>

    <button className={css.btn}>Apply</button>
  </div>
);

const Winnability = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Winnability</h2>

      <div className={css.topRow}>
        <div className={css.card}>
          <p className={css.label}>Overall Score</p>
          <p className={css.score}>
            82%
            <svg width={120} height={40}>
              <use href={`${sprite}#icon-strong`} />
            </svg>
          </p>
        </div>

        <div className={css.card}>
          <p className={css.label}>Historical trend</p>
          <svg width={284} height={46}>
            <use href={`${sprite}#icon-diagram`} />
          </svg>
        </div>

        <div className={css.card}>
          <p className={css.label}>Position</p>
          <PositionBar label="Your score: 82%" />
          <PositionBar label="Market Avg: 68%" />
          <PositionBar label="Top competitor: 88%" />
        </div>
      </div>

      <div className={css.metricGrid}>
        <MetricCard
          title="Increasing Winnability"
          icon="icon-arrow-up"
          items={metricsUp}
          type="gain"
        />
        <MetricCard
          title="Decreasing Winnability"
          icon="icon-arrow-down"
          items={metricsDown}
          type="loss"
        />
      </div>

      <div className={css.recommendations}>
        <svg width={29} height={29}>
          <use href={`${sprite}#icon-ai`} />
        </svg>
        <h3 className={css.recoHeading}>AI-Powered Recommendations</h3>
        <Recommendation
          title="Offer 5% premium discount in exchange for 3-year commitment"
          text="Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability."
        />
        <Recommendation
          title="Propose risk control services for cargo handling procedures"
          text="Can potentially reduce loss ratio by 15-20% based on similar maritime accounts in your portfolio. Specific focus on loading/unloading operations would address the most frequent claim scenarios."
        />
      </div>
    </section>
  );
};

export default Winnability;
