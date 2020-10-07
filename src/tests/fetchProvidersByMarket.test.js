import fetchProvidersByMarket from '../scripts/fetchProvidersByMarket'
import baseURL from '../scripts/baseURL'
import {providersSE} from './providersModelSE'

global.fetch = jest.fn(() => 
Promise.resolve({
    json: () => Promise.resolve({providersSE}),
}))

beforeEach(() => {
    fetch.mockClear()
})

test('should return providers model for SE market', async () => {
    let market = 'SE'
    let providersSE = providersSE
    const providers = await fetchProvidersByMarket(market)

    expect(providers).toEqual(providersSE)
    expect(fetch).toHaveBeenCalledTimes(1)
})

test('should return null if failing to fetch API', async () => {
    let market = 'SE'
    fetch.mockImplementationOnce(() => Promise.reject('API is down'))
    const providers = await fetchProvidersByMarket(market)

    expect(providers).toEqual(null)
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/SE`)
})