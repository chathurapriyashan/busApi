const { getAllTicketsData } = require("../Controllers/DBController")

exports.getAllTicketsHandler = async function(req, res) {
    const ticketsData = (await getAllTicketsData());

  return res.status(200).json({
    status:"success",
    data: ticketsData,
  })
}
