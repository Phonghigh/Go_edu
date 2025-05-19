import React, { useState } from 'react';
import axios from "../axios.Config";

const ScoreLookup = () => {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [scoreData, setScoreData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        setError('');
        // setScoreData(null);
        const res = await axios.get(`scores/${registrationNumber}`);;
        setScoreData(res.data.student);
        } catch (err) {
        if (err.response && err.response.status === 404) {
            setError('Không tìm thấy học sinh với SBD này.');
        } else {
            setError('Có lỗi xảy ra khi tra cứu điểm.');
        }
        }
    };

    return (
        <div className="p-4">
        <div className="bg-white shadow-md p-4 rounded mb-4">
            <h2 className="text-xl font-bold mb-2">User Registration</h2>
            <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                className="border px-3 py-2 rounded w-full max-w-md"
                placeholder="Enter registration number"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                required
            />
            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
            >
                Submit
            </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
            {scoreData ? (
            <div>
                <p><strong>SBD:</strong> {scoreData.registrationNumber}</p>
                <ul className="list-disc ml-5 mt-2">
                {Object.entries(scoreData.scores).map(([subject, score]) => (
                    <li key={subject}>
                    {subject.toUpperCase()}: {score}
                    </li>
                ))}
                </ul>
            </div>
            ) : (
            <p>Detailed view of search scores here!</p>
            )}
        </div>
        </div>
    );
};

export default ScoreLookup;
