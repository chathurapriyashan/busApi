const { v4 : uuidv4 } = require('uuid');
const { saveTicket } = require('../Controllers/DBController');

exports.generateTickets =async function(req ,res){
    console.log("from gererate tickets");

    try{
        const { 
            price,
            startLocation, 
            endLocation,
            paymentMethod,
        } = req.body;

        const data = await saveTicket({
            price , 
            startLocation , 
            endLocation ,
            paymentMethod ,
            token :uuidv4(),
        });

        return res.status(201).json({
            status:"success",
            data:{
                tickets:[
                    {
                        id:data.id,
                        token: data.token,
                        price : data.price,
                        startLocation : data.startLocation,
                        endLocation : data.endLocation,
                    }
                ]
            },
                paymentMethod : data.paymentMethod,
                isPaid:true,
        })


    }catch(error){
        console.log(error);
    }

}