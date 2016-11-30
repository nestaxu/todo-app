import React from 'react'
import classNames from 'classnames'

require('./category.scss');

const Category = ({ children, selected, onClick }) => {
  const linkClasses = classNames({
    'category-link': true,
    'selected': selected
  });

  return (
    <div className='category'>
      <a className={ linkClasses } onClick={ onClick }>
        { children }
        <span className='sign'>&gt;</span>
      </a>
    </div>
  );
};

export default Category;