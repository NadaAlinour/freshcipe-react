# Freshcipe - E-commerce Application

An e-commerce application that allows the user to browse through product categories, a product catalog with filtering, search for products and add products to a local or remote cart. The user can also browse through recipes, view a recipe's description, ingredients, steps and nutritional values, as well as select needed products directly from the ingredients' list to conveniently add to cart. Additionally, the user is able to create orders where they are then directed to a Stripe form for checkout, and to view past orders along with adding reviews or viewing a review if available.
 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites
What things you need to install the software and how to install them

For the frontend and backend:
- [Nodejs and npm](https://nodejs.org/en)

### Installing and running the application
To run the client:
- Navigate to the client directory
- Run "npm install" to install dependencies
- Run "npm run dev" to start the server

To run the server:
- Navigate to the strapi-server directory
- Run "npm install"
- Run "npm run develop" to start the server
> **_NOTE:_**  The database is currently deployed and the strapi server requires logging in to be able to manage the data in the database.


## Built With
* [Reactjs](https://react.dev/) - The frontend library used
* [Redux Toolkit](https://redux-toolkit.js.org/) - The state management library used
  

## Deployemnt
[The frontend application is deployed using Netlify](https://freshcipe.netlify.app/)
> **_NOTE:_**  The deployed backend is currently slow sometimes, so it might take a while for the website to load required data or services from the backend server. You can run this application locally to avoid this.

## Future Plans
For the frontend:
- Refactor some parts of the code for better readability and maintainability.
- Update styling to ensure responsiveness.
- Incorporate a loading skeleton

For the backend:
- Implement a backend server using Ruby on Rails.
- Create functions in the backend that implement getting the bestsellers as it is currently done in the frontend in a way that slows down speed.
- Integrate Stripe for secure checkout.
- Create a database using PostgreSQL.
- Deploy the backend.

Additional features:
- Implement a product recommendation system using Python and Machine Learning techniques.
- Allow user to choose between different products that map to the same ingredient in the recipe details page.
- Use a publicly available dataset with the appropriate license for the demo products and recipes.

## Preview
Home Page

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/9d8e407c-b7a2-46e6-b819-6c143f4781c0)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/148ad1bc-894a-4272-a39d-b329eee877e3)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/b894ea27-7cd4-4476-8a10-d5739c1936ab)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/efb09a46-b83c-431a-a9b7-448b5b70fcd6)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/1c4f3faa-c17f-4946-b136-c7dab4cb5dc5)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/0c36dc86-67cd-457c-aa77-b4cdea10007f)

---

Product Categories

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/512e46ae-dada-411f-b65a-fd33b1b5646f)

---

Product Catalog

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/a18a68be-febc-4e23-9cfa-625a457934ed)

---

Recipes

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/3198f140-7945-49d6-84f5-00b9d2429456)

---

Recipe Details

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/56886dc4-ca22-48d4-a7c2-ac0c7bc16a14)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/6c31f8cf-542d-4111-a455-0bf022832237)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/d5ab0a6f-dbde-496b-815b-80e38c75fc69)
![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/1fb421b0-e8f3-4d81-8394-a03cc3fa5642)

---

Cart

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/1b520122-f875-44b3-8dc5-e5ddb1175012)

---

Login Form

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/4eafe6ea-d943-49e3-9a95-a93410ee3480)

Signup Form

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/c1240897-546d-407e-a271-23cf19986394)

Contact Form

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/040ba881-b9e4-4882-a197-b52aa527d67b)

---

Orders and Reviews

![image](https://github.com/NadaAlinour/freshcipe-react/assets/48387157/44ab6c9c-5126-4fe4-8cc9-02da276499d1)


