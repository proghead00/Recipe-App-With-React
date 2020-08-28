import React from 'react';
import style from './recipe.module.css';
const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1 class="t-title"> {title}</h1>
			<h1 class="ingredients-title">Ingredients:</h1>
			<ol>{ingredients.map((ingredient) => <li>{ingredient.text}</li>)}</ol>

			<p>
				<b className="calo1">Calories</b>: {calories}
			</p>
			<img className={style.image} src={image} alt="" />
		</div>
	);
};
export default Recipe;
