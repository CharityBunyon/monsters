import React from 'react';

import './SearchBox.scss';

// class SearchBox extends React.Component {
//   render() {
//     return (
//      <input
//       className='search'
//       type='search'
//       placeholder={ }
//       onChange={this.searchMonsters}
//       />
//     );
//   }
// }


const SearchBox = ({ placeholder, handleChange }) => (
    <input
      className='search'
      type='search'
      placeholder={ placeholder }
      onChange={handleChange}
      />
);

export default SearchBox;
