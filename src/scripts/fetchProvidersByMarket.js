import baseURL from './baseURL'

const fetchProvidersByMarket = async market => {
    let upperCaseMarket = market.toUpperCase()
    try {
        const result = await fetch(`${baseURL}/${upperCaseMarket}`)
        const data = await result.json()
        return data.providers
    } catch (error) {
        return null
    }
}

export default fetchProvidersByMarket