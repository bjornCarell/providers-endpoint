import createUniqueList from '../scripts/createUniqueList'

test('should return a array with no duplicated items', () => {
    const arr = ['OPEN_BANKING', 'OTHER', 'OTHER', 'OPEN_BANKING']
    const actual = createUniqueList(arr)
    expect(actual).toEqual(['OPEN_BANKING', 'OTHER'])
})