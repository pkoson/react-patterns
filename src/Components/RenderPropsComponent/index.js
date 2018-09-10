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
