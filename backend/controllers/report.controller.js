import StudentScore from "../models/studentScore.js";
import { getCache, setCache } from "../utils/cache.js";
export const get_reports = async (req,res) =>{
    const cachekey = 'report:levels';
    try {
    const cached = await getCache(cachekey);
    // console.log(cached);
    if (cached){
        return res.status(200).json(cached);
    }

    const subjects = ['math','chemistry','literature','english','physics','biology','history','geography','gdcd'];
    // Helper tạo pipeline cho 1 môn
    const buildPipe = subj => [
        { $group: {
            _id: null,
            Level1: { $sum: { $cond: [{ $gte: [`$scores.${subj}`,8] },1,0] } },
            Level2: { $sum: { $cond: [
                { $and: [
                { $gte: [`$scores.${subj}`,6] },
                { $lt:  [`$scores.${subj}`,8] }
                ]},1,0
            ]}},
            Level3: { $sum: { $cond: [
                { $and: [
                { $gte: [`$scores.${subj}`,4] },
                { $lt:  [`$scores.${subj}`,6] }
                ]},1,0
            ]}},
            Level4: { $sum: { $cond: [{ $lt: [`$scores.${subj}`,4] },1,0] } }
        }},
        { $project: { _id:0, Level1:1,Level2:1,Level3:1,Level4:1 } }
        ];

        // Tạo mảng promise
        const promises = subjects.map(subj =>
        StudentScore.aggregate(buildPipe(subj)).option({ allowDiskUse: true }).then(arr => arr[0]||{})
        );

        // Chạy song song
        const results = await Promise.all(promises);

        // Ghép vào object trả về
        const report = subjects.reduce((out, subj, i) => {
        out[subj] = results[i];
        return out;
        }, {});
        //Lưu kết quả vào Redis với TTL
        await setCache(cachekey, report, 300); 
        
        return res.json(report);
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}