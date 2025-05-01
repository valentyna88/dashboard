import css from './QuickActions.module.css';

const actions = [
  'New Submission',
  'Quote Builder',
  'Risks Models',
  'Documents Upload',
];

const QuickActions = () => {
  return (
    <section className={css.quickActions}>
      <h2>Quick Actions</h2>
      <div className={css.buttons}>
        {actions.map((action, index) => (
          <button key={index} className={css.button}>
            {action}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
