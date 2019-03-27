# HoneyJAR Slideshow Service
The Slideshow service for HoneyJAR—a housing rental service app.

![Demo](./screenshots/demo.gif)

The HoneyJAR Slideshow service displays images for a particular listing. Users are able to enlarge a specific image and cycle through the list of images.

There are currently 10M rooms available for viewing. To display a room listing's slideshow, follow the installation/usage instructions below.

**Front-end**: React, Sass, Bootstrap, jQuery

**Back-end**: Node, Express, MySQL

## Installation/Usage
1. Fork/clone the repo
2. Run `npm install` to install dependencies
3. Run `npm run generate` to generate database records
4. Ensure MySQL is installed and the `mysqld` process is running
5. Run `npm run db:setup` to create the database tables and seed the generated records
6. Run `npm run webpack:build`
7. Run `npm run sass:build`
8. Run `npm start` to start the server
9. Navigate a browser to `http://localhost:3001/rooms/:listingId/` to view a room's slideshow

## CRUD API Endpoints

`GET` /rooms/:listingId - Display a room listing's slideshow.

`GET` /rooms/:listingId/images - Get a list of a room listing's photos.

`POST` /rooms/:listingId/images - Add a new photo to a room listing.

`PUT` /rooms/:listingId - Update a room listing's photo.

`DELETE` /rooms/:listingId - Delete a room listing's photo.
