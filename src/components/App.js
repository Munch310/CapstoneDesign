import React from 'react';
import AppShell from './AppShell';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
    }
  }
  render(){
    return (
      <Router>
        <AppShell>
          <div>
            <Routes>
            
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/texts" element={<Texts/>}/>
              <Route exact path="/words" element={<Words/>}/>
            </Routes>
          </div>
        </AppShell>
      </Router>
      );

  }
}

export default App;