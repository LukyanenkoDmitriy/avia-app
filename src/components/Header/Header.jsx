import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../store/reducers/ReducerSortList/ActionsSortList'
import logo from '../../assets/image/Logo.svg'

import classes from './Header.module.scss'

const Header = () => {
  let CHEAP_BUTTON_CLASSES = `${classes.buttonReset} ${classes.tab} ${classes.active}`
  let FAST_BUTTON_CLASSES = `${classes.buttonReset} ${classes.tab}`
  const state = useSelector((store) => store.reducerSortList.tab)
  const dispatch = useDispatch()
  const { tabCheap, tabFast } = bindActionCreators(actions, dispatch)
  if (state === 'CHEAP') {
    CHEAP_BUTTON_CLASSES = `${classes.buttonReset} ${classes.tab} ${classes.active}`
    FAST_BUTTON_CLASSES = `${classes.buttonReset} ${classes.tab}`
  } else {
    CHEAP_BUTTON_CLASSES = `${classes.buttonReset} ${classes.tab}`
    FAST_BUTTON_CLASSES = `${classes.buttonReset} ${classes.tab} ${classes.active}`
  }

  return (
    <header className="header">
      <div className={classes.logo}>
        <img alt="logo" className="image" src={logo} />
      </div>
      <div className={classes.tabs}>
        <button onClick={tabCheap} type="button" className={CHEAP_BUTTON_CLASSES}>
          Самый дешевый
        </button>
        <button onClick={tabFast} type="button" className={FAST_BUTTON_CLASSES}>
          Самый быстрый
        </button>
      </div>
    </header>
  )
}

export default Header
