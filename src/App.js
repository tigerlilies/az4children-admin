import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import * as childAction from './actions/child';

import './App.css';
import Header from './components/Header';
import ChildList from './components/ChildList';
import ChildDetail from './components/ChildDetail';
import ChildForm from './components/ChildForm';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     children: []
  //   };
  // }

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

function mapDispatchToProps(dispatch) {
  return {
    childAction: bindActionCreators(childAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
