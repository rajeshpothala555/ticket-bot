const axios = require('axios');
//hit api use axios 
async function postTicket(step) {
  const apiUrl = 'http://localhost:3000/ticket';
  const postData = {
    Title: step.context.activity.value.title,
    Description: step.context.activity.value.description,
    Department: step.context.activity.value.department,
    Date: step.context.activity.value.date,
    Issue: step.context.activity.value.Issue,
    Urgency: step.context.activity.value.urgency
  };
  // hit post method and send data req body
  const response = await axios.post(apiUrl, postData);
  const responseData = response.data;

  return responseData;
}

async function cancelTicket(ticket_id){
    const apiUrl = `http://localhost:3000/cancelticket/${ticket_id}`;
    const response = await axios.delete(apiUrl);
    const responseData = response.message;
    return responseData;

}

module.exports = {
  postTicket,
  cancelTicket
};
