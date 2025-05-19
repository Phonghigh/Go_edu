import React, { useEffect, useState, useRef } from "react";
import axios from "../axios.Config";

export default function ReportsPage() {
    // const [report, setReport] = useState(null);
    const [top10, setTop10] = useState([]);
    const [loadingTop10, setLoadingTop10] = useState(true);
    const [error, setError] = useState(null);
    const didFetch = useRef(false);

    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;

        axios
        .get("top10/?group=A")
        .then((res) => {
            if (res.data.success) {
            setTop10(res.data.data);
            } else {
            setError("Failed to load top 10 data");
            }
        })
        .catch(() => setError("Failed to load top 10 data"))
        .finally(() => setLoadingTop10(false));
    }, []);

    if (loadingTop10)
        return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-lg font-semibold">Loading...</div>
        </div>
        );
    if (error)
        return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-red-600 font-semibold">{error}</div>
        </div>
        );

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Reports</h1>

        {/* Average Scores Report (commented out, bạn có thể bật lại khi cần) */}
        {/* <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Average Scores Report</h2>
            <ul className="list-disc list-inside text-lg space-y-1">
            <li>Average Math: {report?.avgMath}</li>
            <li>Average Physics: {report?.avgPhysics}</li>
            <li>Average Chemistry: {report?.avgChemistry}</li>
            <li>Average Total: {report?.avgTotal}</li>
            <li>Total Students: {report?.totalStudents}</li>
            </ul>
        </section> */}

        <section>
            <h2 className="text-2xl font-semibold mb-4 text-center">
            Top 10 Students - Group A
            </h2>
            <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
                <thead className="bg-blue-600 text-white">
                <tr>
                    <th className="py-3 px-4 text-left">Registration Number</th>
                    <th className="py-3 px-4 text-right">Math</th>
                    <th className="py-3 px-4 text-right">Physics</th>
                    <th className="py-3 px-4 text-right">Chemistry</th>
                    <th className="py-3 px-4 text-right">Total</th>
                </tr>
                </thead>
                <tbody>
                {top10.map((student) => (
                    <tr
                    key={student._id}
                    className="even:bg-gray-100 hover:bg-gray-200 transition"
                    >
                    <td className="py-2 px-4">{student.registrationNumber}</td>
                    <td className="py-2 px-4 text-right">{student.math}</td>
                    <td className="py-2 px-4 text-right">{student.physics}</td>
                    <td className="py-2 px-4 text-right">{student.chemistry}</td>
                    <td className="py-2 px-4 text-right font-semibold">
                        {student.total}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </section>
        </div>
    );
}
