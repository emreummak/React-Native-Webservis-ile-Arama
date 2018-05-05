import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './components/Login/Login';
import ara from './components/Call/Call';
export default class Routes extends Component {
render() {
    return(
            <Router>
                <Stack key="root" hideNavBar={true}>
      <Scene key="login" component={Login} title="Login" initial={true}/>
      <Scene key="ara" component={ara} title="ara"/>
    </Stack>
                </Router>
    )

}

}