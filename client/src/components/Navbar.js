import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.li`
    display: inline;
`
const NavBar = styled.div`
    background-color: #A22929;
`

class Navbar extends Component {
    render() {
        return (
            <NavBar>
                <Header>
                    <ul>Productions</ul>
                    <ul>Education</ul>
                    <ul>About Us</ul>
                    <ul>Tickets</ul>
                </Header>
            </NavBar>
        );
    }
}

export default Navbar;