import React, { Component } from 'react';
import axios from 'axios'
import Navbar from '../Navbar';
import styled from 'styled-components'

const Header = styled.div`
    width: 640px;
    height: 68px;
    color: white;
    background-color: #A22929;
    text-transform: uppercase;
    h1 {
        margin-left: 20px;
    }
`

const EducationContainer = styled.div`
    width: 859px;
    height: 330px;
    background-color: white;
    color: #707070;
`

class EducationShow extends Component {
    state = {
        educationprogram: {}
    }

    componentDidMount = () => {
        this.getSingleEdu()
    }
    getSingleEdu = () => {
        const educationalId = this.props.match.params.educationalId
        axios.get(`http://localhost:8000/api/v1/educationprograms/${educationalId}`)
        .then((res) => this.setState({educationprogram: res.data}))
    }
    render() {
        return (
            <div>
                <Navbar />
                <Header>
                    <h1>Educational Programs</h1>
                </Header>
                <EducationContainer>
                    <h1>{this.state.educationprogram.title}</h1>
                    <h3>with {this.state.educationprogram.instructor}</h3>
                    <p>{this.state.educationprogram.description}</p>

                    <p>DATE & TIME</p>
                    <p>{this.state.educationprogram.date}, {this.state.educationprogram.time}</p>
                </EducationContainer>
            </div>
        );
    }
}

export default EducationShow;