## About The Project
Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.

## Built With
This app is built with pure vanilla JavaScript along with HTML and SCSS. It uses webpack as module bundler and NPM as package manager.

- HTML
- SCSS
- Vanilla JavaScript
- Webpack
- NPM
- Getting Started

To get started with project just simply fork this repo or download locally on your System.

## To get a local copy up and running follow these simple example steps.

## Prerequisites
Start with the latest version of NPM to avoid any errors:

```bash
npm
npm install npm@latest -g
```

Also install additional dependencies
```bash
 npm i --save core-js regenerator-runtime
```

Installation
Get a free API Key at Forkify API_KEY
Clone the repo

```bash
git clone https://github.com/catherineisonline/forkify
```
Install NPM packages

```bash
npm install
```

Enter your API in config.js

```bash
const KEY = 'ENTER YOUR API';
```

## Usage

- The Forkify Recipe App allows users to search for recipes.

- Users can view the recipe along with the cook time and also increase or decrease the amount of servings they need.

- Bookmarked recipes are stored in local storage so no database was required for this application.

## Features
- Number of pages between the pagination buttons.

- Ability to sort search results by duration or number of ingredients.

- Ingredient validation in view, before submitting the form.

- Improving recipe ingredient input: separate in multiple fields and allow more than 6 ingredients.

- Shopping list feature: button on recipe to add ingredients to a list.

- Weekly meal planning feature: assign recipes to the next 7 days and show on a weekly calendar.

- Nutrition data on each ingredient from spoonacular API (https:// spoonacular.com/food-api) and calculate total calories of recipe.
