import "./index.css";
import React, { Component } from "react";

function BoilingVerdict(props) {
  if (props.celsius > 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
}
const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      temperature: event.target.value,
    });
  };
  render() {
    const { scale } = this.props;
    return (
      <div className="App w">
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
        </fieldset>
        <input
          onChange={this.handleChange}
          value={this.state.temperature}
          type="text"
        />
      </div>
    );
  }
}
class StatePromote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      temperature: event.target.value,
    });
  };
  render() {
    return (
      <div className="App w">
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            onChange={this.handleChange}
            value={this.state.temperature}
            type="text"
          />
        </fieldset>
        <BoilingVerdict celsius={this.state.temperature}></BoilingVerdict>
        {/* <TemperatureInput scale='c'></TemperatureInput>
        <TemperatureInput scale='f'></TemperatureInput> */}
      </div>
    );
  }
}

export default StatePromote;
