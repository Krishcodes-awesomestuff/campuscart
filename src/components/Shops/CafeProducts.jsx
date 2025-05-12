import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, Typography, Button, Box, CircularProgress } from '@mui/material';
import { Plus, Minus, ShoppingCart, Coffee, GlassWater, Coffee as CoffeeCup, Sandwich, IceCream } from 'lucide-react';

const CategoryNav = styled(Box)({
  display: 'flex',
  gap: '16px',
  padding: '16px',
  margin: '0 -16px',
  overflowX: 'auto',
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none'
});

const CategoryButton = styled(Button)(({ theme, active }) => ({
  minWidth: '140px',
  padding: '10px 20px',
  borderRadius: '10px',
  backgroundColor: active ? theme.palette.primary.main : '#fff',
  color: active ? '#fff' : theme.palette.text.primary,
  border: active ? 'none' : '1px solid #e0e0e0',
  boxShadow: active ? '0 4px 12px rgba(76, 175, 80, 0.2)' : 'none',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : '#f5f5f5',
    transform: 'translateY(-2px)',
    transition: 'all 0.2s ease'
  }
}));

const ProductCard = styled(Card)({
  height: '220px',
  width: '100%',
  borderRadius: '16px',
  border: '1px solid #f0f0f0',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
  }
});

const ProductContent = styled(CardContent)({
  padding: '16px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '12px'
});

// Add a badge for popular items or special offers
const Badge = styled(Box)({
  position: 'absolute',
  top: '12px',
  right: '12px',
  padding: '4px 8px',
  borderRadius: '6px',
  backgroundColor: '#ff5722',
  color: '#fff',
  fontSize: '0.75rem',
  fontWeight: 600
});

const ProductTitle = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.2,
  marginBottom: '4px'
});

const ProductDescription = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.875rem',
  color: '#666',
  flexGrow: 1,
  lineHeight: 1.4
});

const ProductPrice = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#1a1a1a',
  marginBottom: '8px'
});

const QuantityButton = styled(Button)({
  minWidth: '32px',
  height: '32px',
  padding: 0,
  borderRadius: '50%',
  border: '1px solid #e0e0e0',
  '&:hover': {
    border: '1px solid #4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.04)'
  }
});

const QuantityText = styled(Typography)({
  fontFamily: '"Inter", sans-serif',
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#1a1a1a',
  width: '32px',
  textAlign: 'center'
});

const products = [
  {
    id: 1,
    name: 'Cappuccino',
    price: 159,
    description: 'Classic Italian coffee with steamed milk foam',
    category: 'Hot Coffees'
  },
  {
    id: 2,
    name: 'Cafe Latte',
    price: 149,
    description: 'Espresso with steamed milk',
    category: 'Hot Coffees'
  },
  {
    id: 3,
    name: 'Espresso Shot',
    price: 99,
    description: 'Pure coffee concentrate',
    category: 'Hot Coffees'
  },
  {
    id: 4,
    name: 'Cafe Mocha',
    price: 169,
    description: 'Coffee with chocolate and milk',
    category: 'Hot Coffees'
  },
  {
    id: 5,
    name: 'Filter Coffee',
    price: 129,
    description: 'South Indian style coffee',
    category: 'Hot Coffees'
  },
  {
    id: 6,
    name: 'Classic Cold Coffee',
    price: 179,
    description: 'Chilled coffee with ice cream',
    category: 'Cold Beverages'
  },
  {
    id: 7,
    name: 'Iced Latte',
    price: 169,
    description: 'Chilled espresso with milk',
    category: 'Cold Beverages'
  },
  {
    id: 8,
    name: "Devil's Own",
    price: 199,
    description: 'Signature cold coffee with chocolate',
    category: 'Cold Beverages'
  },
  {
    id: 9,
    name: 'Masala Chai',
    price: 89,
    description: 'Indian spiced tea',
    category: 'Tea & Other Drinks'
  },
  {
    id: 10,
    name: 'Green Tea',
    price: 99,
    description: 'Healthy green tea',
    category: 'Tea & Other Drinks'
  },
  {
    id: 11,
    name: 'Veg Cheese Sandwich',
    price: 149,
    description: 'Grilled sandwich with vegetables and cheese',
    category: 'Snacks & Quick Bites'
  },
  {
    id: 12,
    name: 'Chicken Tikka Sandwich',
    price: 169,
    description: 'Grilled sandwich with spiced chicken',
    category: 'Snacks & Quick Bites'
  },
  {
    id: 13,
    name: 'Brownie with Chocolate Sauce',
    price: 129,
    description: 'Warm chocolate brownie',
    category: 'Desserts'
  },
  {
    id: 14,
    name: 'Red Velvet Slice',
    price: 149,
    description: 'Classic red velvet cake',
    category: 'Desserts'
  }
];

const categories = [
  { name: 'All', icon: null },
  { name: 'Hot Coffees', icon: <Coffee size={18} /> },
  { name: 'Cold Beverages', icon: <GlassWater size={18} /> },
  { name: 'Tea & Other Drinks', icon: <CoffeeCup size={18} /> },
  { name: 'Snacks & Quick Bites', icon: <Sandwich size={18} /> },
  { name: 'Desserts', icon: <IceCream size={18} /> }
];

const CafeProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Box sx={{ p: 2 }}>
      <Typography 
            variant="h4" 
            sx={{ 
              fontFamily: '"Inter", sans-serif',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#000000',
              mb: 2
            }}
          >
            Cafe Coffee Day
          </Typography>

      <CategoryNav>
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            active={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
            startIcon={category.icon}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryNav>

      <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 2 }}>
        <Grid container spacing={2.5} sx={{ mt: 2, position: 'relative', minHeight: '200px' }}>
          {loading ? (
            <Box sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CircularProgress />
            </Box>
          ) : (
            filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard>
                  <ProductContent>
                    <Box>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductDescription 
                        sx={{ 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {product.description}
                      </ProductDescription>
                    </Box>
                    
                    <Box>
                      <ProductPrice sx={{ mb: 1 }}>₹{product.price}</ProductPrice>
                      <Button
                        variant="contained"
                        startIcon={<ShoppingCart size={16} />}
                        fullWidth
                        sx={{ 
                          py: 0.75,
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          textTransform: 'none',
                          borderRadius: '10px',
                          background: 'linear-gradient(45deg, #4CAF50 30%, #66BB6A 90%)',
                          boxShadow: 'none',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #43A047 30%, #4CAF50 90%)',
                            boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                            transform: 'translateY(-1px)'
                          }
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </ProductContent>
                </ProductCard>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default CafeProducts;