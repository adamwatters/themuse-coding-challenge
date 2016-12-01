import buildSearchUrl from '../buildSearchUrl'

describe('buildSearchUrl accepts a filtersApplied object and a page to build and returns a url string', () => {
  
  const url = (filterString, page) => {
    return `https://api-v2.themuse.com/jobs?${filterString}page=${page}&api_key=640886a603fbf32faffa23a91e7d263ce9d47630d4d3d0b2434adce800ef01a1`
  }

  it('should omit filter query parameters if passed and empty object', () => {
    expect(
      buildSearchUrl({}, 0)
    ).toEqual(url("", 0))
  })
  it('should default to page zero if no page parameter is passed', () => {
    expect(
      buildSearchUrl({})
    ).toEqual(url("", 0))
  })

  it('should handle a filtersApplied object, and return url safe string', () => {

    const filtersApplied = {
      category: ["HR & Recruiting"],
      company: ["Dogfish Head", "TED"],
      level: [] //filters applied may contain empty arrays if filters are added then removed
    }

    const expectedSubString = "category=HR%20%26%20Recruiting&company=Dogfish%20Head&company=TED&"

    expect(
      buildSearchUrl(filtersApplied)
    ).toEqual(url(expectedSubString, 0))
  })
})