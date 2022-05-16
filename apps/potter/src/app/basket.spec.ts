import { TestBed } from '@angular/core/testing';
import { Basket } from './basket';

describe('Basket', () => {
  it('should create an instance', () => {
    expect(new Basket()).toBeTruthy();
  });

  test('testBasics', () => {
    const basket = new Basket()
    expect(basket.buy([])).toBe(0);
    expect(basket.buy([1])).toBe(8);
    expect(basket.buy([2])).toBe(8);
    expect(basket.buy([3])).toBe(8);
    expect(basket.buy([4])).toBe(8);
    expect(basket.buy([1, 1, 1])).toBe(24);
  });

  test('testSimpleDiscounts', () => {
    const basket = new Basket()
    expect(basket.buy([0, 1])).toBe(8 * 2 * 0.95);
    expect(basket.buy([0, 2, 4])).toBe(8 * 3 * 0.9);
    expect(basket.buy([0, 1, 2, 4])).toBe(8 * 4 * 0.8);
    expect(basket.buy([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75);
  });
});
