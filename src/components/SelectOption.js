import React from 'react';
import './ListItem.css';

const SelectOption= ({munro, key}) => {

//   const handleChange = function() {
//     onMunroSelected(munro);
//   };

  return <option value={key}>{munro.name}</option>
}

export default SelectOption;