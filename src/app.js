const { createStore } = Redux
const card = (state, action) => {
  switch ( action.type ) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      })

      return Object.assign({}, state, {
        cards: state.cards ? state.cards.concat([newCard]) : [newCard]
      })
    default:
      return state || { cards: [] }
  }
}
const store = createStore(card)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
})
const addCard = (text) => {
  return {
    type: 'ADD_CARD',
    data: text !== null ? text : 'dummy'
  }
}
store.dispatch(addCard({ firstName: 'Long', lastName: 'TRAN' }) )
store.dispatch(addCard({ target: +new Date, to: 'Get some basic about Redux' }) )
