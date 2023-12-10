import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import CheckOutPage from './pages/CheckoutPage';

function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route index element={<Home />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='cart' element={<CheckOutPage />} />
      </Routes>
    </>
  );
}

export default App;
