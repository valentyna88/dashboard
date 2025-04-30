import { useState } from 'react';
import { mockData } from '../../../data/mockData';
import css from './WorkQueue.module.css';

const tabs = [
  { label: 'Assigned to me', count: 12 },
  { label: 'Pending Review', count: 8 },
  { label: 'Referrals', count: 3 },
];

const WorkQueue = () => {
  const [activeTab, setActiveTab] = useState('Assigned to me');

  return (
    <section className={css.workQueue}>
      <div className={css.header}>
        <h2>Work Queue</h2>
        <div className={css.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.label}
              className={`${css.tab} ${
                activeTab === tab.label ? css.active : ''
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label} <span>({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      <table className={css.table}>
        <thead>
          <tr>
            <th>Originator</th>
            <th>Client/Line</th>
            <th>Type</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td>
                <span className={css.initials}>{item.initials}</span>
                {item.originator}
              </td>
              <td>
                <strong>{item.client}</strong>
                <br />
                <small>{item.line}</small>
              </td>
              <td>{item.type}</td>
              <td>
                <span
                  className={`${css.status} ${
                    css[item.status.replace(' ', '').toLowerCase()]
                  }`}
                ></span>
                {item.status}
              </td>
              <td className={css.actions}>
                <div className={css.dateWithDots}>
                  <span className={css.date}>{item.created}</span>
                  <button className={css.dots}>⋮</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WorkQueue;
