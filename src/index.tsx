import React, { useEffect } from "react";
import Chart from "chart.js";

interface IonChartProps {
    type: string;
    yLabel: string,
    xData: any,
    yData: any
}

const IonChart: React.FC<IonChartProps> = ({
    type,
    yLabel,
    xData,
    yData
  }) => {
    useEffect(() => {
      new Chart("chart", {
        type: type,
        data: {
          labels: yData,
          datasets: [
            {
              label: yLabel,
              data: xData,
              borderColor: "red"
            },
          ],
        }
      });
    }, [])
    
    return (<canvas id="chart" width="200" height="200"></canvas>)
}

export default IonChart;