import { styled } from '@mui/material/styles';
import { Box, TextField, InputAdornment } from '@mui/material';
import { Search } from 'lucide-react';
import ProductGrid from './ProductGrid';

const MainContentRoot = styled(Box)({
  padding: '24px',
  backgroundColor: '#F9F9F9',
  height: '100vh',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#ccc',
    borderRadius: '4px'
  }
});

const SearchBar = styled(TextField)({
  marginBottom: '24px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#fff'
  }
});

const MainContent = () => {
  return (
    <MainContentRoot>
      <SearchBar
        fullWidth
        placeholder="Search products..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={20} />
            </InputAdornment>
          ),
        }}
      />
      <ProductGrid />
    </MainContentRoot>
  );
};

export default MainContent;