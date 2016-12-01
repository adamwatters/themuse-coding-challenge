const buildSearchUrl = (filtersApplied, page=0) => {

  const filterParamString = Object.keys(filtersApplied).reduce((acc, filterName) => {
    return acc.concat(filtersApplied[filterName].reduce((acc, filter) => {
      return acc.concat(`${filterName}=${encodeURIComponent(filter)}&`)
    },''))
  },'')

  return `https://api-v2.themuse.com/jobs?${filterParamString}page=${page}&api_key=640886a603fbf32faffa23a91e7d263ce9d47630d4d3d0b2434adce800ef01a1`
}

export default buildSearchUrl