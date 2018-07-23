import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
    static defaultProps = {
        onDelete() {}
    }
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired,
    }

    render() {
        const {title, ingredients, img, instructions, id, onDelete} = this.props;
        return (
            <div className="recipe-card">
                <div className="recipe-card-img"><img src={img} alt={title} /></div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients.map((ing, ind) => (
                            <li key={ind}>{ing}</li>
                        ))}
                    </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                    <button type="button" onClick={() => onDelete(id)}>Delete</button>
                </div>
            </div> 
        )
    }
}

export default Recipe;