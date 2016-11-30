import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import SimpleForm from '../SimpleForm';
import CategoryList from '../CategoryList';
import { getCategoryList } from '../../reducers';
import { addCategory, getCategories, selectCategory } from '../../actions'

class CategoryListContainer extends Component {

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  componentDidUpdate(prevProps) {
    const { categories } = this.props;
    const selectedCategory = categories.find(category => category.selected);
    if (selectedCategory) {
      browserHistory.push(`/${selectedCategory.name}`);
    }
  }
  
  render() {
    const { categories, addCategory, selectCategory } = this.props;
    return (
      <div className='grid category-list-container'>
        <div className='row'>
          <SimpleForm
            button='Add'
            onSubmit={ addCategory }
          ></SimpleForm>
        </div>

        <div className='row'>
          <CategoryList
            categories={ categories }
            onCategorySelected={ selectCategory }
          ></CategoryList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: getCategoryList(state)
});

const mapActionsToProps = () => ({
  addCategory,
  getCategories,
  selectCategory
});

CategoryListContainer = connect(
  mapStateToProps,
  mapActionsToProps()
)(CategoryListContainer);

export default CategoryListContainer;