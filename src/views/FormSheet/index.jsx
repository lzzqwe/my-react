import React, { Component } from "react";
class FormSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleSubmit = (event) => {
    console.log(this.state.value);
    event.preventDefault();
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          名字
          <input
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
export default FormSheet;
