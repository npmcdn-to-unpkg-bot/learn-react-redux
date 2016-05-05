(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Redux = Redux;
var createStore = _Redux.createStore;

var card = function card(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      var newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });

      return Object.assign({}, state, {
        cards: state.cards ? state.cards.concat([newCard]) : [newCard]
      });
    default:
      return state || { cards: [] };
  }
};
var store = createStore(card);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
});
var addCard = function addCard(text) {
  return {
    type: 'ADD_CARD',
    data: text !== null ? text : 'dummy'
  };
};
store.dispatch(addCard({ firstName: 'Long', lastName: 'TRAN' }));
store.dispatch(addCard({ target: +new Date(), to: 'Get some basic about Redux' }));

},{}]},{},[1]);
