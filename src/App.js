import React, { Component } from 'react';
import Header from './components/Header'
import WorkSectionCon from './components/WorkSectionCon'


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <WorkSectionCon/>
        </div>
    );
  }
}

export default App;
