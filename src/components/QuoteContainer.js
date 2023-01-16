import React from "react";
import QuoteCard from "./QuoteCard";

class QuoteContainer extends React.Component {
  constructor() {
    super();
    this.state = { quotes: [], color: "red", count: 0 };
    this.getnext = this.getnext.bind(this);
    this.getprev = this.getprev.bind(this);
  }

  componentDidMount() {
    // make fetch request
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((quotes) => {
        this.setState({ quotes: quotes.quotes });
        console.log(quotes.quotes);
      });
  }

  submit() {
    alert("Hi there alert Here");
  }

  getnext() {
    console.log("next");
    if (this.state.count !== this.state.quotes.length - 1)
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
  }

  getprev() {
    if (this.state.count !== 0) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  }

  render() {
    return (
      <div className="quote-container">
        {this.state.quotes.length === 0 ? (
          <div className="card">
            <p>Loading ... </p>
          </div>
        ) : (
          <QuoteCard
            key={this.state.quotes[this.state.count].id}
            author={this.state.quotes[this.state.count].author}
            quote={this.state.quotes[this.state.count].quote}
          />
        )}

        <div className="actions-container">
          <p>{this.state.count}</p>
          <button onClick={this.getprev}>Previous</button>
          <button onClick={this.getnext}>Next</button>
        </div>
      </div>
    );
  }
}

export default QuoteContainer;
