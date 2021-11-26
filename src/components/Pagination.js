import React, { useState } from 'react';
/* eslint-disable react/prop-types */

const Pagination = (props) => {
  const { countryPages, itemsPerPage, onPageChange } = props;
  const [selectedPage, setSelectedPage] = useState(0);
  const buttons = [];

  const numberOfPages = Math.ceil(countryPages / itemsPerPage);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  for (let i = 0; i < numberOfPages; i += 1) {
    buttons.push(<button type="button" key={`key-${i}`} onClick={() => handlePageChange(i)} className={i === selectedPage ? 'selected' : 'unselected'}>{i}</button>);
  }

  return (
    <div className="buttons">{buttons}</div>
  );
};

export default Pagination;
