import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './App.css';
import Navbar from './components/Navbar';
import Index from './components/Index';

class App extends Component {
  state = {
    productionList:[{
      title: "Brand New Show",
      photoUrl: "https://images.unsplash.com/photo-1528392944531-e63de93f8751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      startDate: "5/1/2020",
      endDate: "5/17/2020",
      description: "A very wild experience"
    }]
  }

  render() {

    const responseGoogle = (response) => {
      console.log("user successfully logged in");
    }

    return (
      
      <div>
        <Navbar/>
        <Index productionList={this.state.productionList}/>

        <GoogleLogin
          clientId="869869357020-4uu2fggcu62cva0o20vvl5q2701tmlej.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />,
        document.getElementById('googleButton')
      </div>
    );
  }
}

export default App;
