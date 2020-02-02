import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' //引入路由 BrowserRouter:地址栏不带#号
// 引入登录组件和admin组件
import Admin from './pages/admin/admin'
import Login from './pages/login/login'
/* 
应用的根组件
*/

export default class App extends Component {
  render() {
    return ( //路由嵌套
      <BrowserRouter>
        <Switch> {/* Switch只匹配一个路由 */}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}