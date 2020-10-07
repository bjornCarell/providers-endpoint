'use strict'
import {markets} from './utils/markets'
import copyNodeContent from './scripts/copyNodeContent'
import toggleClassInOneClick from './scripts/toggleClassInOneClick'
import createPropertiesDropdown from './scripts/createPropertiesDropdown'
import getOutput from './scripts/getOutput'

// html elements
const market = document.getElementById('market')
const linkAPI = document.getElementById('link-api')
export const formOutput = document.getElementById('form-output')
export const selectProperties = document.getElementById('select-properties')
export const withProviderName = document.getElementById('with-provider-name')
const submit = document.getElementById('submit')
const endpointMarket = document.getElementById('endpoint-market')
const list = document.getElementById('list')
export const copyBtn = document.getElementById('copy')
const clearBtn = document.getElementById('clear')

if(markets) markets.forEach(({countryCode}) => {
  const option = document.createElement('option')
  option.value = countryCode
  option.textContent = countryCode
  market.appendChild(option)
})

// event listeners
 if(market) market.addEventListener('change', e => {
   const code = e.target.value
     if(code.length > 1){
         createPropertiesDropdown(e.target.value)
         toggleClassInOneClick(endpointMarket, 'blink')
         endpointMarket.textContent = `/${code.toUpperCase()}`
         linkAPI.href = `https://api.tink.se/api/v1/providers${endpointMarket.textContent}`
     } else {
        selectProperties.innerHTML = ''
     }
 })

 if(submit) {
    submit.addEventListener('click', e => {
      e.preventDefault()
      const marketValue = market.value
      const propJSONValue = selectProperties.value || 'accessType'

      if(!marketValue || marketValue.length < 2) {
        alert('Market needs to be in format of two letters. Ex. "SE" for Sweden')
      } else {
        getOutput(marketValue, propJSONValue)
      }
    })
  }

  // clear function
  const clear = () => {
      copyBtn.style.opacity = 0
      market.value = 'Click to choose a market'
      endpointMarket.textContent = ''
      withProviderName.checked = false
      list.innerHTML = ''
      selectProperties.innerHTML = '...'
      linkAPI.removeAttribute('href')
  }

if(clearBtn) clearBtn.addEventListener('click',clear)

if(copyBtn) copyBtn.addEventListener('click',e => {
    copyNodeContent(list, 'fade')
  })


