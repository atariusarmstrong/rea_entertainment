import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = styled.ul`
    list-style-type: none;
    float: right;
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
                    <Link to="/season"><li>Productions</li></Link>
                    <li>Education</li>
                    <li>About Us</li>
                    <li>Tickets</li>
                </Header>
            </NavBar>
        );
    }
}

export default Navbar;