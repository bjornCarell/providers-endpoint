import fetchProvidersByMarket from './fetchProvidersByMarket'
import {selectProperties} from '../index'

const createPorpertiesDropdown = market => 
   fetchProvidersByMarket(market)
    .then((providers) => {
       try {
         return providers.map(provider => 
            Object.keys(provider))
       } catch (error) {
          alert('Make sure you have enabled CORS support. See README.md for more info.')
       }
    }
    )
    .then((providersKeys) => {
       const allKeysList = providersKeys.join('').split(',')
       const uniqueKeysList = [...new Set(allKeysList)]
       return uniqueKeysList
    })
    .then((keys) => {
       selectProperties.innerHTML = ''
        keys.forEach((key) => {
           const option = document.createElement('option')
           option.value = key
           option.textContent = key
           selectProperties.appendChild(option)
        })

        return selectProperties
    })

export default createPorpertiesDropdown