import React from 'react';

const Pagination = ({ page, changePage }) => {
  return (
    <div>
      <p>page {page}</p>
      {page > 1 ? <button onClick={() => changePage('prev')}>prev page</button> : ''}
      <button onClick={() => changePage('next')}>next page</button>
    </div>
  )
}

export default Pagination;
