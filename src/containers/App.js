import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import '../css/common.css'
import 'semantic-ui-css/semantic.min.css';


import Table from './table/table'
import Button from './button/button'
import Inputs from './input/input'
import Accordion from './accordion/accordion'
import Dimmer from './dimmer/dimmer'
import Dialog from './dialog/dialog'
import Card from './card/card'
import SiderBar from './siderBar/siderbar'
import AddData from './others/adddata'
import Time from './others/time'


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="left_con">
                        <Menu inverted vertical borderless>
                            <Menu.Item>
                                <Menu.Header>Products</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item><Link to="table">table</Link></Menu.Item>
                                    <Menu.Item><Link to="btn">button</Link></Menu.Item>
                                    <Menu.Item><Link to="input">inputs</Link></Menu.Item>
                                    <Menu.Item><Link to="accordion">accordion</Link></Menu.Item>
                                    <Menu.Item><Link to="dimmer">dimmer</Link></Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>demo</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item><Link to="dialog">dialog</Link></Menu.Item>
                                    <Menu.Item><Link to="card">card</Link></Menu.Item>
                                    <Menu.Item><Link to="siderbar">siderbar</Link></Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                            <Menu.Item>
                                <Menu.Header>others</Menu.Header>
                                <Menu.Menu>
                                    <Menu.Item><Link to="addData">addData</Link></Menu.Item>
                                    <Menu.Item><Link to="timeHistory">timeHistory</Link></Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="right_con">
                        <Route path="/table" component={Table}/>
                        <Route path="/btn" component={Button}/>
                        <Route path="/input" component={Inputs}/>
                        <Route path="/accordion" component={Accordion}/>
                        <Route path="/dimmer" component={Dimmer}/>
                        <Route path="/dialog" component={Dialog}/>
                        <Route path="/card" component={Card}/>
                        <Route path="/siderbar" component={SiderBar}/>
                        <Route path="/addData" component={AddData}/>
                        <Route path="/timeHistory" component={Time}/>
                    </div>
                </div>
            </Router>
        );
    }
}

