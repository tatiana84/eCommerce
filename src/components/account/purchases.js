import React, { Component } from "react";

class Purchases extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases`}>
                Purchases goes here.
            </div>
        )
    }
}

export default Purchases;