import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
class FormSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.myRef = React.createRef()
  }
  handleSubmit = (event) => {
    console.log(this.state.value);
    event.preventDefault();
  };
  show = () => {
    const node = this.myRef.current
    const { history, location, match } = this.props;
    console.log(location);
    console.log(match);
    console.log(history);
    console.log(node);
  };
  back = () => {
    const { history } = this.props;
    history.goBack();
  };
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const { location } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            名字
            <input
            ref={this.myRef}
              onChange={this.handleChange}
              value={this.state.value}
              type="text"
            />
          </label>
          <input type="submit" value="提交" />
        </form>
        <Button type="primary" onClick={this.show}>
          显示具体
        </Button>
        <p>{location.param?.name ?? "11"}</p>
        <p>{location?.search ?? "22"}</p>
        <Button type="primary" onClick={this.back}>
          返回
        </Button>
      </>
    );
  }
}
export default withRouter(FormSheet);
