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
                <h1>Educational Programs</h1>
                <h1>{this.state.educationprogram.title}</h1>
                <h3>with {this.state.educationprogram.instructor}</h3>
                <p>{this.state.educationprogram.description}</p>

                <p>DATE & TIME</p>
                <p>{this.state.educationprogram.date}, {this.state.educationprogram.time}</p>
            </div>
        );
    }
}

export default EducationShow;