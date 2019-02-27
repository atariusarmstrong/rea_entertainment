import React, { Component } from 'react';
import axios from 'axios'
import Navbar from '../Navbar';

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
                <h1>{this.state.educationprogram.title}</h1>
            </div>
        );
    }
}

export default EducationShow;