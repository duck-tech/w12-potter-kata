import { TestBed } from '@angular/core/testing'
import { Basket } from './basket'

describe("Basket", () => {
  let basket: Basket

  beforeEach(() => {
    basket = new Basket();
  })

  it("should create an instance", () => {
    expect(basket).toBeTruthy();
  })

  test("testBasics", () => {
    expect(basket.buy([])).toBe(0)
    expect(basket.buy([1])).toBe(8)
    expect(basket.buy([2])).toBe(8)
    expect(basket.buy([3])).toBe(8)
    expect(basket.buy([4])).toBe(8)
    expect(basket.buy([1, 1, 1])).toBe(24)
  })

  test("testSimpleDiscounts", () => {
    expect(basket.buy([0, 1])).toBe(8 * 2 * 0.95)
    expect(basket.buy([0, 2, 4])).toBe(8 * 3 * 0.9)
    expect(basket.buy([0, 1, 2, 4])).toBe(8 * 4 * 0.8)
    expect(basket.buy([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75)
  })

  test('testSeveralDiscounts', () => {
    expect(basket.buy([0, 0, 1])).toBe(8 + (8 * 2 * 0.95))
    expect(basket.buy([0, 0, 1, 1])).toBe(2 * (8 * 2 * 0.95))
    expect(basket.buy([0, 0, 1, 2, 2, 3])).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95))
    expect(basket.buy([0, 1, 1, 2, 3, 4])).toBe(8 + (8 * 5 * 0.75))
  })
})
