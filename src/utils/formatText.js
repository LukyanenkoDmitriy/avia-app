const formatText = (array) => {
  if (!array.length) {
    return 'БЕЗ ПЕРЕСАДОК'
  } else if (array.length === 1) {
    return '1 ПЕРЕСАДКА'
  } else {
    return `${array.length} ПЕРЕСАДКИ`
  }
}

export default formatText
