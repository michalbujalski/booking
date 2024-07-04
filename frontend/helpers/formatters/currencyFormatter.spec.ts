import { formatCurrency } from './currencyFormatter'

describe('Currency formatter', () => {
  test('Should format USD currency correctly', () => {
    const formatted = formatCurrency(1000.01, 'USD')
    expect(formatted).toEqual('$1,000.01')
  })
  test('Should format EUR currency correctly', () => {
    const formatted = formatCurrency(31.00, 'EUR')
    expect(formatted).toEqual('€31.00')
  })
})