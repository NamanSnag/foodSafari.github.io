# Meals Search Web-App

The Mealsearch app is built using themealdb API's and only vanilla JavaScript and the HTML CSS .

## Author

[@Rajy Philip](https://github.com/RajyPhilip)

### Details :

- This app allows users to search for Meals, view details about individual Meal, and add Meals to a list of favorites.
- It includes several constants that are used to store references to DOM elements such as the search input field, the container for the search results.
- There is an event listener attached to the search submit button field that listens for input value and sends a request to the TheFoodMeal API to search for Meals matching the user's input. The response from the API is then redirected to search result and display a card for each Meal in the search results. Each card includes a "Like" button .
- The event listeners for the "Like" button handle adding Meals to the favorites list .
- The event listener for my favourites redirects to myFavourites Page it shows every Meals you have liked and displays them . it also has two event listener to it :-
  - The first event listener is to get more details for the specific meal and displays the instruction and incridients.
  - The second event listener is to unlike and remove from the favourites and rerender it.
- The code also includes functions for storing and retrieving the favorites list from local storage.

## API Reference

#### Get api's and key

http
https://www.themealdb.com/

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `api_key` | `string` | api         |

#### -> For searching the Meals :

http
// Search API Link: https://www.themealdb.com/api/json/v1/1/search.php?s=${meal name}

#### -> For Meal details by Meal-id:

http
// Details API Link: www.themealdb.com/api/json/v1/1/lookup.php?i=${ id of meal }

## Demo

Insert gif or link to demo
