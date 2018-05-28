import React, { Component } from 'react';
import Header from './components/Header'
import WorkSection from './components/WorkSection'


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <WorkSection/>
        </div>
    );
  }
}

export default App;
