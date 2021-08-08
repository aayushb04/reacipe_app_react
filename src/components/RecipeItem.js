import React from "react";

const RecipeItem = props => {
  const {url,name, image, ingredientLines} = props;
  return (
      <div class="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div class="card-body">
          <h5>{name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
        <div><a href={url} className="link-warning" target="_blank">Visit page</a></div>
      </div>
  );
};

export default RecipeItem;
