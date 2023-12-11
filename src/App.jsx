import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import CheckOutPage from './pages/CheckoutPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='cart' element={<CheckOutPage />} />
          <Route path='*' element={<NotFound />} />{' '}
        </Route>
      </Routes>
    </>
  );
}

export default App;
