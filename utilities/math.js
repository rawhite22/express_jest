const fahrenheitToCelcius = (temp) => {
  return (temp - 32) / 1.8
}
const celciusToFahrenheit = (temp) => {
  return temp * 1.8 + 32
}
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Positive number only!')
      }
      resolve(a + b)
    }, 2000)
  })
}

module.exports = {
  fahrenheitToCelcius,
  celciusToFahrenheit,
  add,
}
