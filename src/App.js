import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JsxIntro from "./views/jsxIntro";
import Home from './views/Home'
import ElementRender from "./views/ElementRender";
import ModuleProps from "./views/ModuleProps";
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
        </ul>
        <Switch>
          <Route path="/jsxIntro">
            <JsxIntro></JsxIntro>
          </Route>
          <Route path='/elementRender'>
            <ElementRender></ElementRender>
          </Route>
          <Route path='/moduleProps'>
            <ModuleProps msg='我是props'></ModuleProps>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
