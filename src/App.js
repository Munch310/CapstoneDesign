import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
    }
  }
  render(){
    return (
        <h3>드디어 되네</h3>
    );

  }
}

export default App;