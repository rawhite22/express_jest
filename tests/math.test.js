const {
  fahrenheitToCelcius,
  celciusToFahrenheit,
  add,
} = require('../utilities/math')

test('fahrenheit to celcius', () => {
  const temp = fahrenheitToCelcius(32)
  expect(temp).toBe(0)
})
test('celcius to fahrenheit', () => {
  const temp = celciusToFahrenheit(0)
  expect(temp).toBe(32)
})

// async testing
test('Async test demo', (next) => {
  setTimeout(() => {
    expect(2).toBe(2)
    next()
  }, 2000)
})

test('add async function', (next) => {
  add(1, 2).then((sum) => {
    expect(sum).toBe(3)
    next()
  })
})

test('Should add two numbers async await style', async () => {
  const sum = await add(1, 2)
  expect(sum).toBe(3)
})
