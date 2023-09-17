import { add, format } from 'date-fns'

const formatDate = (date, duration) => {
  const startDate = Date.parse(date)
  const finalDate = add(startDate, { minutes: duration })
  const converctFinalDate = Date.parse(finalDate)
  const validStartDate = format(startDate, 'HH:mm')
  const validFinalDate = format(converctFinalDate, 'HH:mm')
  return `${validStartDate} - ${validFinalDate}`
}

export default formatDate
