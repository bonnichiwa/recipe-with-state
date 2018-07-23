import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeInput.css';

class RecipeInput extends Component {
    static defaultProps = {
        onSave() {},
        toggleForm() {}
    }
    
    static propTypes = {
        onSave: PropTypes.func,
        toggleForm: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: '',
        };
    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleNewIngredient = e => {
        const {ingredients} = this.state;
        this.setState({ingredients: [...ingredients, '']});
    }
    
    handleChangeIngredient = e => {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? e.target.value : ing
        ));
        this.setState({ingredients});
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            instructions: '',
            ingredients: [''],
            img: '',
        })
    }
    
    render() {
        const {title, instructions, ingredients, img} = this.state;
        let inputs = ingredients.map((ing, i) => (
            <div 
                className="recipe-form-line"
                key={`ingredient-${i}`}>
                <label>{i+1}.
                    <input
                        type="text"
                        name={`ingredient-${i}`}
                        value={ing}
                        size={45}
                        autoComplete="off"
                        placeholder="Ingredient"
                        onChange={this.handleChangeIngredient}
                        >
                    </input>
                </label>
            </div>
        ));
        
        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button
                        type="button"
                        className="close-button"
                        onClick={this.props.toggleForm}
                    >X</button>
                    <div className="recipe-form-line">
                        <label htmlFor="recipe-title-input">Title</label>
                        <input
                            id="recipe-title-input"
                            key="title"
                            name="title"
                            type="text"
                            size={42}
                            autoComplete="off"
                            value={title}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <label htmlFor="recipe-instructions-input">Instructions</label>
                    <textarea
                        id="recipe-instructions-input"
                        key="instructions"
                        name="instructions"
                        rows="8"
                        columns="50"
                        autoComplete="off"
                        value={instructions}
                        onChange={this.handleChange} 
                    />
                    {inputs}
                    <button type="button" onClick={this.handleNewIngredient} className="buttons">+</button>
                    <div className="recipe-form-line">
                        <label htmlFor="recipe-img-input">Image Url</label>
                        <input
                            id="recipe-img-input"
                            name="img"
                            type="text"
                            placeholder=""
                            value={img}
                            size={36}
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="buttons"
                        style={{alignSelf: 'flex-end', marginRight: 0}}>
                    SAVE
                    </button>
                </form>
            </div>
        )
    }
}

export default RecipeInput;