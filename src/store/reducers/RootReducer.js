import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import reducerFiltersChecked from './ReducerFiltersChecked/ReducerFiltersChecked'
import reducerSortList from './ReducerSortList/ReducerSortList'
import reducerGetTickets from './ReducerGetTickets/ReducerGetTickets'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = configureStore({
  reducer: {
    reducerFiltersChecked,
    reducerSortList,
    reducerGetTickets,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  enhancer,
})

export default store
