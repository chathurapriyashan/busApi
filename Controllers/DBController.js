const fs = require('fs');
const { json } = require('stream/consumers');
const { v4 } = require('uuid');
const tickets = [];
const users = [];
const ticketPath = __dirname  + "/../database/tickets.json";
const userPath = __dirname  + "/../database/users.json";


exports.initDB = async function(){
    try{
        const tikcetsData = fs.readFileSync(ticketPath , 'utf-8');
        const usersData = fs.readFileSync(userPath , 'utf-8');
        JSON.parse(tikcetsData).map(ticket=>tickets.push(ticket));
        JSON.parse(usersData).map(user=>users.push(user));
    }catch(error){
        console.log(error);
    }
    
}



exports.saveTicket = async function(data){
        try{
            data.id = v4() ;
            tickets.push(data);
            fs.writeFileSync(ticketPath, JSON.stringify(tickets));
            console.log(data);
            return data;
        }catch(error){
            console.log(error);
        }
}

exports.saveUser = async function(data){
        try{
            data.id = v4() ;
            users.push(data);
            fs.writeFileSync(userPath, JSON.stringify(users));
            return data;
        }catch(error){
            console.log(error);
        }
}


exports.getAllTicketsData = async function () {
    try{
        return tickets;
    }catch(error){
        console.log(error);
    }
}
exports.getAllUsersData = async function () {
    try{
        return users;
    }catch(error){
        console.log(error);
    }
}