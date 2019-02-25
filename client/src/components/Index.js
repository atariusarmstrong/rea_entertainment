import React, { Component } from 'react';
import styled from 'styled-components';

const ShowBox = styled.div`
    height: 395px;
    width: 295px;
    box-shadow: 5px 5px #A22929;
    background-color: white;
    color: #707070;
    position: relative;
    margin-left: 67px;
    p{
        padding: 0px 10px;
    }
`
const ShowHead = styled.div`
    h3 {
        color: white;
        text-transform: uppercase;
        background-color: #A2292980;
        position: absolute;
        bottom: 180px;
    }
    img {
        height: 198px;
        width: 295px;
    }
`

class Index extends Component {
    render() {
        return (
            <div>
                Welcome to REA Ent

                <h2>Season</h2>
                {this.props.productionList.map((production, i) => {
                    return (
                        <ShowBox key={i}>
                            <ShowHead>
                                <img src={production.photoUrl} alt={production.title}/>
                                <h3>{production.title}</h3>
                            </ShowHead>
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

export default Index;