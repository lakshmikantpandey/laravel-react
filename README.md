# Project Setup and Installation Guide

This README outlines the steps to set up a Laravel backend and React frontend application. The Laravel backend handles authentication, user management, and API communication, while the React frontend provides the UI for the admin panel.

## Step 1: Backend (Laravel)

### 1.1. Create a New Laravel Project

Run the following command to create a new Laravel project using Composer:

composer create-project --prefer-dist laravel/laravel:^9.0 backend-laravel

1.2. Create AuthController

Generate a new controller for authentication using the following Artisan command:

php artisan make:controller AuthController

In AuthController, add methods for:

login()

dashboard()

logout()

1.3. Create a New Database

Create a new MySQL database named comfortclick (you can do this via phpMyAdmin or using the MySQL command line).

1.4. Configure CORS Policy

Allow CORS for frontend requests. Update config/cors.php as needed to allow requests from the frontend domain.

1.5. Create a Seeder for Admin User

Run the following command to generate a seeder:

php artisan make:seeder AdminUserSeeder

In AdminUserSeeder, add the following code to create the default admin user:

use Illuminate\Support\Facades\Hash;

use App\Models\User;

public function run()
{
    User::create([
        'name' => 'admin user',
        'email' => 'admin@example.com',
        'password' => Hash::make('admin123'),
    ]);
}
1.6. Run Migrations
Run the migrations to create all necessary tables in the database:

php artisan migrate

1.7. Seed the Database
Seed the database to create the admin user:

php artisan db:seed --class=AdminUserSeeder

1.8. Generate .env File

Generate a .env file by copying the example configuration:

copy .env.example .env

1.9. Update .env Settings

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=comfortclick

DB_USERNAME=root

DB_PASSWORD=

Step 2: Frontend (React)

2.1. Created a New React Project

Run the following command to create a new React project using Vite and TypeScript:

npm create vite@latest frontend-react --template react-ts

2.2. Installed Dependencies

cd frontend-react

yarn

Then, add the following dependencies:

yarn add react-router-dom@6 axios

2.3. Create API Utility

Create an api.js file in the src/service directory to manage API requests using Axios.

2.4. Used Core UI Template for Admin Panel

Integrated the React Core UI Template for the admin panel in my frontend application.

2.5. Created Login Page Logic

Implemented the login page with the necessary form and logic to handle authentication.

Used axios to make API requests to the backend.

Used localStorage for user authentication.
