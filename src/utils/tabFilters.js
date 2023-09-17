const tabFilters = (array, tab) => {
  if (tab === 'CHEAP') {
    const compare = (a, b) => {
      if (a.price > b.price) return 1
      if (a.price === b.price) return 0
      if (a.price < b.price) return -1
    }
    return array.sort(compare)
  } else {
    const compare = (a, b) => {
      if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
        return 1
      }
      if (a.segments[0].duration + a.segments[1].duration === b.segments[0].duration + b.segments[1].duration) {
        return 0
      }
      if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
        return -1
      }
    }
    return array.sort(compare)
  }
}

export default tabFilters
