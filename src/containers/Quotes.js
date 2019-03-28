import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    let { quotes, upvote, downvote, remove } = this.props
    console.log(quotes)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {console.log(this.props.quotes)}
              {quotes.map((quote) => {
                return <QuoteCard quote={quote} key={quote.id} handleUpvote={upvote} handleDownvote={downvote} handleRemove={remove} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (id) => { dispatch(upvoteQuote(id)) },
    downvote: (id) => { dispatch(downvoteQuote(id)) },
    remove: (id) => { dispatch(removeQuote(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
