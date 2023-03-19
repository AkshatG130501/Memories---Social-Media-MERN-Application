# Memories---Social-Media-MERN-Application
A fullstack social media application with capabilities to create, edit , search using tags and titles , pagination and liking and disliking posts with user authentication.

// Sharing my overall learnings from the project
// Memories

=> Create two folders -> 1.client 2.server

=> split terminal into two one for client and one for server

=> In client terminal 
   1. cd client 
   2. to create a react app -> npx create-react-app ./
   
=> while installation in client 
   create index.js file in server 
   in server terminal =>  cd server
                         [ npm init -y ]  (to initialize an empty package.Json
(installing dependencies)  npm install body-parser cors express mongoose nodemon

body parser ->  enables us to send post requests 
cors   -> enables cross origin requests
express -> as a framework for routing of our application
mongoose -> to create models for our posts 
nodemon -> automatically updates server for the changes

=> In index.js import dependencies  =>  import express from 'express';
                                        import bodyParser from 'body-parser'; 
						    import mongoose from 'mongoose';
						    import cors from 'cors';

to enable these go in package.json 
under main : "index.js",
"type" : "module",


in client terminal download dependencies =>  npm install axios moment react-file-base64 redux redux-thunk

delete src folder from client and again make a src folder and add index.js file

=> open mongo atlas and create a new cluster then connect => your application => copy url 
create a new variable -> const CONNECTION_URL = 'mongodb+srv://GuptaAkshat:<password>@cluster0.2roqzo0.mongodb.net/?retryWrites=true&w=majority';

next create a port => const PORT = process.env.PORT || 5000 ; (when connected to Heroku it automatically sets the port till then 5000).

****   server successfully connected to Database  ****
 

******************************************************    Routing   ********************************************************************

Create a folder named "routes" inside Server => create a file named "posts.js" inside routes.

create a varible -> const router = express.Router();

// when get request is made to the home page respond this works //
router.get('/',(req,res)=>{
    res.send('This Works!');
});
 
now we need to export router ->  export default router

then in index.js ->  import postRoutes from './routes/posts.js';

connecting server to our app => app.use('/posts',postRoutes);

go to ->  http://localhost:5000/posts  -> if it shows this works (working) => Express Application connected to the local host server



*************************************************   Backend Folder Structure  ************************************************************

Create a folder in server named "controllers"  => inside it a file named "posts.js";
=> logics inside controller/posts but routes in routes/posts.

create a new folder models in server => inside it postMessage.js file

here we create schema for a message post => 

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type:Number,
        default:0
    },
    createdAt : {
        type: Date,
        default: new Date()
    },
    
});


Turning Schema into a model 


const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
Now we can later on this model we can run commands find , create , delete and update .



**************************************************    Controllers    *********************************************************************

using actual logic => use try and catch and since find() takes time we will make the function async.

export const getPosts = async(req,res)=>{
    try{
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json({message : error.message});
    }
};

Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

The HTTP 200 OK success status response code indicates that the request has succeeded.
The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource.

for HTTP status codes :->  https://www.restapitutorial.com/httpstatuscodes.html



*********************************************  JSX Structure  **************************************************************************

// (for frontend)  -> Client Side
 

installing material ui for react (imporatant tool)

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
Grid -> The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
Container -> The container centers your content horizontally. It's the most basic layout element.
AppBar -> The App Bar displays information and actions relating to the current screen.(Navbar).
Typography ->  to present your design and content as clearly and efficiently as possible.
Grow -> Popover (display content on hover or on clickng)  & Transition (fade, slide, zoom , collapse).

inherit -> this keyword specifies that a property should inherit its value from its parent element.can be used for any CSS property, and on any HTML element.


=> useStyles -> useStyles is simply the naming convention of the hook created and returned by makeStyles.(This comes under Hook API)useStyles() is a function provided by Material-UI's makeStyles hook, which is used to create a custom set of styles for a component.
The const classes = useStyles() line assigns the generated styles to a constant variable called classes. This variable can then be used in the component's JSX to apply the styles to various elements.


*****************************************************   API   ********************************************************************

// axios -> to make api calls 
   const url = "http://localhost:5000/posts";  // returns all current posts into database



************************************************************ REDUX ***********************************************************************

// Redux -> for all our actions to backend 
   1. Predictable -> write applications that behave consistently, run in different environments
   2. Centralized -> enables powerful capabilities like undo/redo, state persistence
   3. Debuggable -> The Redux DevTools make it easy to trace when, where, why, and how your application's state changed architecture lets you log changes, use "time-travel debugging"
   4. Flexible -> works with any UI layer


=> In Redux, a Reducer is a pure function that takes an Action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.

=> Store -> A store is a state container which holds the application's state.

=> import { Provider } from 'react-redux';  ->  Provider -> The <Provider> component makes the Redux store available to any nested components that need to access the Redux store

=> applyMiddleware -> to combine multiple middleware into a store enhancer
   compose->  to combine multiple store enhancers into a single store enhancer

Thunk -> The word "thunk" is a programming term that means "a piece of code that does some delayed work".
         for Redux "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
commonly used for data fetching.

=> Action Creators -> Functions that return an action 
   action -> it is an object that contains type and payload(data where we store all our posts).
=> onChange={(e)=> setPostData({...postData,creator: e.target.value}) -> to set the state using an object.

=> preventDefault() -> default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "Submit" button, prevent it from submitting a form
 
