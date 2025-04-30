import { useNavigate, useLocation } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './NavigationBar.module.css';

const tabs = [
  { label: 'Dashboard', icon: 'icon-dashboard' },
  { label: 'Accounts', icon: 'icon-accounts' },
  { label: 'Brokers', icon: 'icon-brokers' },
  { label: 'Submissions', icon: 'icon-submissions' },
  { label: 'Organizations', icon: 'icon-organizations' },
  { label: 'Goals & Rules', icon: 'icon-goals' },
  { label: 'Admin', icon: 'icon-admin' },
];

const dashboardTabs = ['Dashboard', 'Accounts'];

const NavigationBar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = tab => {
    setActiveTab(tab.label);

    if (
      dashboardTabs.includes(tab.label) &&
      !location.pathname.includes('/dashboard')
    ) {
      navigate('/dashboard');
    }
  };

  return (
    <nav className={css.tabs}>
      {tabs.map(tab => (
        <button
          key={tab.label}
          onClick={() => handleTabClick(tab)}
          className={`${css.tab} ${activeTab === tab.label ? css.active : ''}`}
        >
          <svg className={css.logo} width={17} height={17}>
            <use href={`${sprite}#${tab.icon}`} />
          </svg>
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
