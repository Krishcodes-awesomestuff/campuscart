import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Divider } from '@mui/material';
import { CreditCard, Printer } from 'lucide-react';

const CartPanelRoot = styled(Box)({
  backgroundColor: '#fff',
  padding: '24px',
  borderLeft: '1px solid #eee',
  position: 'sticky',
  top: 0,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
});

const CartPanel = () => {
  return (
    <CartPanelRoot>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Your Order
      </Typography>

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {/* Cart items will go here */}
      </Box>

      <Box sx={{ mt: 'auto' }}>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>Subtotal</Typography>
          <Typography>₹0.00</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography>Tax (18%)</Typography>
          <Typography>₹0.00</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">₹0.00</Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          startIcon={<CreditCard />}
          sx={{ mb: 2 }}
        >
          Proceed to Payment
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<Printer />}
        >
          Print Invoice
        </Button>
      </Box>
    </CartPanelRoot>
  );
};

export default CartPanel;