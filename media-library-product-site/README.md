# Strapi and Next.js Media Library Demo Site

This is an educational resource that is complementary to a YouTube video tutorial about the Strapi media library:

[**Media Library and Custom Image Sizes 🚀 Strapi Course #3**](https://www.youtube.com/watch?v=ihQ7vNnaYTM)

## Installation

`npm run bootstrap`

This will install the dependencies for product-site and strapi-cms

## Running

`npm run start`

This will concurrently run the Strapi CMS and Next.js application. 
You can then access the Strapi admin panel at:

`http://127.0.0.1:1337/admin`

and browse the Next.js site at:

`http://127.0.0.1:3000`

Note that if port 3000 is not available, Next will start at another port. Usually 3001, 3002, etc.. so check the logs after you start the application

## Strapi Admin Credentials

The default Strapi admin credentials are:

Email: `testuser@test.com`
Password: `Admin123`

The application is using an SQLite database that is included in the repository.
