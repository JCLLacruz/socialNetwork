# Social Network Web App

This is a social network web application built with React, Redux, React Router, and Bootstrap. The application allows users to register, log in, create posts, view profiles, search for users, and more.

## Features

- User Authentication (Register, Login)
- View and Edit Profile
- Create and View Posts
- Search for Users
- Comment on Posts
- Private Routes to Protect Certain Views
- Responsive Design with Bootstrap

## Project Structure

The project is organized into several views and components:

- `App.jsx`: Main component that sets up the routes and conditional rendering based on user authentication.
- `views/`: Contains the main views of the application (Register, Login, Home, Profile, etc.).
- `components/`: Reusable components used across the application.
- `features/`: Contains the Redux slices for authentication and posts.
- `guards/`: Contains route guards for private routes.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/JCLLacruz/socialNetwork.git
    ```

2. Navigate to the project directory:
    ```bash
    cd social-network
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode:

```bash
npm run dev
