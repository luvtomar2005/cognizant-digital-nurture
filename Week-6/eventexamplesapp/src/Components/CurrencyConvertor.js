import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor() {

        super();

        this.state = {

            amount: "",

            currency: ""

        };

    }

    handleAmount = (event) => {

        this.setState({

            amount: event.target.value

        });

    };

    handleSubmit = (event) => {

        event.preventDefault();

        const euro = (this.state.amount / 90).toFixed(2);

        this.setState({

            currency: euro

        });

        alert(
            "Converting to Euro: €" + euro
        );

    };

    render() {

        return (

            <div>

                <h1 style={{ color: "green" }}>
                    Currency Convertor!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <label>

                        Amount

                    </label>

                    <input
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleAmount}
                    />

                    <br /><br />

                    <label>

                        Currency

                    </label>

                    <input
                        value={
                            this.state.currency
                        }
                        readOnly
                    />

                    <br /><br />

                    <button type="submit">

                        Submit

                    </button>

                </form>

            </div>

        );

    }

}

export default CurrencyConvertor;

