import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Container from '../components/Container/Container';

const Layout = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <>
      <Header />
      <Container>
        <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          <Outlet context={{ activeTab, setActiveTab }} />
        </main>
      </Container>
    </>
  );
};

export default Layout;
