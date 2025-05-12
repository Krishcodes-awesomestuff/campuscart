import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { Store, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarRoot = styled(Box)({
  backgroundColor: '#fff',
  padding: '24px',
  borderRight: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  position: 'sticky',
  top: 0,
  height: '100vh'
});

const LogoText = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  color: '#000',
  marginBottom: '32px',
  letterSpacing: '-0.5px'
});

const ShopButton = styled(Button)({
  padding: '12px',
  marginBottom: '8px',
  borderRadius: '12px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  transition: 'all 0.2s ease'
});

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
      
      <Typography variant="h6" sx={{ mb: 4 }}>
        Welcome, Krishna!
      </Typography>
      
      <Box sx={{ flex: 1 }}>
        {shops.map((shop) => (
          <ShopButton
            key={shop.name}
            startIcon={shop.icon}
            fullWidth
            variant="outlined"
            onClick={() => handleShopClick(shop.name)}
          >
            {shop.name}
          </ShopButton>
        ))}
      </Box>

      <Button
        startIcon={<LogOut />}
        color="error"
        variant="outlined"
        sx={{ mt: 'auto' }}
      >
        Sign Out
      </Button>
    </SidebarRoot>
  );
};

export default Sidebar;