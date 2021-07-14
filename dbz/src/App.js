import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Zfighters from './components/Zfighters';


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
        <Route path="/about" component={About} exact>
          <About />
        </Route>
        <Route path="/zfighters" component={Zfighters} exact>
          <Zfighters />
        </Route>
        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
