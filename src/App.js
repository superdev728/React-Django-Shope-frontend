import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Index_Screen from './screens/Index_Screen'
import ShopScreen from './screens/ShopScreen'
import HomeProductScreen from './screens/HomeProductScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen' 
import PaymentScreen from './screens/PaymentScreen' 
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen' 
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen' 
import OrderListScreen from './screens/OrderListScreen'
import IndexSearchScreen from './screens/IndexSearchScreen' 
import OpenYourStoreScreen from './screens/OpenYourStoreScreen'
import GrowBusinessScreen from './screens/GrowBusinessScreen'
import ResultProductScreen from './screens/ResultProductScreen'  
import ResultShopScreen from './screens/ResultShopScreen' 


function App() {
  return (
    <Router>
        <Header /> 
          <main className="py-4">
            <Container>
              <Route path='/' component={Index_Screen}  exact/>
              <Route path='/vendor' component={OpenYourStoreScreen} />
              <Route path='/business' component={GrowBusinessScreen} />
              
              <Route path='/shops' component={HomeScreen} />
              <Route path='/shop/:id' component={ShopScreen} />
              <Route path='/search_shop' component={IndexSearchScreen} /> 
              <Route path='/result_shops' component={ResultShopScreen} />

              <Route path='/products' component={HomeProductScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/result_products' component={ResultProductScreen} />


              <Route path='/cart/:id?' component={CartScreen} />
              <Route path='/shipping' component={ShippingScreen} />
              <Route path='/payment' component={PaymentScreen} />
              <Route path='/placeorder' component={PlaceOrderScreen} />
              <Route path='/order/:id' component={OrderScreen} />

              <Route path='/login_client' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/profile' component={ProfileScreen} />

              <Route path='/admin/userlist' component={UserListScreen} />
              <Route path='/admin/user/:id/edit' component={UserEditScreen} />

              <Route path='/admin/productlist' component={ProductListScreen} />
              <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

              <Route path='/admin/orderlist' component={OrderListScreen} />
            </Container>
          </main>     
        <Footer />
    </Router>
  );
}

export default App;
