import {
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE
} from './constants'

const ACTION_HANDLERS = {
  [FETCH_ACCOUNT_SUCCESS]: (state, { payload }) => {
    return {
      ...state
    }
  },
  [FETCH_ACCOUNT_FAILURE]: (state, payload) => {
    return {
      ...state
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  name: ''
}

export default function accountReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}