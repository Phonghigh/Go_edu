// controllers/top10.js
import StudentScore from '../models/studentScore.js';

export const getTop10 = async (req, res) => {
    try {
        // console.log(req)
        const group = req.query.group;

        // Định nghĩa môn theo nhóm
        const groupSubjects = {
        A: ['math', 'physics', 'chemistry']
        };

        const subjects = groupSubjects[group];
        if (!subjects) return res.status(400).json({ error: 'Unsupported group' });

        // Dựng pipeline
        const pipeline = [
        {
            $project: {
            registrationNumber: 1,
            name: 1,
            [subjects[0]]: `$scores.${subjects[0]}`,
            [subjects[1]]: `$scores.${subjects[1]}`,
            [subjects[2]]: `$scores.${subjects[2]}`,
            total: {
                $add: [
                `$scores.${subjects[0]}`,
                `$scores.${subjects[1]}`,
                `$scores.${subjects[2]}`
                ]
            }
            }
        },
        { $sort: { total: -1 } },
        { $limit: 10 }
        ];

        const top10 = await StudentScore.aggregate(pipeline);

        res.json({
            success: true,
            data: top10
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
