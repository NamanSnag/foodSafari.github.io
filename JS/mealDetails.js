{
  let section = document.getElementById("sec");

  let id = JSON.parse(localStorage.getItem("mealID"));
  console.log("iddd", id);

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      let meal = data.meals[0];
      mealpageCreation(meal);
    });
  function mealpageCreation(meal) {
    console.log(meal);
    console.log("PAGE CReation start");
    const mealDetailContainer = document.createElement("div");
    mealDetailContainer.id = "meal-detail-container";

    const leftBox = document.createElement("div");
    leftBox.className = "left-box";

    const detailMealHeading = document.createElement("h1");
    detailMealHeading.className = "detail-meal-heading";
    detailMealHeading.textContent = `${meal.strMeal}`;

    const mainImgDetailsPage = document.createElement("img");
    mainImgDetailsPage.className = "main-img-detailsPage";
    mainImgDetailsPage.src = `${meal.strMealThumb}`;
    mainImgDetailsPage.alt = "";

    leftBox.appendChild(detailMealHeading);
    leftBox.appendChild(mainImgDetailsPage);

    const rightBox = document.createElement("div");
    rightBox.className = "right-box";

    const detailMealIncridientsHeading = document.createElement("h1");
    detailMealIncridientsHeading.className = "detail-meal-incridientsHeading";
    detailMealIncridientsHeading.textContent = "Incridients";

    const allIncridientsContainer = document.createElement("div");
    allIncridientsContainer.className = "all-incridients-container";
    let arr = [
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
    ];
    for (let i = 0; i < 6; i++) {
      if (arr[i] === "") {
      } else {
        const incridientsContainer = document.createElement("div");
        incridientsContainer.className = "incridients-container";

        const incrdientImg = document.createElement("img");
        incrdientImg.className = "incrdient-img";
        incrdientImg.src = `https://www.themealdb.com/images/ingredients/${arr[i]}.png`;
        incrdientImg.alt = "";

        const h2 = document.createElement("h2");
        let b = String(i + 1);
        h2.textContent = `${arr[i]}`;

        incridientsContainer.appendChild(incrdientImg);
        incridientsContainer.appendChild(h2);
        allIncridientsContainer.appendChild(incridientsContainer);
      }
    }

    rightBox.appendChild(detailMealIncridientsHeading);
    rightBox.appendChild(allIncridientsContainer);

    mealDetailContainer.appendChild(leftBox);
    mealDetailContainer.appendChild(rightBox);

    const instructionDetails = document.createElement("h1");
    instructionDetails.className = "instruction-details";
    instructionDetails.textContent = "Instructions";

    const aboutInstructions = document.createElement("p"); // append to sec
    aboutInstructions.className = "about-instructions";
    aboutInstructions.textContent = `${meal.strInstructions}`;

    const h1 = document.createElement("h1");
    h1.className = "instruction-details";
    h1.textContent = "Instructions";
    section.appendChild(mealDetailContainer);
    section.appendChild(h1);
    section.appendChild(aboutInstructions);
  }
}
