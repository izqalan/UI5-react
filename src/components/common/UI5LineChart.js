import React from 'react';
import { LineChart } from "@ui5/webcomponents-react-charts";

const UI5LineChart = () => {
  const dataset = [
    {
      month: "January",
      data: 65
    },
    {
      month: "February",
      data: 59
    },
    {
      month: "March",
      data: 80
    },
    {
      month: "April",
      data: 81
    },
    {
      month: "May",
      data: 56
    },
    {
      month: "June",
      data: 55
    },
    {
      month: "July",
      data: 40
    }
  ];
  
  return (
    <div>
      <LineChart 
        dataset={dataset}
        measures={[{accessor: "data", label: "Stock Price"}]} 
        dimensions={[{accessor: "month"}]} />
    </div>
  )
}

export default UI5LineChart;

