import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar';

class ProductionShow extends Component {
    state = {
        production: {}
    }

    componentDidMount = () => {
        this.getSingleProduction()
    }

    getSingleProduction = () => {
        const productionId = this.props.match.params.productionId
        Axios.get(`http://localhost:8000/api/v1/productions/${productionId}`)
        .then((res) => this.setState({production: res.data}))
    }
    render() {
        return (
            <div>
                <Navbar/>
                <h1>{this.state.production.title}</h1>
                <h4>{this.state.production.start_date} - {this.state.production.end_date}</h4>
                <p>{this.state.production.description}</p>
            </div>
        );
    }
}

export default ProductionShow;