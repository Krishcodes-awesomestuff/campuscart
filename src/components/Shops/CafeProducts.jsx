import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const ProductCard = styled(Card)({
  borderRadius: '12px',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }
});

const products = [
  {
    id: 1,
    name: 'Cappuccino',
    price: 120,
    description: 'Rich espresso with steamed milk foam',
    category: 'Hot Coffee'
  },
  {
    id: 2,
    name: 'Cold Coffee',
    price: 140,
    description: 'Chilled coffee with ice cream',
    category: 'Cold Coffee'
  },
  {
    id: 3,
    name: 'Chocolate Brownie',
    price: 90,
    description: 'Warm chocolate brownie',
    category: 'Desserts'
  },
  // Add more CCD products
];

const CafeProducts = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {product.description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ₹{product.price}
              </Typography>
              
              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button variant="outlined" size="small">
                  <Minus size={16} />
                </Button>
                <Typography>1</Typography>
                <Button variant="outlined" size="small">
                  <Plus size={16} />
                </Button>
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

export default CafeProducts;