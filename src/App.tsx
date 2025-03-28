import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Home from './pages/Home';
import { NotFound } from './routers/notFound';
import Login from './routers/logIn';
import Singup from './routers/singup';
import CoffeeBeansProduct from './routers/coffeeBeansProducts';
import Powders from './routers/powders';
import DripBack from './routers/dripBack';
import Syrups from './routers/syrups';
import Accesory from './routers/accesory';
import AllProducts from './routers/allProducts';
import OurBlog from './routers/ourBlog';
import Movie from './routers/movie';
import Cart from './routers/cart';
import UserPanel from './routers/userPanel';
import ChangePassword from './routers/changePassword';
import AdminPanel from './routers/adminPanel';
import PanleAdminUsers from './routers/adminPanelUsers';
import ShopsPanelAdmin from './routers/shopsPanelAdmin';
import FullTextArticle from './routers/fullTextArticle';
import Article from './parts/article';
import CallToUs from './routers/callUs';
import CallUsAdmin from './routers/callUsAdmin';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles/:id' element={<FullTextArticle />} />
          <Route path='/articles' element={<Article />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singUp' element={<Singup />} />
          <Route path='/coffeeBeans' element={<CoffeeBeansProduct />} />
          <Route path='/powders' element={<Powders />} />
          <Route path='/dripBack' element={<DripBack />} />
          <Route path='/syrups' element={<Syrups />} />
          <Route path='/accesory' element={<Accesory />} />
          <Route path='/allProducts' element={<AllProducts />} />
          <Route path='/ourBlog' element={<OurBlog />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/userPanel' element={<UserPanel />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/panelAdmin' element={<AdminPanel />} />
          <Route path='/panelAdmin-users' element={<PanleAdminUsers />} />
          <Route path='/panelAdmin-shops' element={<ShopsPanelAdmin />} />
          <Route path='/call-to-us' element={<CallToUs />} />
          <Route path='/messages' element={<CallUsAdmin />} />
        </Routes>
    </Provider>
  );
}

export default App;
