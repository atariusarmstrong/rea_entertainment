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
                            <h3>{production.title}</h3>
                        </div>
                    )
                })}


            </div>
        );
    }
}

export default Index;