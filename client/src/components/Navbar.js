import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
    height: 200px;
    -webkit-clip-path: polygon(100% 34%, 100% 0%, 0% 0%, 0% 42%, 100% 23%);
    clip-path: polygon(100% 34%, 100% 0%, 0% 0%, 0% 42%, 100% 23%);
    animation: expand 2s forwards;
`

class Navbar extends Component {
    render() {
        return (
            <NavBar>
                <Header>
                    <Link to='/'><li>Home</li></Link>
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