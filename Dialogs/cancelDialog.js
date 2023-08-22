const {WaterfallDialog,Dialog}=require('botbuilder-dialogs');
const {CardFactory}= require('botbuilder');
const{cancelDialog,suggitiondialog}=require('../Utilities/DialogId');
const{UserProfile}=require('../Utilities/userProfile');
const{cancel} = require('../Cards/cancelCard')
const{SuggitionDialog}=require('./suggitionDialog');
const {interaction}=require('../Utilities/interaction');
const {cancelTicket}= require('../Utilities/apicalls')

const cancelDialogWtf = 'cancelDialogWtf';

class CancelDialog extends interaction{
    constructor(conversationState,userState){
        super(cancelDialog);
        if (!conversationState) throw new Error("conversation state required");
        if (!userState) throw new Error("conversation state required");
        this.conversationState = conversationState;

        this.userProfile = userState.createProperty('UserProfile');
        this.addDialog(new WaterfallDialog(cancelDialogWtf, [
            this.cancel.bind(this),
            this.userAction.bind(this)
    ]));

    this.addDialog(new SuggitionDialog( conversationState,suggitiondialog));
    this.initialDialogId = cancelDialogWtf;

    }
    /**
     * send Cancel Adaptive Card
     * @param {*} step 
     * @returns 
     */
    async cancel(step){
        try{
            const userProfile = await this.userProfile.get(step.context, new UserProfile());
            console.log(userProfile)
            //check user Previous Card
            if(userProfile.ticketId===undefined){
                await step.context.sendActivity("You Don't Have any Tickets To Cancel")
                return await step.beginDialog(suggitiondialog);
            }else{
            const card1 = cancel(userProfile.ticketId,userProfile.title, userProfile.description, userProfile.department,userProfile.date, userProfile.issue, userProfile.urgency, userProfile.status);
                await step.context.sendActivity({
                    attachments: [CardFactory.adaptiveCard(card1)]
                });
            }
            return Dialog.EndOfTurn
        }catch(error){
            console.log(error);
            throw error
        }
    }
    /**
     * user selected value to perform 
     * @param {*} step 
     * @returns 
     */
    async userAction(step){
        try{
            const user = step.context.activity.value.text
            console.log(user)
            if(user.toLowerCase()==="save"){
                await step.context.sendActivity("Your Ticket Saved")
                return await step.beginDialog(suggitiondialog);
            }else if(user.toLowerCase()==="cancelticket"){
                await step.context.sendActivity("Your Ticket canceled")
                const userProfile = await this.userProfile.get(step.context, new UserProfile());
                const responseData = await cancelTicket(userProfile.ticketId);
                console.log(responseData)
                userProfile.ticketId = undefined;
                userProfile.title = undefined;
                userProfile.description = undefined;
                userProfile.department = undefined;
                userProfile.date = undefined;
                userProfile.issue = undefined;
                userProfile.urgency = undefined;
                userProfile.status = undefined;
                return await step.beginDialog(suggitiondialog);
            }else{
                await step.context.sendActivity("Sorry Bot In Training")
                return await step.beginDialog(suggitiondialog);
            }
        }catch(error){
            console.log(error)
            throw error
        }
    }




}
module.exports.CancelDialog = CancelDialog;