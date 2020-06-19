export default (state, action) => {
    switch(action.type) {
      case 'BUY_AND_SELL_ITEM_DELETE':
        return {
          ...state,
          buyandsellitems: state.buyandsellitems.filter(items => items.id !== action.payload)
        }
      case 'BUY_AND_SELL_ITEM_ADD':
        return {
          ...state,
          buyandsellitems: [action.payload, ...state.buyandsellitems]
        }
      default:
        return state;
    }
  }