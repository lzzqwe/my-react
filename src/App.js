import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JsxIntro from "./views/jsxIntro";
import Home from "./views/Home";
import ElementRender from "./views/ElementRender";
import ModuleProps from "./views/ModuleProps";
import LifeCycle from "./views/LifeCycle";
import EventHanding from "./views/EventHanding";
import ConditionsRender from "./views/ConditionsRender";
import FormSheet from "./views/FormSheet";
import StatePromote from "./views/StatePromote";
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/jsxIntro">jsx简介</Link>
          </li>
          <li>
            <Link to="/elementRender">元素渲染</Link>
          </li>
          <li>
            <Link to="/moduleProps">组件&props</Link>
          </li>
          <li>
            <Link to="/lifeCycle">state&&以及生命周期</Link>
          </li>
          <li>
            <Link to="/eventHanding">事件处理</Link>
          </li>
          <li>
            <Link to="/conditionsRender">条件渲染</Link>
          </li>
          <li>
            <Link to="/formSheet">表单</Link>
          </li>
          <li>
            <Link to="/statePromote">状态提升</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/jsxIntro">
            <JsxIntro></JsxIntro>
          </Route>
          <Route path="/elementRender">
            <ElementRender></ElementRender>
          </Route>
          <Route path="/moduleProps">
            <ModuleProps msg="我是props1"></ModuleProps>
          </Route>
          <Route path="/lifeCycle">
            <LifeCycle></LifeCycle>
          </Route>
          <Route path="/eventHanding">
            <EventHanding></EventHanding>
          </Route>
          <Route path="/conditionsRender">
            <ConditionsRender
            ></ConditionsRender>
          </Route>
          <Route path="/formSheet">
            <FormSheet></FormSheet>
          </Route>
          <Route path='/statePromote'>
            <StatePromote></StatePromote>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
