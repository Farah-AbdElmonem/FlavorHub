const recipes = [
    {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
        title: "Chicken Curry",
        description: "A flavorful dish made with chicken, spices, and coconut milk.",
    },
    {
        title: "Vegetable Stir Fry",
        description: "A quick and healthy dish with assorted vegetables and soy sauce.",
    },
    {
        title: "Chocolate Cake",
        description: "A rich and moist chocolate cake topped with creamy frosting.",
    },
];

const recipeList = document.getElementById('recipe-list');
const modal = document.getElementById('recipe-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Function to display recipes
function displayRecipes() {
    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `<h3>${recipe.title}</h3>`;
        recipeDiv.onclick = () => showRecipeDetails(index);
        recipeList.appendChild(recipeDiv);
    });
}

// Function to show recipe details in modal
function showRecipeDetails(index) {
    modalTitle.textContent = recipes[index].title;
    modalDescription.textContent = recipes[index].description;
    modal.style.display = "block";
}

// Close the modal
closeModal.onclick = () => {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Initialize the recipe display
displayRecipes();