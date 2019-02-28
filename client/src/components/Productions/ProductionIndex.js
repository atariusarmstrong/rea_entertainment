import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import axios from 'axios'
import styled from 'styled-components'

const ShowBox = styled.div`
    box-shadow: 5px 5px #A22929;
    background-color: #707070;
    width: 447.9px;
    height: 455.8px;
    img {
        width: 447.9px;
        height: 224.93px;
    }
    a {
        text-decoration: none;
        color: white;
    }
`
const ShowContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`

class ProductionIndex extends Component {
    state = {
        productionList:[{}]
    }
    componentDidMount = () => {
        axios.get("http://localhost:8000/api/v1/productions")
        .then((res) => this.setState({productionList: res.data}))
    }
    render() {
        return (
            <div>
                <Navbar />
                <ShowContainer>
                    {this.state.productionList.map((production, i) => {
                        return (
                            <ShowBox key={i}>
                                <Link to={`/season/${production.id}`}>
                                    <div>
                                        <img src={production.photo_url} alt={production.title}/>
                                        <h3>{production.title}</h3>
                                    </div>
                                    <div>
                                        <p>{production.description}</p>
                                    </div>
                                </Link>
                                
                            </ShowBox>
                        )
                    })}

                </ShowContainer>

            </div>
        );
    }
}

export default ProductionIndex;