import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import './App.css';
import Navbar from './components/Navbar';
import Index from './components/Index';
import {Redirect} from 'react-router-dom';

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

  // renderRedirect = () => {
  //   if(this.state.redirect) {
  //     return <Redirect to='/myaccount'/>
  //   }
  // }

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
        <Navbar/>
        <Index productionList={this.state.productionList}/>

        {/* {this.renderRedirect()} */}
        <GoogleLogin
          clientId="869869357020-4uu2fggcu62cva0o20vvl5q2701tmlej.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout} 
        />
      </div>
    );
  }
}

export default App;
