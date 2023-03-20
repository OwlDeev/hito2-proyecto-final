export const json = {
    "completedHtml": "<p style='font-size:24px;'>Thank you for completing the survey! (please wait for analytics to load ...)<p>",
    "pages": [
      {
        "name": "page_info",
        "elements": [
          {
            "type": "matrix",
            "name": "Quality",
            "title": "Please indicate if you agree or disagree with the following statements",
            "columns": [
              {
                "value": 1,
                "text": "Strongly Disagree"
              },
              {
                "value": 2,
                "text": "Disagree"
              },
              {
                "value": 3,
                "text": "Neutral"
              },
              {
                "value": 4,
                "text": "Agree"
              },
              {
                "value": 5,
                "text": "Strongly Agree"
              }
            ],
            "rows": [
              {
                "value": "affordable",
                "text": "Product is affordable"
              },
              {
                "value": "does what it claims",
                "text": "Product does what it claims"
              },
              {
                "value": "better then others",
                "text": "Product is better than other products on the market"
              },
              {
                "value": "easy to use",
                "text": "Product is easy to use"
              }
            ]
          },
          {
            "type": "radiogroup",
            "name": "organization_type",
            "title": "Which of the following best describes you or your organization?",
            "choices": [
              {
                "value": "ISV",
                "text": "ISV (building commercial/shrink wrapped software)"
              },
              {
                "value": "Consulting",
                "text": "Software consulting firm (provide development services to other organizations)"
              },
              {
                "value": "Custom",
                "text": "Custom software development (as a freelancer/contractor)"
              },
              {
                "value": "In-house",
                "text": "In-house software development"
              },
              {
                "value": "Hobbyist",
                "text": "Hobbyist (develop apps for personal use)"
              }
            ],
            "colCount": 2
          }
        ]
      }
    ]
  };