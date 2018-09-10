import React, { Component } from 'react';

export default function withWindowHeightAndWidth(WrappedComponent) {
  class HOC extends Component {
    state = { width: 0, height: 0 };
    componentDidMount() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  }

  return HOC;
}
