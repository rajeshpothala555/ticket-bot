const {WaterfallDialog}=require('botbuilder-dialogs');
const {CardFactory}= require('botbuilder');
const{statusDialog,suggitiondialog}=require('../Utilities/DialogId');
const{UserProfile}=require('../Utilities/userProfile');
const{card} = require('../Cards/ticketsuccesscard');
const{SuggitionDialog}=require('./suggitionDialog');
const {interaction}=require('../Utilities/interaction');



const statusDialogwtr = 'statusDialogwtr';
class StatusDialog extends interaction{
    constructor(conversationState,userState){
        super(statusDialog);

        if (!conversationState) throw new Error("conversation state required");
        if (!userState) throw new Error("conversation state required");
        this.conversationState = conversationState;
        this.userProfile = userState.createProperty('UserProfile');
        this.addDialog(new WaterfallDialog(statusDialogwtr, [
            this.status.bind(this),
    ]));
    this.addDialog(new SuggitionDialog( conversationState,suggitiondialog));
    this.initialDialogId = statusDialogwtr;

    }
    /**
     * Check previous Ticket details
     * @param {*} step 
     * @returns 
     */
    async status(step){
        try{
            const userProfile = await this.userProfile.get(step.context, new UserProfile());
            console.log(userProfile)
            if(userProfile.ticketId===undefined){
                await step.context.sendActivity("You Don't Have any Tickets")
                return await step.beginDialog(suggitiondialog);
            }else{
            const card1 = card(userProfile.ticketId,userProfile.title, userProfile.description, userProfile.department,userProfile.date, userProfile.issue, userProfile.urgency, userProfile.status);
                await step.context.sendActivity({
                    attachments: [CardFactory.adaptiveCard(card1)]
                });
                return await step.beginDialog(suggitiondialog);
            }
        }catch(error){
            console.log(error);
            throw error;
        }
    }


}
module.exports.StatusDialog = StatusDialog;