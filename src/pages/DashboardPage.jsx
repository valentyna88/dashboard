import { useOutletContext } from 'react-router-dom';
import MarketIntelligence from '../modules/dashboard/MarketIntelligence/MarketIntelligence';
import MyAccounts from '../modules/dashboard/MyAccounts/MyAccounts';
import PortfolioGoals from '../modules/dashboard/PortfolioGoals/PortfolioGoals';
import QuickActions from '../modules/dashboard/QuickActions/QuickActions';
import WorkQueue from '../modules/dashboard/WorkQueue/WorkQueue';
import css from './DashboardPage.module.css';

const DashboardPage = () => {
  const { activeTab } = useOutletContext();

  return (
    <>
      {activeTab === 'Dashboard' && (
        <>
          <div className={css.grid}>
            <div className={css.left}>
              <WorkQueue />
            </div>
            <div className={css.right}>
              <div className={css.rightGrid}>
                <div className={css.portfolio}>
                  <PortfolioGoals />
                </div>
                <div className={css.sideBlocks}>
                  <QuickActions />
                  <MarketIntelligence />
                </div>
              </div>
            </div>
          </div>
          <div className={css.fullWidth}>
            <MyAccounts />
          </div>
        </>
      )}

      {activeTab === 'Accounts' && (
        <div className={css.fullWidth}>
          <MyAccounts />
        </div>
      )}

      {activeTab !== 'Dashboard' && activeTab !== 'Accounts' && (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'gray' }}>
          <h2>{activeTab} - Coming Soon</h2>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
