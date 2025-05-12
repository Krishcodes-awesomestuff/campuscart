import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardContent, Typography, Button, Box, CircularProgress } from '@mui/material';
import { Plus, Minus, ShoppingCart, Coffee, GlassWater, Coffee as CoffeeCup, Sandwich, IceCream } from 'lucide-react';

const CategoryNav = styled(Box)({
  display: 'flex',
  gap: '12px',
  padding: '20px',
  marginBottom: '32px',
  overflowX: 'auto',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
  border: '1px solid rgba(0, 0, 0, 0.06)',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

const CategoryButton = styled(Button)(({ theme, active }) => ({
  minWidth: '140px',
  padding: '10px 20px',
  borderRadius: '12px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  color: active ? '#ffffff' : '#2c3e50',
  backgroundColor: active ? theme.palette.primary.main : '#ffffff',
  border: active ? 'none' : '1px solid #edf2f7',
  boxShadow: active ? '0 4px 12px rgba(76, 175, 80, 0.2)' : 'none',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : '#f8fafc',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  '& .MuiButton-startIcon': {
    marginRight: '12px',
    color: active ? '#ffffff' : '#4a5568'
  },
  transition: 'all 0.2s ease'
}));

const ProductCard = styled(Card)({
  height: '240px',
  width: '100%',
  borderRadius: '20px',
  border: '1px solid rgba(0, 0, 0, 0.06)',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)'
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
    name: 'Americano',
    price: 129,
    description: 'Espresso with hot water',
    category: 'Hot Coffees'
  },
  {
    id: 5,
    name: 'Filter Coffee',
    price: 119,
    description: 'Traditional South Indian filter coffee',
    category: 'Hot Coffees'
  },
  {
    id: 6,
    name: 'Iced Latte',
    price: 169,
    description: 'Chilled espresso with milk',
    category: 'Cold Beverages'
  },
  {
    id: 7,
    name: 'Cold Coffee',
    price: 179,
    description: 'Blended coffee with ice cream',
    category: 'Cold Beverages'
  },
  {
    id: 8,
    name: 'Frappe',
    price: 189,
    description: 'Blended coffee with whipped cream',
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
    description: 'Pure green tea leaves',
    category: 'Tea & Other Drinks'
  },
  {
    id: 11,
    name: 'Hot Chocolate',
    price: 149,
    description: 'Rich chocolate with steamed milk',
    category: 'Tea & Other Drinks'
  },
  {
    id: 12,
    name: 'Veg Sandwich',
    price: 129,
    description: 'Grilled vegetables with cheese',
    category: 'Snacks & Quick Bites'
  },
  {
    id: 13,
    name: 'Chicken Sandwich',
    price: 149,
    description: 'Grilled chicken with mayo',
    category: 'Snacks & Quick Bites'
  },
  {
    id: 14,
    name: 'French Fries',
    price: 99,
    description: 'Crispy potato fries',
    category: 'Snacks & Quick Bites'
  },
  {
    id: 15,
    name: 'Chocolate Brownie',
    price: 129,
    description: 'Warm chocolate brownie',
    category: 'Desserts'
  },
  {
    id: 16,
    name: 'Red Velvet Cake',
    price: 149,
    description: 'Classic red velvet cake slice',
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
    <Box sx={{ 
      p: 3,
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '2rem',
          fontWeight: 700,
          color: '#000000',
          mb: 4,
          letterSpacing: '-0.5px'
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

      <Box sx={{ 
        maxWidth: '1400px', 
        mx: 'auto',
        px: 2 
      }}>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard>
                <ProductContent>
                  <Box>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDescription>
                      {product.description}
                    </ProductDescription>
                  </Box>
                  <Box>
                    <ProductPrice>₹{product.price}</ProductPrice>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCart size={16} />}
                      fullWidth
                      sx={{ 
                        py: 1.2,
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: '12px',
                        background: 'linear-gradient(45deg, #4CAF50 30%, #66BB6A 90%)',
                        boxShadow: 'none',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #43A047 30%, #4CAF50 90%)',
                          boxShadow: '0 6px 16px rgba(76, 175, 80, 0.3)',
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
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CafeProducts;