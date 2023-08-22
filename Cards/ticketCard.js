// Ticket Card
module.exports = {
    ticket: () => {
        return {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Dona Ticket",
                            "wrap": true,
                            "$data": "Dona Ticket",
                            "size": "Medium",
                            "weight": "Bolder",
                            "horizontalAlignment": "Center"
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Input.Text",
                            "placeholder": "Enter Title",
                            "id": "title",
                            "$data": "${$root}",
                            "label": "Title",
                            "separator": true,
                            "isRequired": true,
                            "errorMessage": "Enter Title",
                            "value": "Enter Title"
                        }
                    ]
                },
                {
                    "type": "Input.Text",
                    "placeholder": "Enter Description",
                    "label": "Description",
                    "id": "description",
                    "$data": "${$root}",
                    "separator": true,
                    "isMultiline": true,
                    "height": "stretch",
                    "isRequired": true,
                    "errorMessage": "Enter Description",
                    "value": "Enter Description"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "department",
                    "label": "Department",
                    "isRequired": true,
                    "errorMessage": "Select Department Option",
                    "choices": [
                        {
                            "title": "IT",
                            "value": "IT"
                        },
                        {
                            "title": "HR",
                            "value": "HR"
                        },
                        {
                            "title": "TEST DEMO",
                            "value": "TEST DEMO"
                        }
                    ],
                    "separator": true,
                    "value": "IT"
                },
                {
                    "type": "Input.Text",
                    "placeholder": "Enter Issue",
                    "$data": "${$root}",
                    "id": "Issue",
                    "label": "Issue",
                    "separator": true,
                    "isMultiline": true,
                    "height": "stretch",
                    "isRequired": true,
                    "errorMessage": "Enter Issue",
                    "value": "Enter Issue"
                },
                {
                    "type": "Input.Date",
                    "id": "date",
                    "label": "When was issue encounterd ?",
                    "separator": true,
                    "errorMessage": "Select Date",
                    "value": "\"${formatDateTime(now(), 'yyyy-MM-dd')}\"",
                    "isRequired": true,
                    "$data": "${$root}"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "urgency",
                    "label": "Urgency",
                    "isRequired": true,
                    "errorMessage": "Select Urgency Option",
                    "choices": [
                        {
                            "title": "Low",
                            "value": "Low"
                        },
                        {
                            "title": "Medium",
                            "value": "Medium"
                        },
                        {
                            "title": "High",
                            "value": "High"
                        }
                    ],
                    "separator": true,
                    "value": "Low",
                    "$data": "${$root}"
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Submit",
                    "id":"submit",
                    "data": {
                        "type": "imBack",
                        "action": "submit",
                        "text": "submit"
                    }
                },
                {
                    "type": "Action.Submit",
                    "title": "Cancel",
                    "id": "cancel",
                    "data": {
                        "type": "imBack",
                        "action": "cancel",
                        "text": "cancel"
                    }
                }
            ]
        }
    }
}