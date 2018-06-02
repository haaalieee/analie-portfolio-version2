import React, { Component } from 'react';
import Header from './components/Header'
import WorkSection from './components/WorkSection'


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <WorkSection  
                       trigger="trigger-work"   
                       company="Schmuzter"
                       job="Web Developer + Motion Content Designer"
                       date="2017 - 2018"
                       role="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lectus sagittis tortor feugiat venenatis. Mauris vulputate, eros quis porttitor congue, magna dui blandit diam, quis volutpat nulla mi at felis. Nunc at pharetra ante, ac lacinia justo. Nunc facilisis dolor nec nisl aliquet, ac molestie turpis hendrerit. Proin fringilla maximus felis id tempus. Sed ornare quam at ligula pulvinar vestibulum. Pellentesque ac molestie ipsum. Mauris vel dui sit amet erat pharetra fringilla. Pellentesque eu tincidunt dui. Sed ac fermentum ipsum."
                       />s
        </div>
    );
  }
}

export default App;
