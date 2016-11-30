import React, { PropTypes } from 'react'
import Select from 'react-select';
import CATEGORY_NAMES from '../data/categoryNames'
import COMPANY_NAMES from '../data/companyNames'
import LOCATION_NAMES from '../data/locationNames'
import LEVEL_NAMES from '../data/levelNames'

const filtersOptions = [
  {
    name: 'company',
    options: COMPANY_NAMES.map(name => { return {value: name, label: name}})
  },
  {
    name: 'category',
    options: CATEGORY_NAMES.map(name => { return {value: name, label: name}})
  },
  {
    name: 'location',
    options: LOCATION_NAMES.map(name => { return {value: name, label: name}})
  },
  {
    name: 'level',
    options: LEVEL_NAMES.map(name => { return {value: name, label: name}})
  }
]

const Filters = ({ appliedFilters, changeHandlerMaker }) => {
  const filters = filtersOptions.map(filter => {
    return (
      <span key={filter.name}>
        <span>{filter.name}</span>
        <Select
        name={filter.name}
        value={appliedFilters[filter.name]}
        options={filter.options}
        onChange={changeHandlerMaker(filter.name)}
        multi={true}
        />
      </span>
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