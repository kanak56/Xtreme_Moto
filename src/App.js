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
import Services from './Pages/Services/Services';
import ContactUs from './Pages/ContactUs/ContactUs';
import Login from './Pages/Login/Login';
import PopularItems from './Pages/PopularItems/PopularItems';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/popularItems">
            <PopularItems />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Router >
    </div >
  );
}

export default App;
