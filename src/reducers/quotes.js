export default (state = [], action) => {
  let index
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter((quote) => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      index = state.findIndex((quote) => quote.id === action.quoteId)
      return state.map((quote, i) => {
        if (i !== index) {
          return quote
        }
        return {
          ...quote,
          votes: quote.votes + 1
        }
      })
    case 'DOWNVOTE_QUOTE':
    index = state.findIndex((quote) => quote.id === action.quoteId)
    return state.map((quote, i) => {
      if (i !== index) {
        return quote
      }
      if (quote.votes < 1) {
        return quote
      } else {
        return {
          ...quote,
          votes: quote.votes - 1
        }
      }
    })
    default:
      return state
  }
}
