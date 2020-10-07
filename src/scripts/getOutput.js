import fetchProvidersByMarket from './fetchProvidersByMarket'
import {formOutput, withProviderName, copyBtn} from '../index' 
import createUniqueList from './createUniqueList'
import markup from './markup'
import copyNodeContent from './copyNodeContent'
import toggleClassInOneClick from './toggleClassInOneClick'

const listValues = (providers, propJSON, ) => {
    return providers.filter(provider => 
        provider[propJSON] && provider[propJSON].length > 0)
        .map(provider => provider[propJSON])
}

const listProvidersAndValues = (providers, propJSON) => {
    return providers.filter(provider => 
        provider[propJSON] && provider[propJSON].length > 0)
        .map(provider => markup(provider, propJSON))
}

 // Change the argument to the alpa2Code for the country 
 const getOutput = (market, propJSON = 'accessType') => {
    fetchProvidersByMarket(market) 
    .then((providers) => {
        if( 
            propJSON && propJSON !== 'fields' 
            && !withProviderName.checked
          ) {
            return listValues(providers, propJSON)
        } else if ( 
                    propJSON && propJSON !== 'fields' 
                    && withProviderName.checked
                  ) {
            return listProvidersAndValues(providers,propJSON)
        } else {
            throw new Error('This task is not supported. Make a wish or build support for it!') // break the promise chain
        }
    })
    .then((outputTexts) => {
        if(Array.isArray(outputTexts[0])) {
            const formArrays = createUniqueList(outputTexts).join(',').split(',') // what is going on here?
            return createUniqueList(formArrays)
        } else {
            return createUniqueList(outputTexts)
        }
    }).then((uniqueItemsList) => {
        const list = document.getElementById("list")  
        list.classList.add('list')              
        list.innerHTML = ''
        
        uniqueItemsList.forEach((text, index)=> {
            const item = document.createElement('li')
            item.classList.add('list-item')
            item.innerHTML = `<span class="list-item-text">${text}</span>`
            item.addEventListener('click', e => {
                copyNodeContent(item, 'blink')
            })
            list.appendChild(item)
        })
    
        formOutput.appendChild(list)
        copyBtn.style.opacity = 1
        copyBtn.classList.add('fade')
        toggleClassInOneClick(list, 'blink')
    })
    .catch((err) => alert(err))
 }

 export default getOutput
