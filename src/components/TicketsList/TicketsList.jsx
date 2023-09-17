import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { bindActionCreators } from 'redux'

import tabFilters from '../../utils/tabFilters'
import checkedFilters from '../../utils/checkedFilters'
import * as actions from '../../store/reducers/ReducerGetTickets/ActionsGetTickets'
import Ticket from '../Ticket'
import Loader from '../Loader'

import classes from './TicketsList.module.scss'

const TicketsList = () => {
  const state = useSelector((store) => store.reducerGetTickets)
  const tab = useSelector((tab) => tab.reducerSortList.tab)
  const checkboxes = useSelector((checkboxes) => checkboxes.reducerFiltersChecked.filters)
  const dispatch = useDispatch()
  const { showTickets, searchId, stop, tickets, error } = state
  const { getSearchId, getTicked } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    getSearchId()
  }, [])

  useEffect(() => {
    if (searchId && stop === false) {
      getTicked(searchId)
    }
  }, [dispatch, searchId, tickets])

  const filtersCheckboxes = checkedFilters(tickets, checkboxes)
  const filtersTabTickets = tabFilters(filtersCheckboxes, tab)
  let elements = null
  let loading = null
  if (error) {
    elements = (
      <li className={classes.warning}>
        <span>{`Ошибка: ${error}, пожалуйста зайдите позже`}</span>
      </li>
    )
  } else if (!filtersTabTickets.length) {
    elements = (
      <li className={classes.warning}>
        <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
      </li>
    )
  } else {
    const displayTickets = filtersTabTickets.slice(0, showTickets)
    elements = displayTickets.map((element) => {
      const { ...other } = element
      const id = nanoid(10)
      return <Ticket key={id} {...other} />
    })
  }
  loading = !stop ? <Loader /> : null
  return (
    <>
      {loading}
      <ul className={`${classes.listReset} ${classes.list}`}>{elements}</ul>
    </>
  )
}

export default TicketsList
