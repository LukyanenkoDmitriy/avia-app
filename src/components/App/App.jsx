import Header from '../Header'
import TicketsList from '../TicketsList'
import Footer from '../Footer'
import Filters from '../Filters'

import classes from './App.module.scss'

const App = () => {
  return (
    <div className={classes.conteiner}>
      <article className={classes.article}>
        <Filters />
      </article>
      <main className={classes.main}>
        <div className={classes['main-wrapper']}>
          <h1 className={classes['visually-hidden']}>Aviasales</h1>
          <Header />
          <TicketsList />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
