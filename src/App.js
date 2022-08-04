import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { ThemeContext } from "./context/theme";
import JsxIntro from "./views/jsxIntro";
import Home from "./views/Home";
import ElementRender from "./views/ElementRender";
import ModuleProps from "./views/ModuleProps";
import LifeCycle from "./views/LifeCycle";
import EventHanding from "./views/EventHanding";
import ConditionsRender from "./views/ConditionsRender";
import FormSheet from "./views/FormSheet";
import StatePromote from "./views/StatePromote";
import CombinationExtend from "./views/CombinationExtend";
import Context from "./views/Context";
import ErrorBoundary from "./views/ErrorBoundary";
import UseState from "./views/UseState";
function App() {
  return (
    <Router className="App">
      <Layout>
        <Sider>
          <ul>
            <li className='item'>
              <NavLink exact activeClassName="selected" to="/">
                首页
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/jsxIntro">
                jsx简介
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/elementRender">
                元素渲染
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/moduleProps">
                组件&props
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/lifeCycle">
                state&&以及生命周期
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/eventHanding">
                事件处理
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/conditionsRender">
                条件渲染
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/formSheet">
                表单
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/statePromote">
                状态提升
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/combinationExtend">
                组合以及继承
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/context">
                爷孙组件以及更深层的组件传值
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/errorBoundary">
                错误边界
              </NavLink>
            </li>
            <li className='item'>
              <NavLink activeClassName="selected" to="/useState">
                USESTATE
              </NavLink>
            </li>
          </ul>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
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
                <ConditionsRender></ConditionsRender>
              </Route>
              <Route path="/formSheet">
                <FormSheet></FormSheet>
              </Route>
              <Route path="/statePromote">
                <StatePromote></StatePromote>
              </Route>
              <Route path="/combinationExtend">
                <CombinationExtend center={<ConditionsRender />} color="blue">
                  <h1 className="Dialog-title">Wellcome</h1>
                  <p className="Dialog-message">
                    Thank you for visiting our spaceraft
                  </p>
                </CombinationExtend>
              </Route>
              <Route path="/context">
                <ThemeContext.Provider value="蓝色">
                  <Context></Context>
                </ThemeContext.Provider>
              </Route>
              <Route path="/errorBoundary">
                <ErrorBoundary></ErrorBoundary>
              </Route>
              <Route path="/useState">
                <UseState></UseState>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}
export default App;
