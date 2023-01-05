{
  let aboutMeal = 53010 ;
  localStorage.setItem("mealID",`${aboutMeal}`) ;
  // accessing html elements

  const pageContent = document.getElementById("page-content-container");
  const searchButton = document.getElementById("search-btn");
  const inputValue = document.getElementById("search-input");
  const resultDiv = document.getElementById("result-heading");
  const searchResultContainer = document.getElementById(
    "search-results-container"
  );
  const myFavourites = document.getElementById("my-Fav-List");
  const favContainer = document.getElementById("my-favourites-container");
  console.log(favContainer);

  // event listener
  searchButton.addEventListener("click", searchMeal);

  // functions

  // Search function

  function searchMeal(e) {
    let value = inputValue.value;
    localStorage.setItem("searchValue", `${value}`)
  }
 
  // //my favourite list
  // myFavourites.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   pageContent.innerHTML = "";
  //   searchResultContainer.innerHTML = "";
  //   favContainer.innerHTML = "";
  //   console.log("fetch the api nd find by id nd then represent it in a card");
  //   let myfav = JSON.parse(localStorage.getItem("favourite"));
  //   console.log("myyyyy", myfav);
  //   if (myfav == null) {
  //     favContainer.innerHTML =
  //       " ADD your favourite meal  by searching and Liking it";
  //     return;
  //   }
  //   myfav.forEach((id) => {
  //     console.log("iddddddd", id);
  //     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("DADDKGKG##", data);
  //         addToDom(data);
  //       });
  //   });
  // });

  // function addToDom(data) {
  //   let meal = data.meals[0];
  //   console.log(meal);
  //   // creating the elemtnts
  //   let div = document.createElement("div");
  //   let a = document.createElement("a");
  //   let img = document.createElement("img");
  //   let h4 = document.createElement("h4");
  //   let button = document.createElement("a");
  //   let deletebtn = document.createElement("button");
  //   //setting their class name id and src
  //   div.setAttribute("class", "Meal-img gap");
  //   img.setAttribute("class", "card-img");
  //   img.setAttribute("src", `${meal.strMealThumb}`);
  //   img.setAttribute("alt", `${meal.strMeal}`);
  //   button.setAttribute("id", `${meal.idMeal}`);
  //   button.setAttribute("href", `/mealDetails.html`);
  //   button.innerText = "More Details";
  //   button.setAttribute("class", `result-like-btn`);
  //   deletebtn.setAttribute("class", `result-unlike-btn`);
  //   deletebtn.setAttribute("id", `${meal.idMeal}`);

  //   deletebtn.innerHTML = "Unlike";
  //   h4.innerHTML = `${meal.strMeal}`;
  //   // adding them to their respected parents
  //   div.appendChild(a);
  //   a.appendChild(img);
  //   a.appendChild(h4);
  //   div.appendChild(button);
  //   div.appendChild(deletebtn);
  //   //adding more detailsevent
  //   button.addEventListener("click", function (e) {
  //     let mealid = button.getAttribute("id");
  //     console.log("btn id ", mealid);
  //     localStorage.setItem("mealID", JSON.stringify(mealid));
  //   });
  //   //adding unlike event
  //   deletebtn.addEventListener("click", function (e) {
  //     let myfav = JSON.parse(localStorage.getItem("favourite"));
  //     console.log("BEFORE SPLICING", myfav);
  //     const id = deletebtn.getAttribute("id");
  //     //find in local if id found then pull fr
  //     let index = myfav.indexOf(id);
  //     if (index !== -1) {
  //       console.log("SPLICING");
  //       myfav.splice(index, 1);
  //     }
  //     localStorage.setItem("favourite", JSON.stringify(myfav));
  //     //   location.reload();
  //     //   myFavourites.scrollIntoView();
  //     deletebtn.innerHTML = "Unliked";
  //     console.log("myy ffaavv after removing ", myfav);
  //   });
  //   //adding it to the favlist container
  //   favContainer.appendChild(div);
  //   return;
  // }
}
