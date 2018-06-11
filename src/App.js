import React, { Component } from 'react';
import Header from './components/Header';
import WorkHeaderSection from './components/WorkHeaderSection';
import WorkSection from './components/WorkSection';
import PortHeaderSection from './components/PortHeaderSection';
import PortSection from './components/PortSection';
import WebHeaderSection from './components/WebHeaderSection';
import WebSection from './components/WebSection';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <WorkHeaderSection/>
          <WorkSection/>
          <PortHeaderSection BgText="Graphic Design" FrontText="Graphic Design"/>
          <PortSection/>
          <WebHeaderSection/>
          <WebSection/>
          <Footer/>
        </div>
    );
  }
}

export default App;
