import React, { Component } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    // console.log('componentDidMount');
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    // console.log('render');
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// function LifeCycle(props) {
//     return (
//         <div className="App">
//            <h1>生命周期</h1>
//         </div>
//     )
// }
export default LifeCycle;
