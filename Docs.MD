# Yanchware Challenge Analysis

## Introduction
The goal of this application is to allow Digital Nomads to find suitable cities for their next destination. The application is built using Vite and React, and it is a simple web application that allows users to search for a new city and filter the results depending on different city details.

## Structure

The application is structured in the following way:
- The first page is the home page where users can decide wether to search indipendently or use a step by step search form.
- If the user decides to search indipendently, they will be redirected to the search page where they can search for a city by typing the city name in the search bar and filter the results.
- If the user decides to use the step by step search form, they will be redirected to the steps form that asks the user a question at a time to filter out and once every question has an answer it redirects the user to the search page with the cities already filtered depending on the answers.
- If the user wants to see more details of a specific city they can click on the city card and they will be redirected to the city details page and eventually save the city in the favourite list.
- The profile page shows details about the user and the favourite cities.

## API
Currently there's no API so all the data is hardcoded in the application. The data is stored in the `mocks` folder and is divided into different files depending on the type of data. The data is fetched using mocks of API calls, then used to render the different components of the application and to filter the cities depending on the user's search. The data is stored in a JSON format and is then imported into the application using the ES6 import syntax.

## State Management

The application uses different strategies to manage the state of the application. The state is managed in the following ways:
- Zustand is used to manage the global state of the application, this is used to manage state that is shared across different components to facilitate the development cicle, Zustand was chosen 
because it is a simple and easy to use state management library that allows for the creation of global state that can be shared across different components and that can be easily updated and accessed wit an easier syntax than Redux.
- React Query is used to manage the state of the API calls, this is used to manage the state of the API calls and cache the data to avoid making the same call multiple times (For example city details), another benefit of React Query is the parameters that get exposed from the hooks that allow for a more flexible way to manage the state of the API calls. (Loadin, error...)
- React Router is used to manage the state of the routes, this is used to manage the state of the routes and redirect the user to the correct page, URL search parameters are used for filtering of cities thanks to the useSearchParams hook (this allows a flexible way to filter and allows the user to share or save a link with their desidered search already set).

## Styling and Design

The application uses Material UI as a design system, this allows the application to have a consistent design and to be responsive. The application mainly uses the default Material UI theme and components to style the application with some custom colors. The application also uses React Icons Library to add icons to the application.
The choice of Material UI was made to speed up the development process and to have a consistent design across the application that follows the Material design guidelines.

## Components and Pages

The application is divided into different components and pages to facilitate the development process and to make the application more maintainable. The components are divided into different folders depending on their functionality and are reused across the application. The pages are divided into different folders depending on their functionality and are used to render the different pages of the application. The rationale behind the creation of components and pages is to make the application more modular and to facilitate the development process, this roughly follows the atomic design principles.
Since the application uses Material Ui as a design system, the basic atoms components are mainly composed of Material Ui components and are used to compose the different molecules that then compose pages of the application.

## Testing
The application uses Vitest and React Testing Library. The tests are divided in different folders.

## Deployment
The application is deployed on Vercel and the deployment is done automatically when a new commit is pushed to the main branch.
Vercel is used to deploy the application because it is easy to use and it allows for automatic deployments when a new commit is pushed to the main branch.

## TODO
- Develop an API that connects to a Database to get the cities data and details with the possibility to filter the cities by different parameters (For example weather, cost of living, etc.)
- Add Authentication to the application to allow users to save their favourite cities and to have a more personalized experience.
- Develop a better search algorithm that allows the user to search for cities by different parameters.
- Add more features to the application like the possibility to add reviews to the cities, the possibility to add a city to the visited list.
- Add more tests
- Develop a better design