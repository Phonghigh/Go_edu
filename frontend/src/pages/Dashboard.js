import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import axios from "../axios.Config";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Reports() {
    const [chartData, setChartData] = useState(null);
    const didFetch = useRef(false);

    useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    
    axios.get('/reports/')
        .then(res => {
        const data = res.data;

        const labels = Object.keys(data);

        const level1 = labels.map(subject => data[subject].Level1);
        const level2 = labels.map(subject => data[subject].Level2);
        const level3 = labels.map(subject => data[subject].Level3);
        const level4 = labels.map(subject => data[subject].Level4);

        setChartData({
            labels,
            datasets: [
            { label: 'Level 1', backgroundColor: '#4caf50', data: level1 },
            { label: 'Level 2', backgroundColor: '#ffeb3b', data: level2 },
            { label: 'Level 3', backgroundColor: '#ff9800', data: level3 },
            { label: 'Level 4', backgroundColor: '#f44336', data: level4 },
            ],
        });
        })
        .catch(err => {
        console.error('Error fetching report data:', err);
        });
    }, []);

    return (
        <div>
        <h2 className="text-2xl font-bold mb-4">Score Level Report</h2>
        {chartData ? (
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        ) : (
            <p>Loading chart...</p>
        )}
        </div>
    );
}

export default Reports;
