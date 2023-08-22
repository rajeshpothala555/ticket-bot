const { ActivityHandler, CardFactory ,TurnContext } = require('botbuilder');
const { welcome } = require('./Cards/WelcomeCard');
const { UserProfile } = require('./Utilities/userProfile');

class Dona extends ActivityHandler {
    constructor(conversationState, mainDialog, userState,conversationReferences) {
        super();

        if (!conversationState) throw new Error("ConversationState Required");
        if (!userState) throw new Error("userState Required");
        if (!mainDialog) throw new Error("mainDialog Required");

        // this.conversationReferences = conversationReferences;
        this.conversationState = conversationState;
        this.userState = userState;
        this.mainDialog = mainDialog;

        this.dialogState = this.conversationState.createProperty('DialogState');

        this.user = new UserProfile(userState);

        // this.onConversationUpdate(async (context, next) => {
        //     this.addConversationReference(context.activity);

        //     await next();
        // });

        /**
         * when new members are added to the conversation 
         * The bot sends a welcome message to the new members
         */
        this.onMembersAdded(async (context, next) => {
            try {
                const membersAdded = context.activity.membersAdded;
                for (let cnt = 0; cnt < membersAdded.length; cnt++) {
                    if (membersAdded[cnt].id !== context.activity.recipient.id) {
                        console.log("membersAdded");
                        const welcomeCard = CardFactory.adaptiveCard(welcome());
                        await context.sendActivity({ attachments: [welcomeCard] });
                    }
                }
                await next();
            } catch (error) {
                console.log(error);
                throw error;
            }
        });

        
        this.onMessage(async (context, next) => {
            try {
                this.addConversationReference(context.activity);
                console.log("onMessage");
                await this.mainDialog.run(context, this.dialogState);
                await next();
            } catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    
    // addConversationReference(activity) {
    //     const conversationReference = TurnContext.getConversationReference(activity);
    //     this.conversationReferences[conversationReference.conversation.id] = conversationReference;
    // }


    async run(context) {
        try {
            await super.run(context);
            await this.conversationState.saveChanges(context, false);
            await this.userState.saveChanges(context, false);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = Dona;
