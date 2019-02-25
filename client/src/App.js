import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductionIndex from './components/Productions/ProductionIndex';

class App extends Component {
  state = {
    productionList:[{
      title: "Brand New Show",
      photoUrl: "https://images.unsplash.com/photo-1528392944531-e63de93f8751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      startDate: "5/1/2020",
      endDate: "5/17/2020",
      description: "A very wild experience"
    }],
    redirect: false
  }

  responseGoogle = () => {
    // this.setState({redirect: true})
    console.log('user logged in')
  }

  logout = () => {
    console.log('user logged out')
  }

  render() {
  

    return (
      
      <div>
        <Router>
          <Switch>
            <Route exact path='/' 
              render={(props) => <Index {...props} productionList={this.state.productionList}/>}
            />
            <Route exact path="/season" component={ProductionIndex}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
