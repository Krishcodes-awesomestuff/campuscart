import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Layout/Dashboard';
import CafeProducts from './components/Shops/CafeProducts';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    background: {
      default: '#F9F9F9',
    },
    primary: {
      main: '#4CAF50',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<div>Select a shop to view products</div>} />
            <Route path="shop/cafe-coffee-day" element={<CafeProducts />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
