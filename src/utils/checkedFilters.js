const checkedFilters = (array, checkboxes) => {
  let newArray = []
  checkboxes.forEach((checkbox) => {
    if (checkbox.isChecked) {
      switch (checkbox.id) {
        case 2: {
          const filter = array.filter((item) => {
            const stops = item.segments[0].stops.length
            const stopsReturn = item.segments[1].stops.length
            return stops === 0 && stopsReturn === 0
          })
          newArray.push(...filter)
          break
        }
        case 3: {
          const filter = array.filter((item) => {
            const stops = item.segments[0].stops.length
            const stopsReturn = item.segments[1].stops.length
            return (stops <= 1 && stopsReturn === 0) || (stops === 0 && stopsReturn <= 1)
          })
          newArray.push(...filter)
          break
        }
        case 4: {
          const filter = array.filter((item) => {
            const stops = item.segments[0].stops.length
            const stopsReturn = item.segments[1].stops.length
            return (stops === 2 && stopsReturn <= 2) || (stops <= 2 && stopsReturn === 2)
          })
          newArray.push(...filter)
          break
        }
        case 5: {
          const filter = array.filter((item) => {
            const stops = item.segments[0].stops.length
            const stopsReturn = item.segments[1].stops.length
            return (stops === 3 && stopsReturn <= 3) || (stops <= 3 && stopsReturn === 3)
          })
          newArray.push(...filter)
          break
        }

        default:
          newArray.push(...array)
          break
      }
    }
  })
  newArray = new Set(newArray)
  return [...newArray]
}

export default checkedFilters
