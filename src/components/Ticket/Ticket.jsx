import formatDate from '../../utils/formatDate'
import formatDuration from '../../utils/formatDuration'
import formatText from '../../utils/formatText'

import classes from './Ticket.module.scss'

const Ticket = (props) => {
  const { price, carrier, segments } = props
  const [
    { origin, destination, date, duration, stops },
    {
      origin: originReturn,
      destination: destinationReturn,
      date: dateReturn,
      duration: durationReturn,
      stops: stopsReturn,
    },
  ] = segments

  return (
    <li className={classes.item}>
      <div className={classes.benefits}>
        <span className={classes.price}>{price} Р</span>
        <img alt={`${carrier}`} aria-label={`${carrier}`} src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={classes.info}>
        <div className={classes.line}>
          <div className={classes.fragment}>
            <span className={classes.itemTitle}>
              {origin} - {destination}
            </span>
            <span className={classes.itemText}>{formatDate(date, duration)}</span>
          </div>
          <div className={classes.fragment}>
            <span className={classes.itemTitle}>В ПУТИ</span>
            <span className={classes.itemText}>{formatDuration(duration)}</span>
          </div>
          <div className={classes.fragment}>
            <span className={classes.itemTitle}>{formatText(stops)}</span>
            <span className={classes.itemText}>{stops.join(',')}</span>
          </div>
        </div>
        <div className={classes.line}>
          <div className={classes.fragment}>
            <span className={classes.itemTitle}>
              {originReturn} - {destinationReturn}
            </span>
            <span className={classes.itemText}>{formatDate(dateReturn, durationReturn)}</span>
          </div>
          <div className={classes.fragment}>
            <span className={classes.itemTitle}>В пути</span>
            <span className={classes.itemText}>{formatDuration(durationReturn)}</span>
          </div>
          <div className={classes.fragment}>
            <span className={classes.itemTitle}>{formatText(stopsReturn)}</span>
            <span className={classes.itemText}>{stopsReturn.join(',')}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
