import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
//required to use react and redux at the same time
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import * as childAction from './actions/child';

import './App.css';
import Header from './components/Header';
import ChildList from './components/ChildList';
import ChildDetail from './components/ChildDetail';
import ChildForm from './components/ChildForm';
import Login from './components/Login';

class App extends Component {

  //Connect to action child to call api
  componentDidMount() {
    this.props.childAction.fetchProfiles();
  }

  render() {
    console.log('in App >>> props', this.props);
    const history = createBrowserHistory();

    return (
      <Router history={history}>
        <div className="container-fluid">
          <div className="row header">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <img src="../logo.png" alt="logo" className="logo" />
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col">
                  <Switch>
                    <Route exact path="/" component={ChildList} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/childDetail/:id" component={ChildDetail} />
                    <Route exact path="/child/add" component={ChildForm} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );

  }
}

//Call the state from redux store
function mapDispatchToProps(dispatch) {
  return {
    childAction: bindActionCreators(childAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
