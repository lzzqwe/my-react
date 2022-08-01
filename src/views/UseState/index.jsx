import React, { useState, useEffect, useRef, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      throw new Error("wwww");
  }
};
const UseState = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState({
    text: "learn react hook",
  });
  const p1 = useRef(null);
  const history = useHistory();
  /**
   * 描述
   * @date 2022-08-01
   * @params pathname 路径名字
   * @params search 字符串查询名字
   * @params param 提交的参数
   * @returns {any}
   */
  const jump = () => {
    history.push({
      pathname: "/formSheet",
      search: "?some=search-string",
      param: {
        name: "lzz",
      },
    });
  };
  const handleSet = () => {
    console.log(p1.current);
    // setCount((state) => {
    //   return state + 1;
    // });
  };
  const handleTodo = () => {
    setTodo((state) => {
      return { ...state, text: "ww" };
    });
  };

  useEffect(() => {
    document.title = `you are click ${state.count} num`;
  });
  return (
    <div className="App">
      <p ref={p1}>{state.count}</p>
      <p>{todo.text}</p>
      <Button onClick={handleSet}>增加</Button>
      <Button
       className="ml"
        type="primary"
        onClick={() => {
          dispatch({
            type: "increase",
          });
        }}
      >
        增加1
      </Button>
      <Button
        className="ml"
        type="primary"
        onClick={() => {
          dispatch({
            type: "decrease",
          });
        }}
      >
        减少1
      </Button>
      <Button className="ml" onClick={handleTodo}>
        改变
      </Button>
      <Button className="ml" onClick={jump}>
        我要跳转去别的页面
      </Button>
    </div>
  );
};
export default UseState;
