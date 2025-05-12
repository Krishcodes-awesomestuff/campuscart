import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const ProductCard = styled(Card)({
  borderRadius: '12px',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  }
});

const QuantityButton = styled(Button)({
  minWidth: '36px',
  padding: '4px',
  borderRadius: '18px'
});

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Cappuccino',
      price: 120,
      image: 'placeholder.jpg'
    },
    // Add more products
  ];

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ₹{product.price}
              </Typography>
              
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <QuantityButton variant="outlined" size="small">
                  <Minus size={16} />
                </QuantityButton>
                <Typography>1</Typography>
                <QuantityButton variant="outlined" size="small">
                  <Plus size={16} />
                </QuantityButton>
              </Box>

              <Button
                variant="contained"
                startIcon={<ShoppingCart />}
                fullWidth
                sx={{ mt: 2 }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </ProductCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;