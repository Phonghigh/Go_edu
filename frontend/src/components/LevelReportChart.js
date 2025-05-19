// src/components/LevelReportChart.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from "recharts";

const LevelReportChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const res = await axios.get(`reports/`);
        const raw = res.data;

        // Chuyển đổi dữ liệu thành mảng dùng cho Recharts
        const transformed = Object.keys(raw).map(subject => ({
            subject,
            ">=8": raw[subject]["Level1"] || 0,
            "6-8": raw[subject]["Level2"] || 0,
            "4-6": raw[subject]["Level3"] || 0,
            "<4": raw[subject]["Level4"] || 0,
        }));

        setChartData(transformed);
        };

        fetchData();
    }, []);

    return (
        <div style={{ width: "100%", height: 400 }}>
        <h3>Báo cáo mức điểm theo môn</h3>
        <ResponsiveContainer>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey=">=8" fill="#4caf50" />
            <Bar dataKey="6-8" fill="#2196f3" />
            <Bar dataKey="4-6" fill="#ff9800" />
            <Bar dataKey="<4" fill="#f44336" />
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default LevelReportChart;
