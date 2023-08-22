const db = require('../db/config');
const Ticket = db.Ticket;

module.exports = {
    ticket: async (req, res) => {
        try{
        //take ticket details from req body
        const { Title, Description, Department, Date, Issue, Urgency } = req.body;
        console.log(Title, Description, Department, Date, Issue, Urgency);
        const newTicket = new Ticket({
            Title,
            Description,
            Department,
            Date,
            Issue,
            Urgency,
            Status: "Pending"
        });
        // save ticket in Db
        await newTicket.save();

        const ticketId22 = newTicket.ticket_id;
        console.log(ticketId22);
        //find ticket by id
        const foundTicket = await Ticket.findByPk(ticketId22);

        console.log(foundTicket);
       return  res.status(200).json({
            status: 'success',
            message: 'Ticket created successfully',
            data: foundTicket
        });
    }catch(error){
        console.log(error)
        throw error
        
    }
    },
    fetchticket:async(req,res)=>{
        try{
         // take ticket_id from req parms 
           const ticket_id = req.params.id
           console.log(ticket_id)
           // find ticket by id
           const findticket = await Ticket.findOne({
            where: {
              ticket_id
            },
          });
          console.log(findticket)
          return  res.status(200).json({
            data: findticket
        });
        }catch(error){
            console.log(error)
            throw error
            
        }
    },
    cancel: async(req,res)=>{
        try{
            const ticket_id = req.params.id
            const ticketToDelete = await Ticket.findOne({
                where: {
                    ticket_id
                },
            });
            
            await ticketToDelete.destroy();
            return res.status(200).json({
                status: 'success',
                message: 'Ticket deleted successfully',
            });

        }catch(error){
            console.log(error)
            throw error
        }
    }
};
