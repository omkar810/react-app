import logo from './logo.svg';
import './App.css';
import Home from "./Template/Home";
import Portfolio from "./Template/Portfolio";
import About from "./Template/About";
import Contact from "./Template/Contact";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import Login from "./Template/Login";
import Register from "./Template/Register";
import Forgot from './Template/Forgot';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
      <Route path="/portfolio">
        <Header />
        <Portfolio />
        <Footer />
      </Route>
      <Route path="/about">
        <Header />
        <About />
        <Footer />
      </Route>
      <Route path="/contact">
        <Header />
        <Contact />
        <Footer />
      </Route>
      <Route path="/login">
        <Header />
        <Login />
        <Footer />
      </Route>
      <Route path="/register">
        <Header />
        <Register />
        <Footer />
      </Route>
      <Route path="/forgot">
        <Header />
        <Forgot />
        <Footer />
      </Route>
    </Switch>
  )
}
export default App;
