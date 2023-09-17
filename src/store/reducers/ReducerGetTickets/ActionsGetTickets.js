import { GET_SEARCH_ID, GET_TICKET, ERROR, RENDER_TICKETS } from '../Actions'

const API_URL = 'https://aviasales-test-api.kata.academy/'

export const renderTickets = () => {
  return {
    type: RENDER_TICKETS,
  }
}

export const getSearchId = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}search`)
      if (response.ok) {
        const result = await response.json()
        dispatch({ type: GET_SEARCH_ID, payload: result.searchId })
      } else {
        throw new Error(`Ошибка ${response.status}: поробуйте зайти позже`)
      }
    } catch (error) {
      dispatch({ type: ERROR, error: error.message })
    }
  }
}

export const getTicked = (searchId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}tickets?searchId=${searchId}`)
      if (response.ok) {
        const result = await response.json()
        dispatch({ type: GET_TICKET, stop: result.stop, tickets: result.tickets })
      } else {
        dispatch({ type: GET_TICKET, stop: false, tickets: [] })
      }
    } catch (error) {
      dispatch({ type: ERROR, error: error.message })
    }
  }
}
