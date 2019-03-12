import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import { Link } from 'react-router-dom'


const ShowBox = styled.div`
    height: 395px;
    width: 295px;
    box-shadow: 5px 5px #A22929;
    background-color: white;
    color: #707070;
    position: relative;
    margin: 0 5;
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
const ShowContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin: 0 auto;
    a {
        text-decoration: none;
    }
`

const Logo = styled.img`
    display: block;
    margin: 0 auto;
`

class Index extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <Logo src='rea_logo.png' alt="REA Entertainment"/>

                <h2>Season</h2>

                <ShowContainer>
                    {this.props.productionList.map((production) => {
                        return (
                            <ShowBox key={production.id}>
                                <Link to={`/season/${production.id}`}>
                                    <ShowHead>
                                        <img src={production.photo_url} alt={production.title}/>
                                        <h3>{production.title}</h3>
                                    </ShowHead>
                                    <div>
                                        <p>{production.start_date} - {production.end_date}</p>
                                        <p>Directed by: {production.director}</p>
                                    </div>
                                </Link>
                            </ShowBox>
                        )
                    })}
                </ShowContainer>
                
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