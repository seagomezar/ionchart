import React from "react";
interface IonChartProps {
    type: string;
    yLabel: string;
    xData: any;
    yData: any;
}
declare const IonChart: React.FC<IonChartProps>;
export default IonChart;
