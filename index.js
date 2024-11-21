module.exports = {
  seconds: (amount, fn, ...args) => {
    return setInterval(
      fn,
      amount * 1_000,
      ...args
    )
  },
  minutes: (amount, fn, ...args) => {
    return setInterval(
      fn,
      amount * 60_000,
      ...args
    )
  },
  hours: (amount, fn, ...args) => {
    return setInterval(
      fn,
      amount * 3_600_000,
      ...args
    )
  },
  days: (amount, fn, ...args) => {
    return setInterval(
      fn,
      amount * 86_400_000,
      ...args
    )
  }
}
