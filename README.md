Drawceries App. Pet project for Drawbotics by Thomas Favey. Available at [sparring.app](https://sparring.app). Designed for mobile. Works best in Google Chrome device simulator.

## Application Navigation

In the app, there are three tabs:

### Grocery list (default tab)

View current shopping list.

 Features:
 - Hide or display list of bought or unbought items.
 - Filter groceries by category.
 - Add new category.
 - Select an item to display details and to take action (buy or remove item if item has not been bought yet or unbuy a bought item).
 - Add an item to the shopping list.

 Notes:
 - Bought items are hidden by default and can be displayed by clicking the "Bought items" label.
 - Before taking any action, the user is asked to log in.
 - Groceries are stored as an object with following keys: name, quantity, category, addedBy, isBought, boughtBy, boughtOn, price.
 - The user is prompted for confirmation before unbuying or removing an item.
 - It is impossible to add an item that has the same name as another because the item's name is used as a key. However, going forward, each item would have a unique id to be used as key.


 Ideas for future:
  - More filters such as date added/date bought/added by etc.
  - Ability to buy a fraction of the required quantity and update unbought and bought lists accordingly.
  - Improve popup animations, in particular on close.
  - Improve categories dropdown so as not to use basic "select" element.
  - Add ability to remove an unbought item from list directly (without having to unbuy then remove).
  - Add ability to modify item.

### Stats

View stats.

Notes:
- This tab is the least advanced of the project because it requires the most time as I am not yet familiar with D3 or any data visualisation libraries.
- However, I have added a chart that displays the cumulated money spent depending on the date. The function to extract the right data from the groceries database has been written and a basic chart displays it.
- I have decided not to spend too much time styling the chart (yet), but it is something that needs to be done.
- I have chosen the "react-charts" library because it seemed the simplest and I hadn't asked Leo about a recommendation yet. I would use another one if I were to keep working on the project.


Ideas for future:
- Spending per day/week/month as a bar chart.
- Spending/items bought per person as a bar chart.
- Spending/items per category as bar chart.
- Percentage of total price contributed by person as a pie chart.
- Ability to filter data according to date/user(s)/category


### Recipes

View recipes inspired by ingredients in the grocery list.

Features:
- View 10 recipes inspired by the ingredients in the grocery list.
- Filter recipes by grocery categories.
- Click on recipe to highlight it, then click "View Recipe" button to go to full recipe.


Notes:
- Daily spoonacular API limit is reached very fast.
- Images could be of better quality.


Ideas for future:
- Request more recipes when at bottom of page (would require a paid spoonacular account I reckon).
- Ability to filter by bought/unbought ingredients.
- If possible, open recipe url in Webview inside app instead of redirecting.
- Error handling can be improved.


### Notes on login

Login is very primitive at this stage.

The user enters his/her name and that's it. The user name is then stored in the application state. Users can log out or switch user by clicking the login icon in the top right corner. A more advanced login logic linked to a database would be required before deploying the app to production.


### Notes on database

There is no external database at this stage.

- Two databases (groceries and categories) are simulated as app state. This state is passed on to those children components that would require data from an external database.
- API calls to the database are simulated by a simple useEffect hook that sets the component state. With an external database, this hook would make actual API calls to query the database.
- Database actions take place in the top-level App component and are passed down to children as props, which greatly increases the number of props being passed down to children components. With an external database, those props would no longer need to be passes down. With an external database, the following props would no longer be passed: groceryCategoriesDb, groceriesDb, buyGrocery, unbuyGrocery, removeGrocery, addCategory.


### Further notes/questions

- After a better login logic has been implemented, a "Profile" tab with relevant user data would be a good addition.
- I have read that it is better to use a single CSS file for the entire app. Is that true? And why?
- I would like to know whether the directory structure is a good one and what would need to be improved.
- I am pretty proud of the way the app feels (in particular in the more advanced List and Recipes tabs).
- Favicon and meta tags etc. need to be added to make it a good PWA.

### Current problems
- e.preventDefault() does not seem to be working in mobile Safari. So impossible to log in and take actions.
