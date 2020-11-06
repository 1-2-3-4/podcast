export const durationDisplay = (duration) => {
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const seconds = Math.floor((duration / 1000) % 60)

  return `${minutes > 10 ? minutes : `0${minutes}`}:${seconds}`
}