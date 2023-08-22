const {  WaterfallDialog, Dialog } = require('botbuilder-dialogs');
const { CardFactory } = require('botbuilder');
const { ticketDialog, suggitiondialog } = require('../Utilities/DialogId');
const { ticket } = require('../Cards/ticketCard');
const { SuggitionDialog } = require('./suggitionDialog');
const { card } = require('../Cards/ticketsuccesscard');
const { UserProfile } = require('../Utilities/userProfile');
const {interaction}=require('../Utilities/interaction');
const {postTicket} = require('../Utilities/apicalls')

const ticketDialogWtf = "ticketDialogWtf";

class TicketDialog extends interaction {
    constructor(conversationState, userState) {
        super(ticketDialog);

        if (!conversationState) throw new Error("conversation state required");
        if (!userState) throw new Error("userState required");

        this.userState = userState;
        this.conversationState = conversationState;

        this.userProfile = userState.createProperty('UserProfile');

        this.addDialog(new WaterfallDialog(ticketDialogWtf, [
            this.sendCard.bind(this), 
            this.userAction.bind(this) 
        ]));

        this.addDialog(new SuggitionDialog(conversationState));
        this.initialDialogId = ticketDialogWtf;
    }

    /**
     * Send Ticket Adaptive Card
     * @param {*} step 
     * @returns 
     */
    async sendCard(step) {
        try {
            const userProfile = await this.userProfile.get(step.context, new UserProfile());

            if (userProfile.ticketId === undefined || userProfile.status === "closed") {
                const card = ticket();
                await step.context.sendActivity({
                    attachments: [CardFactory.adaptiveCard(card)]
                });
                return Dialog.EndOfTurn;
            } else {
                step.context.sendActivity('Your Ticket Not Resolved');
                const card1 = card(userProfile.ticketId, userProfile.title, userProfile.description, userProfile.department, userProfile.date, userProfile.issue, userProfile.urgency, userProfile.status);
                await step.context.sendActivity({
                    attachments: [CardFactory.adaptiveCard(card1)]
                });
                return await step.beginDialog(suggitiondialog);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    /**
     * Method to handle user actions after sending the card
     * @param {*} step 
     * @returns 
     */
    async userAction(step) {
        try {
            const user = step.context.activity.text;
            if(user === undefined){
                const user = step.context.activity.value.text
                if (user === 'submit') {
                const responseData = await postTicket(step);
                console.log('Response data:', responseData);

                const ticketId = responseData.data.ticket_id;
                const title = responseData.data.Title;
                const description = responseData.data.Description;
                const department = responseData.data.Department;
                const date = responseData.data.Date;
                const issue = responseData.data.Issue;
                const urgency = responseData.data.Urgency;
                const status = responseData.data.Status;

                const userProfile = await this.userProfile.get(step.context, new UserProfile());
                userProfile.ticketId = ticketId;
                userProfile.title = title;
                userProfile.description = description;
                userProfile.department = department;
                userProfile.date = date;
                userProfile.issue = issue;
                userProfile.urgency = urgency;
                userProfile.status = status;
                await this.userProfile.set(step.context, userProfile);
                console.log(userProfile);
                const card1 = card(ticketId, title, description, department, date, issue, urgency, status);
                await step.context.sendActivity({
                    attachments: [CardFactory.adaptiveCard(card1)]
                });
                await this.conversationState.saveChanges(step.context);
                return await step.beginDialog(suggitiondialog);
            } else if (user === "cancel") {
                await step.context.sendActivity('Ticket Cancel');
                return await step.beginDialog(suggitiondialog);
            } else {
                await step.context.sendActivity('Ticket Canceled');
            }
        }else{
            console.log(step.context.activity.text);
            const user = step.context.activity.text
            if (user === 'submit') {
                const responseData = await postTicket(step);
                console.log('Response data:', responseData);
                
                const ticketId = responseData.data.ticket_id;
                const title = responseData.data.Title;
                const description = responseData.data.Description;
                const department = responseData.data.Department;
                const date = responseData.data.Date;
                const issue = responseData.data.Issue;
                const urgency = responseData.data.Urgency;
                const status = responseData.data.Status;

                const userProfile = await this.userProfile.get(step.context, new UserProfile());
                userProfile.ticketId = ticketId;
                userProfile.title = title;
                userProfile.description = description;
                userProfile.department = department;
                userProfile.date = date;
                userProfile.issue = issue;
                userProfile.urgency = urgency;
                userProfile.status = status;
                await this.userProfile.set(step.context, userProfile);
                console.log(userProfile);
                const card1 = card(ticketId, title, description, department, date, issue, urgency, status);
                await step.context.sendActivity({
                    attachments: [CardFactory.adaptiveCard(card1)]
                });
                await this.conversationState.saveChanges(step.context);
                return await step.beginDialog(suggitiondialog);
            } else if (user === "cancel") {
                await step.context.sendActivity('Ticket Cancel');
                return await step.beginDialog(suggitiondialog);
            } else {
                await step.context.sendActivity('Ticket Canceled');
                return await step.beginDialog(suggitiondialog);
            }
        }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports.TicketDialog = TicketDialog;
