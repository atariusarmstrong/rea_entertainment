import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';

const ShowBox = styled.div`
    height: 395px;
    width: 295px;
    box-shadow: 5px 5px #A22929;
    background-color: white;
    color: #707070;
    position: relative;
    margin-left: 67px;
    p{
        padding: 0px 10px;
    }
`
const ShowHead = styled.div`
    h3 {
        color: white;
        text-transform: uppercase;
        background-color: #A2292980;
        position: absolute;
        bottom: 180px;
    }
    img {
        height: 198px;
        width: 295px;
    }
`

class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                Welcome to REA Ent

                <h2>Season</h2>
                {this.props.productionList.map((production, i) => {
                    return (
                        <ShowBox key={i}>
                            <ShowHead>
                                <img src={production.photoUrl} alt={production.title}/>
                                <h3>{production.title}</h3>
                            </ShowHead>
                            <div>
                                <p>{production.description}</p>
                            </div>
                        </ShowBox>
                    )
                })}


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

export default Index;