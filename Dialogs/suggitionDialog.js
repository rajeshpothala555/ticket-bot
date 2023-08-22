const { ComponentDialog, Dialog, WaterfallDialog } = require("botbuilder-dialogs");
const { CardFactory } = require('botbuilder');
const { ticketDialog, suggitiondialog, statusDialog,cancelDialog } = require('../Utilities/DialogId');
const { help } = require('../Cards/helpCard');
const {interaction}=require('../Utilities/interaction');

const suggitionDialogwtf = 'suggitionDialogwtf';

class SuggitionDialog extends interaction {
    constructor(conversationState) {
        super(suggitiondialog);

        if (!conversationState) throw new Error("conversation state required");
        this.conversationState = conversationState;

        this.addDialog(new WaterfallDialog(suggitionDialogwtf, [
            this.choiceMenu.bind(this), 
            this.userActon.bind(this) 
        ]));

        this.initialDialogId = suggitionDialogwtf;
    }

    /**
     * Method to display the choice menu to the user
     * @param {*} step 
     * @returns 
     */
    async choiceMenu(step) {
        try {
            const card = help();
            await step.context.sendActivity({
                attachments: [CardFactory.adaptiveCard(card)]
            });
            return Dialog.EndOfTurn;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    /**
     * Method to handle user actions based on their selection
     * @param {*} step 
     * @returns 
     */
    async userActon(step) {
        try {
            console.log(step.context.activity.value.text);
            const userText = step.context.activity.value.text;

            if (userText.toLowerCase() === "ticket") {
                return await step.beginDialog(ticketDialog);
            } else if (userText.toLowerCase() === "status") {
                return await step.beginDialog(statusDialog);
            } else if(userText.toLowerCase() === "cancel"){
                return await step.beginDialog(cancelDialog);
            }else{
                return await step.beginDialog(suggitiondialog);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports.SuggitionDialog = SuggitionDialog;
