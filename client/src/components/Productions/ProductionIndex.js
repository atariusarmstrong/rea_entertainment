import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios'

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
                        <div key={i}>
                            <div>
                                <img src={production.photoUrl} alt={production.title}/>
                                <h3>{production.title}</h3>
                            </div>
                            <div>
                                <p>{production.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProductionIndex;