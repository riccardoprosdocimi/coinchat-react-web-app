import React from 'react';
import moment from 'moment'

import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Filler
} from 'chart.js';
import {Line} from 'react-chartjs-2';

import marketData from "../data/coin-detail/coin-market";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


export const options = {
    responsive: true,
    elements: {
        point: {
            pointStyle: "circle",
            radius: 0,
            hoverRadius: 6,
            // pointBorderWidth: 0,
            // pointHoverBorderWidth: 0,
        },
        line: {
            // fill: true,
            // backgroundColor: ,
        }
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
        tooltip: {
            // position: "nearest"
        }
    },
    interaction: {
        mode: 'index',
        intersect: false,

    },
    scales: {
        y: {
            display: false,
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                maxRotation: 0,
                maxTicksLimit: 6
            }
        }
    }
};

const labels = marketData.prices.map(
    (price) => {
        const unixTimestamp = price[0];
        let t = new Date();
        t.setSeconds(unixTimestamp);
        return moment(t).format("dd hh:MM");
    }
);
export const data = {
    labels,
    datasets: [
        {
            label: 'USD', // Should be coin name
            data: marketData.prices.map((price) => {
                // return Math.round((rawPrice + Number.EPSILON) * 1000000) / 1000000
                return price[1]
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true

        }
    ],
};


const LineChartArea = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <div id={"timeRangeNavigation"}>
                <ul className="nav nav-pills">
                    <a className="nav-link active" aria-current="page" href="#">1D</a>
                    <a className="nav-link" href="#">1W</a>
                    <a className="nav-link" href="#">1M</a>
                </ul>
            </div>
            <div id="price_trend_chart" className={"w-50"}>
                <Line options={options} data={data}/>
            </div>
        </div>

    );

}

export default LineChartArea;