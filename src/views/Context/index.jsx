/* eslint-disable no-useless-constructor */
import "./index.css";
import React, { Component } from "react";
import {ThemeContext} from '../../context/theme'
class Button extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = ThemeContext
  render() {
    return (
      <div>
        <button className={this.context}>{this.context}</button>
      </div>
    );
  }
}
class ThemeButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Button></Button>;
  }
}

const Context = (props) => {
  return (
    <div className="App">
      <ThemeButton></ThemeButton>
    </div>
  );
};
export default Context;
