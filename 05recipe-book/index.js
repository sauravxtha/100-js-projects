const API_KEY = "194f41fb6df840ec8d2d8d00636a19c5";

const call =
  "https://api.spoonacular.com/recipes/random?number=10&apiKey=194f41fb6df840ec8d2d8d00636a19c5";
const recipeListEl = document.querySelector("#recipeList");

function displayRecipes(recipes) {
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    let recipeTitleEl = document.createElement("h2");
    recipeTitleEl.textContent = recipe.title;

    let recipeImgEl = document.createElement("img");
    recipeImgEl.src = recipe.image;
    recipeImgEl.alt = "recipe image";

    let recipeSummaryEl = document.createElement("p");
    recipeSummaryEl.innerHTML = recipe.summary;

    let recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.textContent = "View Recipe";
    recipeLinkEl.classList.add("view-recipe");

    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeSummaryEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(call);
  const data = await response.json();

  return data.recipes;
}

async function getResults() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

getResults();
