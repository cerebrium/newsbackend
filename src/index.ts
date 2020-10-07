// imports
import express from "express";
import dotenv from "dotenv"
import cors from "cors"

// instantiate the app
const app = express();
const port = process.env.PORT || 3001; // default port to listen

// middleware
app.use(cors())

// controllers
import * as newsRoute from './routes/news'

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// define the routes
app.use('/news', newsRoute.index)

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log('running on port: ', port)
} );