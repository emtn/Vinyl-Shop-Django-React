import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/ProductScreen';  
import StoreScreen from './screens/StoreScreen';

import ContactScreen from './screens/ContactScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

import AdminUsers from './screens/AdminUsers';
import AdminVynils from './screens/AdminVynils';
import AdminVinylsEdit from './screens/AdminVinylsEdit';
import AdminVynilsAdd from './screens/AdminVinylsAdd';
import AdminHome from './screens/AdminHome';


function App() {


  return (
  
    <Router>
      
      <Header />

            <Route path='/' exact component={HomeScreen} />
            <Route path='/profile' exact component={ProfileScreen} />
            <Route path='/store/:id' component={ProductScreen} />
            <Route path='/store' exact component={StoreScreen} />
           
            <Route path='/contact' exact component={ContactScreen} />
            <Route path='/signup' exact component={SignUpScreen} />
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/cart' exact component={CartScreen} />
            <Route path='/shipping' exact component={ShippingScreen} />
            <Route path='/paymentscreen' exact component={PaymentScreen} />
            <Route path='/placeorder' exact component={PlaceOrderScreen} />

            <Route path='/admin/home' exact component={AdminHome} />
            <Route path='/admin/vinyls' exact component={AdminVynils} />
            <Route path='/admin/vinyls/add' exact component={AdminVynilsAdd} />
            <Route path='/admin/vinyls/edit' exact component={AdminVinylsEdit} />
            <Route path='/admin/users' exact component={AdminUsers} />
           
            

       
      
      <Chat />
      <Footer />
        
      
    </Router>  
  );
}

export default App;