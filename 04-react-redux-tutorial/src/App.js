import React, {Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas name="Ryu" age="30" belt="black" />
        <Ninjas name="Sinisa" age="21" belt="black" />
      </div>
    );
  }
}

export default App;
