import React from 'react';
import moment from 'moment'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import marketData from "../data/coin-detail/coin-market";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    elements: {
        point: {
            pointStyle: "line"
        }
    },
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
    interaction: {
        mode: 'nearest',
        intersect: false,

    },
    scales: {
        y:{
            display: false,
        }
    }
};

const labels = marketData.prices.map(
    (price) => {
        const unixTimestamp = price[0];
        let t = new Date();
        t.setSeconds( unixTimestamp );
        let formatted = moment(t).format("dd hh:MM");
        return formatted;
    }
);
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: marketData.prices.map((price) => {
                let rawPrice = price[1];
                // return Math.round((rawPrice + Number.EPSILON) * 1000000) / 1000000
                return rawPrice
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};




const LineChartArea = () => {
    return(
        <div className="d-flex justify-content-center">
            <div id="price_trend_chart" className={"w-50"}>
                <Line options={options} data={data} />
            </div>
        </div>

    );

}

export default LineChartArea;