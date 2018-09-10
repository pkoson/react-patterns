import React, { Component } from 'react';
import './App.css';
import RenderPropsComponent from './Components/RenderPropsComponent';
import withWindowHeightAndWidth from './HOCs';

const SimpleComponent = ({ width, height }) => (
  <div>
    <span>window width: {width}</span>
    <span>window height: {height}</span>
  </div>
);
const HocComponent = withWindowHeightAndWidth(SimpleComponent);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Patterns</h1>
        </header>
        Render Prop:
        <RenderPropsComponent
          render={props => <SimpleComponent {...props} />}
        />
        HOC Component:
        <HocComponent />
      </div>
    );
  }
}

export default App;
