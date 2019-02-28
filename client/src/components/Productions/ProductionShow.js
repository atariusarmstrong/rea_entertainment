import React, { Component } from 'react';
import Axios from 'axios';
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

const ProductionDetail = styled.div`
    height: 512px;
    width: 806px;
    background-color: white;
    color: black;
    box-shadow: 5px 5px #A22929;
`

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
                <Header>
                    <h1>{this.state.production.title}</h1>
                </Header>
                <ProductionDetail>
                    <p>Director: {this.state.production.director}</p>
                    <p>{this.state.production.start_date} - {this.state.production.end_date}</p>
                    <p>{this.state.production.description}</p>
                </ProductionDetail>
                
            </div>
        );
    }
}

export default ProductionShow;