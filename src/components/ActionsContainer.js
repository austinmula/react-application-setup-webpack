import React from "react";

class ActionsContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="actions-container">
                <p>{this.props.count}</p>
                <button
                    id="previous"
                    disabled={this.props.count === 0}
                    onClick={this.props.getprev}
                >
                    Previous
                </button>
                <button
                    // disabled={this.props.count === this.props.quotes.length - 1}
                    onClick={this.props.getnext}
                >
                    Next
                </button>
            </div>
        )
    }
}

export default ActionsContainer