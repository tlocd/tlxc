
import  React, { Component } from "react"
import {HashRouter, Route, Switch, Redirect} from "react-router-dom"
import Cultivation from "../views/Cultivation"
import First from "../views/First"
import Vindicate from "../views/Vindicate"

class RouteMange extends Component {
  render(){
    return(
      <HashRouter>
        {/* 路由 */}
        <Switch>
          <Route path="/first" component={First} />
          <Route path="/second" component={Vindicate} />
          <Route path="/third" component={Cultivation} />
          
          <Redirect from="/" to="/first"/>
        </Switch>
      </HashRouter>
    )
  }
}

export default RouteMange;
