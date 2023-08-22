const {  DialogSet, DialogTurnStatus,Dialog ,WaterfallDialog,} = require("botbuilder-dialogs");
const {CardFactory}=require('botbuilder')
const {mainDialog ,ticketDialog,suggitiondialog,statusDialog,cancelDialog}= require('../Utilities/DialogId')
const{help}=require('../Cards/helpCard');
const {TicketDialog} = require('./ticketDialog');
const{SuggitionDialog}= require('./suggitionDialog');
const{StatusDialog}=require('./statusDialog')
const {interaction}=require('../Utilities/interaction');
const{CancelDialog}=require('./cancelDialog')

const mainDialogWtf = 'mainDialogWtf';

class MainDialog extends interaction{
    constructor(conversationState,userState){
        super(mainDialog)

        if (!conversationState) throw new Error("conversation state required");
        if (!userState) throw new Error("userState Required");
        this.userState = userState;
        this.conversationState = conversationState;
        this.userProfile = userState.createProperty('UserProfile');

        this.dialogs = new DialogSet(this.userState.createProperty("dialogState"));
        this.addDialog(new WaterfallDialog(mainDialogWtf, [
            this.choiceMenu.bind(this),
            this.userActon.bind(this)
    ]));

    this.addDialog(new TicketDialog(conversationState,userState,ticketDialog));
    this.addDialog(new StatusDialog(conversationState,userState,statusDialog));
    this.addDialog(new SuggitionDialog(conversationState,userState,suggitiondialog));
    this.addDialog(new CancelDialog(conversationState,userState,cancelDialog));


    this.initialDialogId = mainDialogWtf;


    }
    async run(context, accessor) {
        try {
            const dialogSet = new DialogSet(accessor);
            dialogSet.add(this);
            const dialogContext = await dialogSet.createContext(context);
            const results = await dialogContext.continueDialog();
            if (!results || results.status === DialogTurnStatus.empty) {
                 await dialogContext.beginDialog(this.id);
            }
            else {
                console.log('dialog stack is empty');
            }
        }
        catch(error) {
            console.log(error);
            throw error
        }
    }
    /**
     * send help Card
     * @param {*} step 
     * @returns 
     */
    async choiceMenu(step) {
        try {
          const usertext = step.context.activity.text
          console.log(usertext)
          console.log(step.context.activity.from.name);
          const card = help();
        await step.context.sendActivity({
        attachments: [CardFactory.adaptiveCard(card)]
      });
          return Dialog.EndOfTurn;
        }catch (error) {
          console.log(error);
          throw error;
        }
    }
    /**
     * user selected value to begin Dialog
     * @param {*} step 
     * @returns 
     */
    async userActon(step){
        try{
            console.log(step.context.activity,"hii");
            const userText = step.context.activity.value.text
            if(userText.toLowerCase()==="ticket"){
                return await step.beginDialog(ticketDialog);
            }else if(userText.toLowerCase()==="status"){
                return await step.beginDialog(statusDialog);
            }else if(userText.toLowerCase()==="cancel"){
                return await step.beginDialog(cancelDialog);
            }
            else{
                step.context.sendActivity("Sorry Bot in Training ")
                return await step.beginDialog(suggitiondialog);
            }
        }catch(error){
            console.log(error)
            throw error
        }
    }
}

module.exports = MainDialog;
