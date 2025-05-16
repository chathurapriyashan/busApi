const express = require('express');
const app = express();
const ticketRouter = require('./routes/ticketsRouter');
const usersRouter = require('./routes/userRouter');
const { initDB } = require('./Controllers/DBController');

initDB();

app.use(express.json());

const server = app.listen( 3000, "0.0.0.0", (error)=>{
    if(error){
        console.log(error);
        return;
    }

    console.log("server started on port 3000");
})


app.use("/api" , ticketRouter);
app.use("/api" , usersRouter);

exports.module = app;