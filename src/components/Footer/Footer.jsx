import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../store/reducers/ReducerGetTickets/ActionsGetTickets'

import classes from './Footer.module.scss'

const Footer = () => {
  const checkedFilters = useSelector((checkedFilter) => checkedFilter.reducerFiltersChecked.filters)
  const dispatch = useDispatch()
  const { renderTickets } = bindActionCreators(actions, dispatch)
  let disabled
  if (checkedFilters.every((element) => !element.isChecked)) {
    disabled = true
  } else {
    disabled = false
  }

  return (
    <div>
      <button
        onClick={() => {
          renderTickets()
        }}
        disabled={disabled}
        className={`${classes.buttonReset} ${classes.footerBtn}`}
        type="button"
      >
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default Footer
