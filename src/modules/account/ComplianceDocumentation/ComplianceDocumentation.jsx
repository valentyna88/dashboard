import sprite from '../../../assets/sprite.svg';
import css from './ComplianceDocumentation.module.css';

const ComplianceDocumentation = () => {
  const items = [
    'KYC verification',
    'Regulatory approval',
    'Required Documentation',
    'Financial Verification',
  ];

  return (
    <section className={css.docsBox}>
      <div className={css.docsHeader}>
        <h2>Compliance & Documentation</h2>
        <a href="#">See history →</a>
      </div>
      <ul className={css.docsList}>
        {items.map(item => (
          <li key={item}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-check`} />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ComplianceDocumentation;
