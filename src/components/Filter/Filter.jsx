// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class Filter extends Component {
//   handleInputChange = e => {
//     const { value } = e.target;

//     this.props.onChange(value);
//   };

//   render() {
//     return (
//       <>
//         <h3>Find contact by name</h3>
//         <input onChange={this.handleInputChange} />
//       </>
//     );
//   }
// }

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

import React from 'react';

export function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}

export default Filter;
