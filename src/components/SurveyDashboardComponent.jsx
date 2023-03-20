import React from "react";
import "survey-analytics/survey.analytics.css";
import { Model } from "survey-core";
import { MatrixPlotly, SelectBasePlotly } from "survey-analytics";
import { VisualizationPanel } from "survey-analytics";
import { json } from "../data/modelSurveyDashboard";

MatrixPlotly.types = ['stackedbar', 'bar', 'pie', 'doughnut'];
SelectBasePlotly.types = ['doughnut', 'bar', 'pie', 'scatter'];
class SurveyDashboardComponent extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const survey = new Model(json);
        const allQuestions = survey.getAllQuestions();
        
        const data = [
            {
                Quality: {
                    affordable: "3",
                    "does what it claims": "4",
                    "better then others": "5",
                    "easy to use": "1"
                },
                organization_type: "In-house",
            },
            {
                Quality: {
                  affordable: "3",
                  "does what it claims": "4",
                  "better then others": "2",
                  "easy to use": "3",
                },
                organization_type: "Hobbyist"
            },
            {
                Quality: {
                    affordable: "3",
                    "does what it claims": "4",
                    "better then others": "5",
                    "easy to use": "1"
                },
                organization_type: "In-house"
            },
        ];
        
        const visPanel = new VisualizationPanel(
            allQuestions,
            data,
            { labelTruncateLength: 27 }
        );
        visPanel.showHeader = true;
        visPanel.render("surveyDashboardContainer");
        
    }
    render() {
        return React.createElement("div", { id: "surveyDashboardContainer" });
    }
}

export default SurveyDashboardComponent;