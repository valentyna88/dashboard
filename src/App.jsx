import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AccountPage from './pages/AccountPage';
import Layout from './Layout/Layout';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="account/:id" element={<AccountPage />} />
      </Route>
      <Route path="*" element={<div>404 - Page not found</div>} />
    </Routes>
  );
};

export default App;
