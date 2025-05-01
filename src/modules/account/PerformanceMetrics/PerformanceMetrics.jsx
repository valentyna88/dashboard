import css from './PerformanceMetrics.module.css';

const PerformanceMetrics = () => {
  return (
    <section className={css.metrics}>
      <h2 className={css.heading}>Performance Metrics</h2>

      <div className={css.cards}>
        {/* Winnability */}
        <div className={css.card}>
          <h3 className={css.label}>Winnability</h3>
          <div className={css.dots}>
            <span className={css.dot}></span>
            <span className={css.dot}></span>
            <span className={css.dot}></span>
            <span className={css.dot}></span>
          </div>
          <p className={css.mainValue}>
            <strong>Very Strong</strong>
          </p>
          <a className={css.link} href="#">
            See all factors →
          </a>
        </div>

        <div className={css.card}>
          <h3 className={css.label}>Loss Ratio</h3>
          <div className={css.values}>
            <p className={css.mainValue}>25%</p>
            <p className={css.subtext}>vs 42% target</p>
          </div>
          <a className={css.link} href="#">
            View history →
          </a>
        </div>

        <div className={css.card}>
          <h3 className={css.label}>Premium Growth</h3>
          <div className={css.values}>
            <p className={css.mainValue}>12.4%</p>
            <p className={css.subtext}>
              YoY increase <br /> $123M vs $150M Target
            </p>
          </div>

          <a className={css.link} href="#">
            View trend →
          </a>
        </div>

        <div className={css.card}>
          <h3 className={css.label}>Exposure Distribution</h3>
          <div className={css.barWrapper}>
            <div className={css.bar}>
              <div className={css.fill} style={{ width: '71.4%' }} />
            </div>
            <p className={css.barLabel}>Marine Cargo: 71.4%</p>
          </div>
          <div className={css.barWrapper}>
            <div className={css.bar}>
              <div className={css.fill} style={{ width: '20%' }} />
            </div>
            <p className={css.barLabel}>General Liability: 20%</p>
          </div>
          <div className={css.barWrapper}>
            <div className={css.bar}>
              <div className={css.fill} style={{ width: '8.6%' }} />
            </div>
            <p className={css.barLabel}>Workers Comp: 8.6%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
