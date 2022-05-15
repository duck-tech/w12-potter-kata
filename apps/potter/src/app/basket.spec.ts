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
});
