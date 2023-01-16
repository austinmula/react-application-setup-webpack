import React from "react";

class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "Hello World" };
    }

    render() {
        return (
            <div className="card">
                <p>{this.props.quote}</p>
                <div className="author">
                    <h6>{this.props.author}.</h6>
                </div>
            </div>
        );
    }
}

export default QuoteCard;
