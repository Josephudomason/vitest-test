import { describe, it, expect, test } from "vitest";
import { LongString, isPrime, shippingCost } from './Example'


describe('LongString', () => {
  test('returns the longest string', () => {
    //expect(LongString('a', 'ab')).toBe('ab')

    const result = LongString('a', 'ab');

    expect(result).toBe('ab')
  })

  it('returns the first string if the strings are equal', () => {
    expect(LongString('ag', 'ab')).toBe('ag');
  })

  it('returns the longest string', () => {
    expect(LongString('acabkja', 'ab')).toBe('acabkja')
  })

  it('handles empty string', () => {
    expect(LongString('ab', '')).toBe('ab')
  })

  it('handles white-space', () => {
    expect(LongString('   abc    ', 'misty')).toBe('misty')
  })
})


describe('isPrime', () => {
  // it('returns true/truthy for small prime number', () => {
  //   expect(isPrime(2)).toBe(true);
  //   expect(isPrime(3)).toBe(true);
  //   expect(isPrime(5)).toBeTruthy();
  // })

  // it('returns false/falsy for non-primes', () => {
  //   expect(isPrime(0)).toBe(false);
  //   expect(isPrime(1)).toBe(false);
  //   expect(isPrime(4)).toBeFalsy();
  // })

  // it('matches result in an array using toEqual', () => {
  //   const numbers = [2, 3, 4, 5];
  //   const results = numbers.map(isPrime);

  //   expect(results).toEqual([true, true, false, true])
  // })

  // it('detects primes within a filtered list', () => {
  //   const numbers = [1, 2, 3, 4, 5, 6, 7];
  //   const primes = numbers.filter(isPrime);

  //   expect(primes).toContain(7)
  //   expect(primes).not.toContain(4)
  // })

  // it('throws an error when passed a non-number', () => {

  //   const nonNum = () => isPrime('ab' as any)

  //   expect(nonNum).toThrow();
  //   expect(nonNum).toThrow('Input must be a number')
  // })

  // it('has correct type for result', () => {
  //   expect(isPrime(7)).toBeTypeOf('boolean')
  //   expect(typeof isPrime(7)).toBe('boolean')
  // })

  it('treats 0 and 1 as non-prime, and 2 as prime', () => {
    expect(isPrime(0 || 1)).toBe(false);
    expect(isPrime(2)).toBe(true);

  })

  it('returns false all even numbers > 2', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(100)).toBe(false);
  })


  it('identifies common primes', () => {
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
  })

  it('returns false for perfect squares reliably', () => {
    expect(isPrime(49)).toBe(false);
    expect(isPrime(121)).toBe(false);

  })

  it('returns false for non-intergers', () => {
    expect(isPrime(2.5)).toBe(false);
  })
})

describe('shippingCost', () => {
  it('charges correct prices for interior weights', () => {
    expect(shippingCost(0.5)).toBe(3.99)
    expect(shippingCost(3)).toBe(5.99)
    expect(shippingCost(10)).toBe(8.99)
    expect(shippingCost(50)).toBe(14.99)
  })

  //boundary testing

  it('charges correct prices at boundaries', () => {
    expect(shippingCost(1)).toBe(3.99)
    expect(shippingCost(5)).toBe(5.99)
    expect(shippingCost(20)).toBe(8.99)
    expect(shippingCost(21)).toBe(14.99)
  })


  it('applies FREESHIPPING Coupon exactly', () => {
    expect(shippingCost(1, 'FREESHIPPING')).toBe(0)
    expect(shippingCost(21, 'FREESHIPPING')).toBe(0)
  })


  it.each([
    { weight: 1, coupon: 'freeshipping', expected: 3.99 },
    { weight: 1, coupon: 'NOTHING', expected: 3.99 },
    { weight: 1, coupon: '', expected: 3.99 }
  ])('ignores non-matching Coupons', ({ weight, coupon, expected }) => {
    expect(shippingCost(weight, coupon)).toBe(expected)
  })

  it('throws an error for invalid weights', () => {
    expect(() => shippingCost(0)).toThrow();
  })

  // it('throws an error when coupon is not a string', () => {
  //   expect(() => shippingCost(1, 1)).toThrow(/coupon/i);
  // })
})

