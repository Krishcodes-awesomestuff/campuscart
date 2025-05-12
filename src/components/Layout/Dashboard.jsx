import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import CartPanel from '../Cart/CartPanel';

const DashboardRoot = styled('div')({
  display: 'grid',
  gridTemplateColumns: '240px 1fr 320px',
  minHeight: '100vh',
  backgroundColor: '#F9F9F9'
});

const MainContentWrapper = styled('div')({
  padding: '24px',
  overflowY: 'auto',
  height: '100vh'
});

const Dashboard = () => {
  return (
    <DashboardRoot>
      <Sidebar />
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
      <CartPanel />
    </DashboardRoot>
  );
};

export default Dashboard;