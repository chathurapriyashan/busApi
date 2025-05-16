const express = require('express');
const { verifyToken } = require('../middleware/auth');
const { generateTickets } = require('../api/createTicket');
const { getAllTicketsHandler } = require('../api/getTicket');
const router = express.Router();



router.route('/tickets')
    .get( getAllTicketsHandler );

router.route("/tickets/new")
    .post( generateTickets);

// router.route("/tickets/:id")
//     .get(auth , ticketController.getTicketFromID)
//     .patch(auth , ticketController.updateTicketFromID)
//     .delete(auth , ticketController.deleteTicketFromID);






module.exports = router;
