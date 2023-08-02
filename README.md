## Description
This is a NestJS-based authentication and authorization project that provides a secure and robust system for user registration, login, access token generation, token refresh, and logout functionalities. The project is designed to handle user authentication efficiently using JSON Web Tokens (JWT) and bcrypt for password hashing.

## Features

## 1.User Registration:
Users can create a new account by providing essential details like username, last name, password, confirm password, email, and age. The API enforces validation, ensuring all required fields are provided; otherwise, it will return an error.
## Endpoint
POST /auth/register

## 2.User Login:
Registered users can log in by submitting their email and password. Upon successful login, the system generates both an access token and a refresh token.he access token contains user information (excluding the password) and can be decoded to retrieve the user's profile.
## Endpoint
POST /auth/login

## 3.Access Token Generation:
After successful login, the API generates an access token that contains user information, excluding the password. This token can be used to authenticate and authorize the user for protected endpoints.

## 4.Profile Endpoint:
Users can decode their access token and access their profile information through the profile endpoint. However, the access token has a short lifespan of only 2 seconds.
## Endpoint.
Get /auth/profile

## 5.Token Refresh:
When the access token expires, users can use the refresh token to obtain a new access token without having to log in again. The refresh endpoint accepts a valid refresh token and generates a fresh access token.
## Endpoint.
Post /auth/refresh

## 6.Logout:
Users can securely log out by hitting the logout endpoint with their access token. The API will revoke the access token, ensuring the user is logged out.
## Endpoint.
Post /auth/logout


## Usage
# Clone the Repository:
 Begin by cloning the project repository and navigating into the project directory.
# Install Dependencies:
 Run npm install to install all the required dependencies.
# Set Environment Variables:
 Create a .env file in the root of the project and provide the necessary environment variables, such as database URL, access token secret, and refresh token secret.
# Run the Application:
 Start the server using npm run start.
# API Endpoints:
 Use the provided API endpoints to perform various actions:
# POST /auth/register:
 User registration endpoint for creating a new account.
# POST /auth/login:
 User login endpoint for authentication and token generation.
# GET /auth/profile:
 Profile endpoint to decode and access the user's profile information.
# POST /auth/refresh:
 Refresh endpoint for obtaining a new access token using a refresh token.
# POST /auth/logout:
 Logout endpoint to securely log out the user and revoke the access token.




## Dependencies
# NestJS:
A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
# TypeORM: 
An Object-Relational Mapping (ORM) library for TypeScript that helps manage database interactions.
# JSON Web Token (JWT):
 For generating access tokens and refresh tokens for user authentication.
# bcrypt: 
To securely hash user passwords for storage in the database.



## Contribution
Contributions to this project are welcome! If you have any significant changes or new features to add, please open an issue to discuss them before submitting a pull request


## License
This project is open-source and licensed under the MIT License, allowing you to use, modify, and distribute the code freely.

## Disclaimer
This project is intended for educational and illustrative purposes only. It is essential to apply best security practices and responsibly handle user data when implementing authentication and authorization systems in real-world applications.

## Contact
For any queries  related to the project, please feel free to contact the project maintainer at mnhetz999@gmail.com.


















[