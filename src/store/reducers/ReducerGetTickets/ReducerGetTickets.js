import { GET_SEARCH_ID, GET_TICKET, ERROR, RENDER_TICKETS } from '../Actions'

const initialState = {
  stop: false,
  searchId: null,
  showTickets: 5,
  tickets: [],
  error: null,
}

const reducerGetTickets = (store = initialState, actions) => {
  switch (actions.type) {
    case GET_SEARCH_ID:
      return {
        ...store,
        searchId: actions.payload,
      }

    case GET_TICKET:
      return {
        ...store,
        stop: actions.stop,
        tickets: store.tickets.concat(actions.tickets),
      }

    case ERROR:
      return {
        ...store,
        error: actions.error,
      }

    case RENDER_TICKETS:
      return {
        ...store,
        showTickets: store.showTickets + 5,
      }

    default:
      return store
  }
}

export default reducerGetTickets
