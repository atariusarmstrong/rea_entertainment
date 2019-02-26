import React, { Component } from 'react';
import Axios from 'axios';

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
                {this.state.educationalprograms.map((program, i) => {
                    return (
                        <div key={i}>
                            <h2>{program.title}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default EducationProgramIndex;