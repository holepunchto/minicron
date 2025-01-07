function seconds (amount, fn, ...args) {
  return setInterval(
    fn,
    amount * 1_000,
    ...args
  )
}
function minutes (amount, fn, ...args) {
  return setInterval(
    fn,
    amount * 60_000,
    ...args
  )
}
function hours (amount, fn, ...args) {
  return setInterval(
    fn,
    amount * 3_600_000,
    ...args
  )
}
function days (amount, fn, ...args) {
  return setInterval(
    fn,
    amount * 86_400_000,
    ...args
  )
}
function everyDayAt (hour, fn, ...args) {
  const wait = getMsToNextOccurance(hour)
  setTimeout(() => {
    fn(...args)
    days(1, fn, ...args)
  }, wait)
}

module.exports = {
  seconds, minutes, hours, days, everyDayAt
}

function getMsToNextOccurance (hourGoal) {
  const current = new Date()
  const target = new Date()

  if (current.getHours() < hourGoal) {
    target.setHours(hourGoal)
    target.setMinutes(0)
    target.setSeconds(0)
  } else {
    const currentDay = current.getDate()
    target.setDate(currentDay + 1)
    target.setHours(hourGoal)
    target.setMinutes(0)
    target.setSeconds(0)
  }

  const wait = target.getTime() - current.getTime()
  return wait
}
