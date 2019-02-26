import React, { Component } from 'react';
import './App.css';
import Index from './components/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductionIndex from './components/Productions/ProductionIndex';
import Axios from 'axios';

class App extends Component {
  state = {
    season: [{
      name: "",
      productions: [{
        title: "",
        photoUrl: "",
        startDate: "",
        endDate: "",
        description: ""
      }]
    }],
    productionList:[{
      title: "",
      photoUrl: "",
      startDate: "",
      endDate: "",
      description: ""
    }],
    redirect: false
  }

  componentDidMount = () => {
    Axios.get("http://localhost:8000/api/v1/productions")
    .then((res) => this.setState({productionList: res.data}))
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
            <Route exact path="/season" 
              render={(props) => <ProductionIndex {...props} productionList={this.state.productionList}/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
