import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios'
import styled from 'styled-components'

const ShowBox = styled.div`
    box-shadow: 5px 5px #A22929;
    background-color: white;
    color: #707070;
`

class ProductionIndex extends Component {
    state = {
        productionList:[{
            title: "",
            photoUrl: "",
            startDate: "",
            endDate: "",
            description: "",
        }]
    }
    componentDidMount = () => {
        axios.get("http://localhost:8000/api/v1/productions")
        .then((res) => this.setState({productionList: res.data}))
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.state.productionList.map((production, i) => {
                    return (
                        <ShowBox key={i}>
                            <div>
                                <img src={production.photoUrl} alt={production.title}/>
                                <h3>{production.title}</h3>
                            </div>
                            <div>
                                <p>{production.description}</p>
                            </div>
                        </ShowBox>
                    )
                })}
            </div>
        );
    }
}

export default ProductionIndex;