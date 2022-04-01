import type * as Silly from "../example"
const { sillyFunction } = jest.requireActual<typeof Silly>("../example")

describe("silly function", () => {
  test("guaranteed random", () => {
    expect(sillyFunction()).toBe(4)
  })
})

// required with this small example
// to make the isolatedModules config happy
export {}