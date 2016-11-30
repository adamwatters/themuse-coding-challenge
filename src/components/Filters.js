import React, { PropTypes } from 'react'
import Select from 'react-select';
import CATEGORY_NAMES from '../data/categoryNames'
import COMPANY_NAMES from '../data/companyNames'

const filtersOptions = [
  {
    name: 'company',
    options: COMPANY_NAMES.map(name => { return {value: name, label: name}})
  },
  {
    name: 'category',
    options: CATEGORY_NAMES.map(name => { return {value: name, label: name}})
  }
]

const Filters = ({ appliedFilters, changeHandlerMaker }) => {
  const filters = filtersOptions.map(filter => {
    return (
      <Select
      key={filter.name}
      name={filter.name}
      value={appliedFilters[filter.name]}
      options={filter.options}
      onChange={changeHandlerMaker(filter.name)}
      multi={true}
      />
    )
  })
  return (
  <span>
    {filters}
  </span>
  )
}

Filters.propTypes = {
  appliedFilters: PropTypes.objectOf(
    PropTypes.array
  ).isRequired,
  changeHandlerMaker: PropTypes.func.isRequired
}

export default Filters