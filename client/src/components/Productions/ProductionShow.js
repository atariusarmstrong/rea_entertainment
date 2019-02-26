import React, { Component } from 'react';
import Axios from 'axios';

class ProductionShow extends Component {
    state = {
        production: {
            title: "",
            photoUrl: "",
            startDate: "",
            endDate: "",
            description: ""
        }
    }

    getSingleProduction = () => {
        const productionId = this.props.match.params.productionId
        Axios.get(`http://localhost:8000/api/v1/productions/${productionId}`)
        .then((res) => console.log(res.data))
    }
    render() {
        return (
            <div>
                Here is a single production
            </div>
        );
    }
}

export default ProductionShow;