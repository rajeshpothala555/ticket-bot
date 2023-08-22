//welcome Card
module.exports = {
    welcome:()=>{
        return{
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Image",
                            "$data": "celebal",
                            "id": "celebal",
                            "url": "https://www.linkpicture.com/q/Screenshot-2023-07-25-113655.png",
                            "altText": "Dona"
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "**Hii Welcome To Dona**",
                                    "wrap": true,
                                    "id": "dona"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**Your Personal ticketing agent. Send Hi or any Message**",
                            "wrap": true
                        }
                    ]
                }
            ]
        }
    }
}