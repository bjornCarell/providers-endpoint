import markup from '../scripts/markup'

test('should return correct markup and content', () => {
    const provider = {
        accessType: 'OTHER',
        displayName: 'Collector bank',
        name: 'collector-bankid',
    }

    let propJSON = 'accessType'

    const actual = markup(provider, propJSON)
    expect(actual).toBe(`<span class=\"provider-name\">collector-bankid: </span><span class=\"json-property\">OTHER</span>`)
})