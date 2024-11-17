# Social Media App Backend (Node.js + Express + MongoDB)

This is the backend for the social media app, built using Node.js, Express, and MongoDB. It follows the MVC (Model-View-Controller) architecture, where the "View" is handled by the (frontend)[https://views-opal.vercel.app/]. The backend provides CRUD operations for managing tweets, comments, and user profiles.

## Live Server at 

## Features

- **CRUD Operations for Tweets**: Users can create, edit, delete, and fetch tweets.
- **Profile Management**: Users can view and update their profile details.

## Tech Stack

- **Backend**:
  - Node.js
  - Express
  - MongoDB (with Mongoose)
  - 
- **Architecture**:
  - Model-View-Controller (MVC)
    - **Model**: Mongoose models for handling data
    - **Controller**: Logic for processing requests
    - **[View/Frontend](https://views-opal.vercel.app/)**: Managed by the frontend (React) 


### API Endpoints

Below are the key API endpoints for the backend:
The base URL: https://backend-iota-ashy.vercel.app

#### Tweets

- **GET** `/api/tweets` - Get all tweets
- **POST** `/api/tweets` - Create a new tweet
- **PATCH** `/api/tweets/:id` - Edit an existing tweet
- **DELETE** `/api/tweets/:id` - Delete a tweet

#### User Profiles

- **GET** `/api/users/:id` - Get a user's profile details
- **PATCH** `/api/users/:id` - Update a user's profile


## Limitations and Improvements.

Implement user authentication with :
  - JWT (for authentication)
  - bcrypt (for password hashing)



