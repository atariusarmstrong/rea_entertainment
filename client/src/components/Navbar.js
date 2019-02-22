import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.li`
    display: inline;
`

class Navbar extends Component {
    render() {
        return (
            <div>
                <Header>
                    <ul>Productions</ul>
                    <ul>Education</ul>
                    <ul>About Us</ul>
                    <ul>Tickets</ul>
                </Header>
            </div>
        );
    }
}

export default Navbar;