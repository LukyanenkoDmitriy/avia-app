const formatDuration = (duration = 0) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}

export default formatDuration
