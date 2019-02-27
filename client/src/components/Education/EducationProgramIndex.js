import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar';
import styled from 'styled-components'

const EducationBox = styled.div`
    color: #707070;
    background-color: white;
    height: 163px;
    width: 859px;
    margin: 0 auto;
`

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
class EducationProgramIndex extends Component {
    state = {
        educationalprograms: [{}]
    }

    componentDidMount = () => {
        Axios.get('http://localhost:8000/api/v1/educationprograms')
        .then((res) => {this.setState({educationalprograms: res.data})})
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Header>
                    <h1>Educational Programs</h1>
                </Header>
                

                {this.state.educationalprograms.map((program, i) => {
                    return (
                        <EducationBox key={i}>
                            <h2>{program.title}</h2><h4>with {program.instructor}</h4>
                            <p>{program.description}</p>
                            <p>Price: ${program.price}</p>
                        </EducationBox>
                    )
                })}
            </div>
        );
    }
}

export default EducationProgramIndex;