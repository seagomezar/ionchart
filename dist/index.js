import React, { useEffect } from "react";
import Chart from "chart.js";
var IonChart = function (_a) {
    var type = _a.type, yLabel = _a.yLabel, xData = _a.xData, yData = _a.yData;
    useEffect(function () {
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
    }, []);
    return (React.createElement("canvas", { id: "chart", width: "200", height: "200" }));
};
export default IonChart;
