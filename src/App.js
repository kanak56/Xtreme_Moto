import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import PopularItems from './Pages/PopularItems/PopularItems';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder.js';
import ProductDetails from './Pages/PopularItems/ProductDetails/ProductDetails';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/productDetails">
              <ProductDetails />
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/popularItems">
              <PopularItems />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Redirect to='/' />
          </Switch>
          <Footer />
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
