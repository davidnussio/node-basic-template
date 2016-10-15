import {asyncFunction, generatorFunction} from '../app'

describe("Project configuration", () => {

  it("Test async function with async/await syntax", async () => {
    const asyncResult = await asyncFunction("Response 1", 2000)
    expect(asyncResult).toBe("Response 1")
  })

  it("Test async function with parallel execution", async () => {
    const startTime = new Date().getTime()
    const asyncResult = await Promise.all([
      asyncFunction("Response 1", 2000),
      asyncFunction("Response 2", 1000)
    ])
    const endTime = new Date().getTime()

    expect(endTime - startTime).toBeLessThan(2050)
    expect(asyncResult).toContain("Response 1")
    expect(asyncResult).toContain("Response 2")
  })

  it("Test yield/* operatior", () => {
    const generatedNumbers = 5
    const iterator = generatorFunction(generatedNumbers)
    let checkValue = 0
    for(let value of iterator) {
      expect(value).toBe(++checkValue)
    }
    expect(generatedNumbers).toBe(checkValue)
  })
})
