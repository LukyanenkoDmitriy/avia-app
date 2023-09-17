import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../store/reducers/ReducerFiltersChecked/ActionFiltersChecked'

import classes from './Filters.module.scss'

const Filters = () => {
  const storeFilters = useSelector((store) => store.reducerFiltersChecked.filters)
  const dispatch = useDispatch()
  const { checked, allChecked } = bindActionCreators(actions, dispatch)

  const checkboxes = storeFilters.map((item) => {
    const { value, isChecked, id } = item
    if (item.id === 1) {
      return (
        <label id={1} key={1} className={classes.filtersLabel}>
          <input
            className={classes.filtersInput}
            type="checkbox"
            checked={isChecked}
            onChange={(event) => {
              allChecked(event.target.checked)
            }}
          />
          <span className={classes.inputText}>{value}</span>
        </label>
      )
    }
    return (
      <label id={id} key={id} className={classes.filtersLabel}>
        <input className={classes.filtersInput} type="checkbox" checked={isChecked} onChange={() => checked(id)} />
        <span className={classes.inputText}>{value}</span>
      </label>
    )
  })
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Количество пересадок</h2>
      <form className={classes.filtersForm}>{checkboxes}</form>
    </div>
  )
}

export default Filters
