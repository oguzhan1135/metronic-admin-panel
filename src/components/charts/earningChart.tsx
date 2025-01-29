import { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Switch from "../switch";

const EarningChart = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [earning, setEarning] = useState(false)

    const [chart, setChart] = useState<{
        options: ApexOptions;
        series: { name: string; data: number[] }[];
    }>({
        options: {
            chart: {
                id: "area",

                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                categories: months,
            },
            yaxis: {
                labels: {
                    formatter: (value) => `$${value / 1000}k`,
                },
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                custom: ({ series, seriesIndex, dataPointIndex }) => {
                    const month = months[dataPointIndex];
                    const value = series[seriesIndex][dataPointIndex];

                    return `
                       <div style="background: white; padding: 12px; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0,0,0,0.2);">
                            <span style="font-size: 13px; line-height: 14px; font-weight: 400; color: gray;">${month}, 2024 Sales</span>
                            <div style="display: flex; flex-direction: row; gap: 6px; align-items: center; padding-top:14px;">
                                <span style="font-weight:600; font-size:15px; line-height:16px; color:black;">$${value}</span>  
                                <div style="padding: 4px; border-radius: 4px; background-color: #EAFFF1; border: 1px solid #17C653; display: flex; align-items: center; justify-content: center;">
                                    <span style="color: #17C653;">+24%</span>  
                                </div>  
                            </div>
                        </div>
                    `;
                },
            },
        },
        series: [
            {
                name: "Earnings",
                data: [30000, 40000, 45000, 50000, 49000, 60000, 70000, 91000],
            },
        ],
    });

    return (
        <div className=" flex flex-col ">
            <div className="py-2.5 border-b border-b-gray-400">
                <div className="flex flex-row items-center justify-between px-[30px]">
                    <span>Earnings</span>
                    <div className="flex flex-row items-center gap-2.5">
                        <span>Referrals only</span>
                        <Switch size="small" status={earning} setSwitch={() => setEarning(!earning)} />
                            <select className="p-3 border-0" >
                                <option value="oneMonth">1 month</option>
                                <option value="threeMonth">3 month</option>
                                <option value="sixMonth">6 month</option>
                                <option value="twelveMounth">12 month</option>
                            </select>
                    </div>
                </div>
            </div>
            <Chart options={chart.options} series={chart.series} type="area" height={360} />

        </div>

    );
};

export default EarningChart;
