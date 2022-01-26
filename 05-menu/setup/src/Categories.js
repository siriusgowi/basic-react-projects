import React from 'react';

const Categories = ({filterItems}) => {
  return <div>
    <button className='btn-container'>
          <button className='btn' onClick={()=> filterItems('breakfast')}>breakfast</button>
    </button>
  </div>
};

export default Categories;
