import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'


function App() {
  return (
    <Router>
      <nav>
        <span className="logo">React Router</span>

        <div className="links">
          <Link to="/">Home</Link>

          <Link to="/About">About</Link>

          <Link to="/Profile">Profile</Link>
        </div>



      </nav>


      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Profile" component={Profile}></Route>

      </Switch>
    </Router>

  );
}

export default App;
