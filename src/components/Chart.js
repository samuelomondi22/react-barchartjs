import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Manyatta",
          "Arina",
          "Milimani",
          "Mamboleo",
          "Lolwe"
        ],
        datasets: [
          {
            label: "Populations",
            data: [90000, 30000, 40000, 50000, 60000, 70000],
            backgroundColor: [
              "rgba(255,99,132,0.6)",
              "rgba(54,162,235,0.6)",
              "rgba(255,206,86,0.6)",
              "rgba(75,192,192,0.6)",
              "rgba(153,102,255,0.6)",
              "rgba(255,159,64,0.6)",
              "rgba(255,99,132,0.6)"
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <Bar data={this.state.chartData} options={{}} />
      </div>
    );
  }
}
