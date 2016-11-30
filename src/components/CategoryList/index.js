import React, { Component } from 'react';
import Category from '../Category';

require('./category-list.scss');

class CategoryList extends Component {
  render() {
    const { categories, onCategorySelected } = this.props;
    return (
      <div className='category-list'>
        {
          categories.map(category => (
            <div className='row category' key={ category.id }>
              <Category
                name={ category.name }
                selected={ category.selected }
                onClick={ () => onCategorySelected(category) }
              >
                { category.displayName }
              </Category>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CategoryList;