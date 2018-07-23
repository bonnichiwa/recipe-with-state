import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        onDelete() {}
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete: PropTypes.func.isRequired,
    }
  
    render() {
        const recipes = this.props.recipes.map((recipe, ind) => (<Recipe key={recipe.id} {...recipe} onDelete={this.props.onDelete} />))
        return (
            <div className="recipe-container">{recipes}</div>
        )
    }
}

export default RecipeList;