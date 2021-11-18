import React from 'react';
import AppShell from './components/AppShell';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
    }
  }
  render(){
    return (
      <AppShell/>
    );

  }
}

export default App;