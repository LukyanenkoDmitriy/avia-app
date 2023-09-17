import { TAB_CHEAP, TAB_FAST } from '../Actions'

const initialState = {
  tab: 'CHEAP',
}

const reducerSortList = (state = initialState, actions) => {
  switch (actions.type) {
    case TAB_CHEAP:
      return {
        ...state,
        tab: 'CHEAP',
      }

    case TAB_FAST:
      return {
        ...state,
        tab: 'FAST',
      }

    default:
      return state
  }
}

export default reducerSortList
