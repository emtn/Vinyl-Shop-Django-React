import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/ProductScreen';  
import StoreScreen from './screens/StoreScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import ContactScreen from './screens/ContactScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';




function App() {


  return (
  
    <Router>
      
      <Header />

            <Route path='/' exact component={HomeScreen} />
            <Route path='/profile' exact component={ProfileScreen} />
            <Route path='/store/:id' component={ProductScreen} />
            <Route path='/store' exact component={StoreScreen} />
            <Route path='/marketplace' exact component={MarketplaceScreen} />
            <Route path='/contact' exact component={ContactScreen} />
            <Route path='/signup' exact component={SignUpScreen} />
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/cart' exact component={CartScreen} />
            <Route path='/shipping' exact component={ShippingScreen} />
            <Route path='/paymentscreen' exact component={PaymentScreen} />
            <Route path='/placeorder' exact component={PlaceOrderScreen} />
            {/* <Route path='/chat' exact component={Chat} /> */}

       
      
      <Chat />
      <Footer />
        
      
    </Router>  
  );
}

export default App;