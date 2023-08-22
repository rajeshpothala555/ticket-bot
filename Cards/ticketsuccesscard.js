//Ticket Success Card
module.exports = {
    card: (ticket_id,Title,Description,Department,Date,Issue,Urgency,Status) => {
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
                            "text": "your ticket has been created",
                            "wrap": true,
                            "id": "ticket",
                            "separator": true,
                            "horizontalAlignment": "Center",
                            "color": "Warning",
                            "size": "Medium",
                            "weight": "Bolder",
                            "fontType": "Default"
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Ticket Id   :",
                                            "wrap": true,
                                            "id": "id",
                                            "horizontalAlignment": "Center",
                                            "color": "Accent",
                                            "size": "Medium",
                                            "weight": "Bolder"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "id": "id1",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${ticket_id}`,
                                            "wrap": true,
                                            "id": "idnum"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Title :",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Medium",
                                            "color": "Accent",
                                            "weight": "Bolder",
                                            "id": "ssg"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${Title}`,
                                            "wrap": true,
                                            "id": "ss"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Description :",
                                            "wrap": true,
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Accent",
                                            "horizontalAlignment": "Center",
                                            "id": "Description :"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${Description}`,
                                            "wrap": true,
                                            "id": "New TextBlock :"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Department :",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Accent",
                                            "id": "Department :"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${Department}`,
                                            "wrap": true,
                                            "id": "New TextBlock"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Date :\n",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Accent"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${Date}`,
                                            "wrap": true,
                                            "id": "aaa"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Issue :",
                                            "wrap": true,
                                            "id": "Issue",
                                            "horizontalAlignment": "Center",
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Accent"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text":`${Issue}`,
                                            "wrap": true,
                                            "id": "ddd"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Urgency :",
                                            "wrap": true,
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Accent",
                                            "horizontalAlignment": "Center",
                                            "id": "kkk"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${Urgency}`,
                                            "wrap": true,
                                            "id": "lll"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Status :",
                                            "wrap": true,
                                            "id": "Status",
                                            "horizontalAlignment": "Center",
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Accent"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${Status}`,
                                            "wrap": true,
                                            "id": "llll"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                }
            ]
        }
    }
}
