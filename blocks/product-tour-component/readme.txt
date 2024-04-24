04/15/2024  01:45 PM             2,523 index-property.html
04/15/2024  09:08 AM               402 index.html
04/15/2024  09:08 AM            14,657 product-tour-component.js

These are a different version of the webcompnent that take property values in the html instead of just  loading the json data from an external source. Improvements made the accordion and carousel animation and simplified the css.
 CReated the json format needed (see *.html) : <product-tour-component data-config='{
        "tours": [
            {
                "name": "Supply Chain Management",
                "steps": [
                    {
                        "text": "Explore our Supply Chain Dashboard.",
                        "imgPath": "https://via.placeholder.com/1024x576.png?text=Explore our Supply Chain Dashboard.",
                        "imgAltText": "Supply Chain Dashboard"
                    },
                    {
                        "text": "Deep dive into logistics.",
                        "imgPath": "https://via.placeholder.com/1024x576.png?text=Deep dive into logistics.",
                        "imgAltText": "Logistics Detail"
                    }
                ]
            },
            {
                "name": "Sales and Operations",
                "steps": [
                    {
                        "text": "Overview of Sales Operations.",
                        "imgPath": "https://via.placeholder.com/1024x576.png?text=Overview of Sales Operations.",
                        "imgAltText": "Sales Operations"
                    },
                    {
                        "text": "Details on Sales Forecasting.",
                        "imgPath": "https://via.placeholder.com/1024x576.png?text=Details on Sales Forecasting.",
                        "imgAltText": "Sales Forecasting Detail"
                    }
                ]
            },
            {
                "name": "Customer Engagement",
                "steps": [
                    {
                        "text": "Understanding Customer Needs.",
                        "imgPath": "https://via.placeholder.com/1024x576.png?text=Customer Engagement",
                        "imgAltText": "Customer Needs"
                    },
                    {
                        "text": "Improving Customer Interactions.",
                        "imgPath": "https://via.placeholder.com/1024x576.png?text=Improving Customer Interactions",
                        "imgAltText": "Customer Interactions"
                    }
                ]
            }
        ]
    }'></product-tour-component>

These properties , once agreed upon, will be the data points for the adobe block development.

04/15/2024  07:18 PM             4,320 product-tour-property-component-viewer.html
04/15/2024  08:09 PM             9,939 product-tour-property-component-viewer.js
04/15/2024  04:22 PM             6,661 product-tour-property-component.js