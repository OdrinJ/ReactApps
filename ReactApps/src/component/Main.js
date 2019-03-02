import React, {Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import NavMenu from './Nav/NavMenu'

import Nav1 from './Middle/Nav1'
import Nav2 from './Middle/Nav2'
import Nav3 from './Middle/Nav3'
import Nav4 from './Middle/Nav4'
import Nav5 from './Middle/Nav5'
import Nav6 from './Middle/Nav6'


export default class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div className="main-component">
                    <div className="middle-component">
                        <Switch>
                            <Route path="/nav1" exact component={Nav1} />
                            <Route path="/nav2" exact component={Nav2} />
                            <Route path="/nav3" exact component={Nav3} />
                            <Route path="/nav4" exact component={Nav4} />
                            <Route path="/nav5" exact component={Nav5} />
                            <Route path="/nav6" exact component={Nav6} />
                        </Switch>
                    </div>
                    <NavMenu />
                </div>
            </HashRouter>
        )
    }
}