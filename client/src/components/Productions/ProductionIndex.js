import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import axios from 'axios'
import styled from 'styled-components'

const Header = styled.div`
    width: 640px;
    height: 68px;
    color: white;
    background-color: #A22929;
    text-transform: uppercase;
    h1 {
        margin-left: 20px;
        padding-top: 15px;
    }
    margin-bottom: 20px;
    font-family: 'Fjalla One', sans-serif;
`
const ShowBox = styled.div`
    box-shadow: 5px 5px #A22929;
    background-color: #707070;
    width: 447.9px;
    height: 455.8px;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-self: center;
    overflow: auto;
    p{
        padding: 0px 15px;
        font-family: 'Thasadith', sans-serif;
    }
    a {
        text-decoration: none;
        color: white;
    }
`

const ShowHead = styled.div`
    h3 {
        color: white;
        text-transform: uppercase;
        background-color: #A2292980;
        position: relative;
        bottom: 44px;
        font-family: 'Fjalla One', sans-serif;
        padding-left: 10px;
    }
    img {
        width: 447.9px;
        height: 224.93px;
    }
    height: 224.93px;
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
                <Header>
                    <h1>Upcoming Productions</h1>
                </Header>
                <ShowContainer>
                    {this.state.productionList.map((production, i) => {
                        return (
                            <ShowBox key={i}>
                                <Link to={`/season/${production.id}`}>
                                    <ShowHead>
                                        <img src={production.photo_url} alt={production.title}/>
                                        <h3>{production.title}</h3>
                                    </ShowHead>
                                    <div>
                                        <p>{production.start_date} to {production.end_date}</p>
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