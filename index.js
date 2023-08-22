const express = require('express');
const path = require('path');
const Dona = require('./BotActivityHandler');
const MainDialog = require('./Dialogs/mainDialog')
const {BotFrameworkAdapter,ConversationState,MemoryStorage,UserState}=require('botbuilder');
const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });
const db = require('./db/config');
const createticket = require('./router/datainserrouter');
const userrouter = require('./router/userrouter');


const app = express();
const port = 3000;

app.use(express.json())
app.use("/",createticket);
app.use("/",userrouter);

const adapter = new BotFrameworkAdapter({
  appID:"",
  appPassword:""
})


adapter.onTurnError = async (context, error) => {
    console.error(`\n[onTurnError] unhandled error: ${error}`);
  
    await context.sendTraceActivity(
      'Bot Facing Error'
    );
  };

const memory = new MemoryStorage();
const conversationState = new ConversationState(memory);
const userState = new UserState(memory);


const rootDialog = new MainDialog(userState, conversationState);
const mainBot = new Dona(conversationState, rootDialog,userState);

app.listen(port,()=>{
    console.log(` app listen ${port} `)
})



app.post('/bot/dona', async (req, res) => {
    await adapter.processActivity(req, res, async (context) => {
        await mainBot.run(context);
    });
  });

// app.get('/api/notify', async (req, res) => {
//     for (const conversationReference of Object.values(conversationReferences)) {
//         await adapter.continueConversationAsync(process.env.MicrosoftAppId, conversationReference, async context => {
//             await context.sendActivity('proactive hello');
//         });
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.writeHead(200);
//     res.write('<html><body><h1>Proactive messages have been sent.</h1></body></html>');
//     res.end();
// });