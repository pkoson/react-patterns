# react-patterns
simple project to test some patterns in react app

# Render prop:
- normal react component:
```JavaScript
const SimpleComponent = ({ width, height }) => (
  <div>
    <span>window width: {width}</span>
    <span>window height: {height}</span>
  </div>
);
```
- render prop component:
```JavaScript 
import React, { Component } from 'react';

class RenderPropsComponent extends Component {
  state = { width: 0, height: 0 };
  componentDidMount() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    const { render } = this.props;
    return <div>{render(this.state)}</div>;
  }
}

export default RenderPropsComponent;
```
- App.js or smth:
```JavaScript
<RenderPropsComponent
  render={props => <SimpleComponent {...props} />}
/>
```
