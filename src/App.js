import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Posts from './Pages/Posts'



function App() {
  const [isLogIn, setIsLogIn] = useState(false)

  return (
    <Router>
      <nav>
        <span className="logo">React Router</span>

        <div className="links">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/profile/">Profile</Link>
        </div>
      </nav>

      <div className="center-button">
        <button onClick={()=>setIsLogIn(!isLogIn)}>
          {!isLogIn ? "Log in" : "Log out"}
        </button>
      </div>


      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/profile">
          <Profile isLogIn={isLogIn}></Profile>
        </Route>
        <Route path="/posts/:id" component={Posts}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </Router>

  );
}

export default App;
