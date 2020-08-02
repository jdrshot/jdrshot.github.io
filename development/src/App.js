import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Startpage from './components/startpage/Startpage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Startpage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
