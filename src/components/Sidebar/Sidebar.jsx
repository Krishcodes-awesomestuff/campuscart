import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { Store, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarRoot = styled(Box)({
  backgroundColor: '#ffffff',
  padding: '28px 24px',
  borderRight: '1px solid rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  top: 0,
  height: '100vh',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.03)'
});

const LogoText = styled(Typography)({
  fontSize: '26px',
  fontWeight: 800,
  color: '#000',
  marginBottom: '32px',
  letterSpacing: '-0.5px',
  fontFamily: '"Inter", sans-serif'
});

const ShopButton = styled(Button)(({ theme }) => ({
  padding: '14px 16px',
  marginBottom: '10px',
  borderRadius: '12px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  color: '#2c3e50',
  border: '1px solid #edf2f7',
  backgroundColor: '#ffffff',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 500,
  fontSize: '0.95rem',
  '&:hover': {
    backgroundColor: '#f8fafc',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0'
  },
  '& .MuiButton-startIcon': {
    marginRight: '12px',
    color: '#4a5568'
  },
  transition: 'all 0.2s ease'
}));

const shops = [
  { name: 'Cafe Coffee Day', icon: <Store /> },
  { name: 'REC Mart', icon: <Store /> },
  { name: 'REC Cafe', icon: <Store /> },
  { name: 'HEKKA', icon: <Store /> },
  { name: 'Six Sense - Chat', icon: <Store /> },
  { name: 'Six Sense - Juice', icon: <Store /> },
  // Add more shops
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleShopClick = (shopName) => {
    const path = shopName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/shop/${path}`);
  };

  return (
    <SidebarRoot>
      <LogoText>CampusCart</LogoText>
      
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 4, 
          fontFamily: '"Inter", sans-serif',
          fontSize: '1.1rem',
          color: '#4a5568',
          fontWeight: 600 
        }}
      >
        Welcome, Krishna!
      </Typography>
      
      <Box sx={{ flex: 1 }}>
        {shops.map((shop) => (
          <ShopButton
            key={shop.name}
            startIcon={shop.icon}
            fullWidth
            onClick={() => handleShopClick(shop.name)}
          >
            {shop.name}
          </ShopButton>
        ))}
      </Box>

      <Button
        startIcon={<LogOut size={18} />}
        color="error"
        sx={{ 
          mt: 'auto',
          py: 1.5,
          borderRadius: '10px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          textTransform: 'none',
          border: '1px solid rgba(239, 68, 68, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(239, 68, 68, 0.04)',
            border: '1px solid rgb(239, 68, 68)'
          }
        }}
      >
        Sign Out
      </Button>
    </SidebarRoot>
  );
};

export default Sidebar;