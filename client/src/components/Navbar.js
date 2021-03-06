import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Logo = styled.img`
    width: 150px;
    height: 150px;
    position: relative;
    top: -50px;
`

const Header = styled.ul`
    list-style-type: none;
    float: right;
    a {
        text-decoration: none;
    }
    li {
        display: inline;
        margin: 10px;
        text-transform: uppercase;
        color: black;
    }
`
const NavBar = styled.div`
    background-color: #A22929;
    width: 100vw;
    height: 70px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
    animation: expand 2s forwards;
    font-family: 'Fjalla One', sans-serif;
`

class Navbar extends Component {
    render() {
        return (
            <NavBar>
                <Link to='/'><Logo src='rea_logo.png' atl='REA Entertainment'/></Link>
                <Header>
                    <Link to="/season"><li>Productions</li></Link>
                    <Link to="/educationalprograms"><li>Education</li></Link>
                    <li>About Us</li>
                    <li>Tickets</li>
                </Header>
            </NavBar>
        );
    }
}

export default Navbar;