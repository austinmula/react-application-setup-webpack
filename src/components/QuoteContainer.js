import React from "react";
import ActionsContainer from "./ActionsContainer";
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

  componentDidUpdate() {
    console.log("Component state updated");
  }

  submit() {
    alert("Hi there alert Here");
  }

  getnext() {
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

        <ActionsContainer
          count={this.state.count}
          quotes={this.state.quotes}
          getnext={this.getnext}
          getprev={this.getprev}
        />
      </div>
    );
  }
}

export default QuoteContainer;
