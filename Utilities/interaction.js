const {ComponentDialog}=require('botbuilder-dialogs');
const {suggitiondialog,ticketDialog,cancelDialog}=require('./DialogId')
class interaction extends ComponentDialog{
  /**
   * check user interact in step's
   * @param {*} stepContext 
   * @returns 
   */
    async onContinueDialog(stepContext) {
      try{   
        console.log("im in onContinue ")
        const result = await this.interrupt(stepContext);
        if (result) {
          return result;
        }
        return await super.onContinueDialog(stepContext);
      }catch(error){
        console.log(error)
        throw error
      }
    }

    async interrupt(stepContext) {
      try{
            console.log("i am in interrupt")
            console.log(stepContext.context.activity.text)
            let userReply = stepContext.context.activity.text;
            if (userReply !== undefined) {
              userReply = userReply.toLowerCase()
            } else {
              userReply = stepContext.context.activity.value;
            }
              
              switch (userReply) {
                case "hi":
                case "hii":
                case "hai":
                case "hello":
                case "restart":
                case "restart again":
                case "start":
                case "start again":
                case "hi there":
                case "hey":
                await stepContext.context.sendActivity("Welcome to Dona bot")
                await stepContext.cancelAllDialogs();
                return await stepContext.beginDialog(suggitiondialog);

                case "thanks":
                case "thankyou":
                case "thank you":
                case "thanks a lot":
                case "thanks bot":
                     await stepContext.context.sendActivity("You're welcome! It was my pleasure to assist you. Have a great day!");
                     await stepContext.cancelAllDialogs();
                    return await stepContext.beginDialog(suggitiondialog);
                case "cancel":
                case "i don't want":
                case "i don't need":
                case "quit":
                    await stepContext.cancelAllDialogs();
                    return await stepContext.beginDialog(cancelDialog);
                case "ticket":
                case "issue":
                case "help":
                case "problem":
                    await stepContext.cancelAllDialogs();
                    return await stepContext.beginDialog(ticketDialog);      
        }
      }catch(error){
        console.log(error)
        throw error
      }

    }
  

}
module.exports.interaction = interaction;