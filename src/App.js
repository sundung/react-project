/*
  应用的根组件
*/
import React from "react"
import { Button } from 'antd'
export default class App extends React.Component {
  // 必须写render渲染函数而且必须返回return一个有jsx语法写的虚拟dom对象
  render() {
    return <div><Button type='primary'>你好</Button></div>  //虚拟dom最后会渲染成真实的div标签
  }
}