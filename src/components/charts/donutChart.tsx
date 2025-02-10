import { ApexOptions } from "apexcharts";
import  { useState } from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
    const [chart] = useState<{
        options: ApexOptions;
        series: number[];
    }>({
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: "donut",
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: true,
                position: "right",
                horizontalAlign: "center",
            },
            tooltip: {
                enabled: true,
                custom: ({ series, seriesIndex, w }) => {
                    return `
                        <div class="bg-white shadow-lg rounded-md text-sm font-semibold px-3 py-2 text-gray-700">
                            ${w.config.labels[seriesIndex]}: 
                            <span class="text-blue-500">${series[seriesIndex]}%</span>
                        </div>
                    `;
                },
            },
            labels: ["ERP", "HRM", "DMS", "CRM", "DAM"],
            responsive: [
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            width: "100%",
                        },
                        legend: {
                            position: "bottom",
                            horizontalAlign: "center",

                        },
                    },
                },
            ],
        },
    });

    return (
        <div className="flex flex-col items-center justify- w-full py-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Chart options={chart.options} series={chart.series} type="donut" height={150} />
            </div>
        </div>
    );
};

export default DonutChart;
