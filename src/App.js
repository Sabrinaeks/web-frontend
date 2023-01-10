import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Course from './components/Course';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import {Route, Switch} from 'react-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact to='/' component={Home} />
    </Switch>
    <Home />
    <About />
    <Course />
    <Partners />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
