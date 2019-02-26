import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import ProductionIndex from './components/Productions/ProductionIndex';
import ProductionShow from './components/Productions/ProductionShow';
import Axios from 'axios';
import EducationProgramIndex from './components/Education/EducationProgramIndex';


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
    educationalprograms:[{
      title: "",
      instructor: "",
      location: "",
      date: "",
      time: "",
      price: "",
      description: ""
    }],
    redirect: false
  }

  componentDidMount() {
    this.getAllProductions()
    this.getAllSeasons()
    this.getAllEducationalPrograms()
  }

  getAllProductions = () => {
    Axios.get('http://localhost:8000/api/v1/productions')
    .then((res) => {this.setState({productionList: res.data})})
  }

  getAllSeasons = () => {
    Axios.get('http://localhost:8000/api/v1/seasons')
    .then((res) => {this.setState({season: res.data})})
  }
  responseGoogle = () => {
    console.log('user logged in')
  }

  getAllEducationalPrograms = () => {
    Axios.get('http://localhost:8000/api/v1/educationprograms')
    .then((res) => {this.setState({educationalprograms: res.data})})
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
              render={(props) => <Index {...props} 
                productionList={this.state.productionList}
                />}
            />
            <Route exact path="/season" 
              render={(props) => <ProductionIndex {...props} 
              productionList={this.state.productionList}/>}
            />
            <Route exact path='/season/:productionId' 
              component={ProductionShow}
            />
            <Route exact pathe='/educationalprograms' 
              render={(props) => <EducationProgramIndex {...props}
              educationalprograms={this.state.educationalprograms}/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
