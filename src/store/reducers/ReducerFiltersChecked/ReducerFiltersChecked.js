import { CHECKED, ALL_CHECKED } from '../Actions'

const initialState = {
  filters: [
    { value: 'Все', isChecked: true, id: 1 },
    { value: 'Без пересадок', isChecked: true, id: 2 },
    { value: '1 пересадка', isChecked: true, id: 3 },
    { value: '2 пересадки', isChecked: true, id: 4 },
    { value: '3 пересадки', isChecked: true, id: 5 },
  ],
}

const newState = (state, id, property, newValue) => {
  return state.map((item) => {
    if (item.id === id) {
      const updatedValue = newValue !== undefined ? newValue : !item[property]
      return { ...item, [property]: updatedValue }
    }
    return item
  })
}

const reducerFiltersChecked = (state = initialState, actions) => {
  const { filters } = state
  let updateItem
  let checkedFilters
  switch (actions.type) {
    case CHECKED:
      updateItem = newState(filters, actions.id, 'isChecked')
      checkedFilters = updateItem.filter((item) => item.id !== 1)
      if (checkedFilters.every((item) => item.isChecked)) {
        updateItem[0] = { ...updateItem[0], ['isChecked']: true }
      } else {
        updateItem[0] = { ...updateItem[0], ['isChecked']: false }
      }

      return {
        ...state,
        filters: updateItem,
      }

    case ALL_CHECKED:
      return {
        ...state,
        filters: filters.map((item) => {
          return { ...item, isChecked: actions.checked }
        }),
      }

    default:
      return state
  }
}

export default reducerFiltersChecked
