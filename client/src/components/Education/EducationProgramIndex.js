import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar';

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
                {this.state.educationalprograms.map((program, i) => {
                    return (
                        <div key={i}>
                            <h2>{program.title}</h2><h4>with {program.instructor}</h4>
                            <p>{program.description}</p>
                            <p>Price: ${program.price}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default EducationProgramIndex;