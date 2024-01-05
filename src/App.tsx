import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from '@/config/routes';

// COMPONENTS
import Dashboard from '@/pages/Dashboard';
import Vulnerability from './pages/Vulnerability';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // amount of time data in cache stays valid until refetched
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Dashboard />} />
          <Route path={routes.vulnerability} element={<Vulnerability />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
