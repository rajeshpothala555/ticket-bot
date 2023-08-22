//help Crad
module.exports = {
    help:()=>{
        return{
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**Hi! I am Dona**\n",
                            "wrap": true,
                            "id": "text1"
                        },
                        {
                            "type": "TextBlock",
                            "text": "**Your Personal Ticketing Agent.How Can Help You ?**",
                            "wrap": true,
                            "id": "text2"
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ActionSet",
                            "actions": [
                                {
                                    "type": "Action.Submit",
                                    "title": "Raise Ticket",
                                    "id": "ticket",
                                    "data": {
                                        "type": "imBack",
                                        "action": "ticket",
                                        "text": "ticket"
                                    }
                                },
                                {
                                    "type": "Action.Submit",
                                    "title": "Ticket Status",
                                    "id": "status",
                                    "data": {
                                        "type": "imBack",
                                        "action": "status",
                                        "text": "status"
                                    }

                                },
                                {
                                    "type": "Action.Submit",
                                    "title": "Cancel Ticket",
                                    "id": "cancel",
                                    "data": {
                                        "type": "imBack",
                                        "action": "cancel",
                                        "text": "cancel"
                                    }

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}