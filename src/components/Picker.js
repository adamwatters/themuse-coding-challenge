import React, { PropTypes } from 'react'
import Select from 'react-select';

const Picker = ({ values, onChange, options }) => (
  <span>
    <Select
      name="category-select"
      value={values}
      options={options}
      onChange={onChange}
      multi={true}
    />
  </span>
)

Picker.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
