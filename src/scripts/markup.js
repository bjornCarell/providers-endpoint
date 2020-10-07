import formString from './formString'

// can't split up string on multiple lines without function being very hard to test
const markup = (provider, propJSON) => `<span class="provider-name">${provider.name}: </span><span class="json-property">${provider[propJSON]}</span>`

export default markup