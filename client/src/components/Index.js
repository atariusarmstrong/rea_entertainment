import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                Welcome to REA Ent

                <h2>Season</h2>
                {this.props.productionList.map((production, i) => {
                    return (
                        <div key={i}>
                            <div><img src={production.photoUrl} alt={production.title}/></div>
                            <div>
                                <h3>{production.title}</h3>
                                <p>{production.description}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        );
    }
}

export default Index;