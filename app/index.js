
const asyncFunction = (value, timeout = 2000) => (
  new Promise((result, reject) => (
    setTimeout(() => result(value), timeout)
  ))
)

function * generatorFunction(numbers) {
  for (let i = 1; i <= numbers; i++) {
    yield i
  }
}

export {
  asyncFunction,
  generatorFunction
}
