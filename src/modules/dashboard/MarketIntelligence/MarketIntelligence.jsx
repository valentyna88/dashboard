import css from './MarketIntelligence.module.css';

const newsItems = [
  {
    title: 'Rate hardening continue to harden-+15% YoY',
    type: 'warning',
  },
  {
    title: 'New capacity entering Marine market',
    type: 'info',
  },
  {
    title: 'Environmental regulatory changes in CA',
    type: 'neutral',
  },
];

const MarketIntelligence = () => {
  return (
    <section className={css.marketIntelligence}>
      <h2>Market Intelligence</h2>
      <ul className={css.list}>
        {newsItems.map((item, index) => (
          <li key={index} className={css.item}>
            <span className={`${css.dot} ${css[item.type]}`}></span>
            <div className={css.title}>{item.title}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MarketIntelligence;
