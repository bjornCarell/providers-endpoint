import formString from '../scripts/formString'

test('should not form string if JSON property is "financialInstitutionId"', () => {
    const str = 'e53k8lk0l2l2jdgh77rssdg'
    const propJSON = 'financialInstitutionId'
    const actual = formString(str, propJSON)
    expect(actual).toBe(str)
})

test('should not form string if JSON property is "name"', () => {
    const str = 'Eric Ericson'
    const propJSON = 'name'
    const actual = formString(str, propJSON)
    expect(actual).toBe(str)
})

test('should not form string if JSON property is "market"', () => {
    const str = 'DE'
    const propJSON = 'market'
    const actual = formString(str, propJSON)
    expect(actual).toBe(str)
})

test('should not form string if JSON property is "passwordHelpText"', () => {
    const str = 'To connect your broker, you need to identify yourself using Mobile BankID.'
    const propJSON = 'passwordHelpText'
    const actual = formString(str, propJSON)
    expect(actual).toBe(str)
})

test('should not form string if no JSON property is given as second argument', ()  =>{
    const str = "OPEN_BANKING"
    const actual = formString(str,'')
    expect(actual).toBe(str)
})

test('should form string to not include underscore, first char should be spase first letter capitalized and the rest in minor letters', () => {
    const str = 'OPEN_BANKING'
    const propJSON = 'accessType'
    const actual = formString(str, propJSON)
    expect(actual).toBe(' Open banking')
})

