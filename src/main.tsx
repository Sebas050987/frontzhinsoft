import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/router/routes';
createRoot(document.getElementById('root')!).render(
  <Router>
  <AppRoutes />
</Router>,
)
