import express from "express";
const app = express();
const port = 10000;

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.info( `server started at http://localhost:${ port }` );
} );