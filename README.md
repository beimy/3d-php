# 3d Model Maker

## Introduction
The goal of this application is for me to practice using both Three.js; a 3d web library, and an AMP stack (APACHE, MySQL, PHP) backend.
The finished product will let users build their own simple 3d models in the web browser, and be able to save and load their creations.

## Main Challenges

1. ✔️ Setting up the AMP backend
    * I ended up using XAMPP and the MySQL workbench to get the backend set up. It probably would have been better to just use the command line for all this but it works in the end and now I have a nice gui to help speed things up.
    * Current State: I have a simple database set up and the site can send basic text data to it. Nothing special yet, but this is a large step in the right direction. The hardest part was just getting XAMPP working correctly while not following a tutorial to the T.
    * Next Steps: Expand the database to hold the data for user generated 3d objects.
2. 🔲 Implement Three.js
    * The main feature of the site and currently what I'm working on. First step is to get a model showing in the browser window. From there I can see about exposing some of the model generation fuctions as UI elements so users can mess with models in real time. Then comes saving and loading from the database.
    * Current State: Nonexistant, activley working on it.
    * Next Steps: Implement Three.js to the canvas.
3. 🔲 Implement Saving and Loading
    *The final step is going to be putting the previous two features together, allowing for users to save their work and potentially download the data for using their 3d models. 

