import React, { Component } from 'react';
import Nav from './Nav';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Alfredo Pasta",
          ingredients: ["flour", "water"],
          instructions: "Mix ingredients.",
          img: "alfredo.jpeg"
        },
        {
          id: 1,
          title: "Milkshake",
          ingredients: ["2 scoops of ice cream", "8 ounces of milk"],
          instructions: "Combine ice cream and milk. Blend until creamy.",
          img: "milkshake.jpeg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon of olive oil"],
          instructions: "Toast bread. Slice avocado and spread on toast. Bite.",
          img: "avocado.jpeg"
        }
      ],
      nextRecipeId: 3,
      showForm: false,
    };
  }
  
  handleSave = recipe => {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      };
    });
  }
  
  onDelete = recipeId => {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== recipeId);
    this.setState({recipes});
  }
  
  toggleForm = () => {
    this.setState((prevState, props) => {
      return {
        showForm: !prevState.showForm
      };
    });
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div>
        <Nav showForm={showForm} toggleForm={() => this.setState({showForm: true})} />
        { showForm ? <RecipeInput onSave={this.handleSave} toggleForm={() => this.setState({showForm: false})} showForm={showForm} /> : null }
        <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default RecipeApp;
