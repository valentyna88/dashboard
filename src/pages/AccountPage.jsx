import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { accounts } from '../data/accounts';
import AttentionBanner from '../modules/account/AttentionBanner/AttentionBanner';
import PerformanceMetrics from '../modules/account/PerformanceMetrics/PerformanceMetrics';
import AccountSummaryCard from '../modules/account/AccountSummary/AccountSummaryCard';
import css from './AccountPage.module.css';

const AccountPage = () => {
  const { id } = useParams();
  const { activeTab, setActiveTab } = useOutletContext();

  const account = accounts.find(acc => acc.id === id);

  useEffect(() => {
    if (activeTab !== 'Accounts') {
      setActiveTab('Accounts');
    }
  }, [activeTab, setActiveTab]);

  if (!account) {
    return <p className={css.notFound}>Account not found</p>;
  }

  return (
    <div className={css.container}>
      <p className={css.breadcrumb}>
        Dashboard // Accounts // <span>{account.name}</span>
      </p>

      <AccountSummaryCard account={account} />
      <AttentionBanner />
      <PerformanceMetrics />
    </div>
  );
};

export default AccountPage;
