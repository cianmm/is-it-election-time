export default function isBefore(timestamp) {
  const today = new Date()
  const dateToCheck = new Date(timestamp)

  return today < dateToCheck
}
