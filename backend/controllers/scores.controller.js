import StudentScore from "../models/studentScore.js";
import { get_level } from "../utils/get_level.js";

export const lookup = async(req,res) => {
    try {
    const {sbd} = req.params;
    const scores = await StudentScore.findOne({ registrationNumber: sbd }).select('registrationNumber scores -_id').lean();
    // console.log(scores);
    if(!scores){
        return res.status(404).json({error: "Not found"});
    }
    console.log(get_level(scores.scores.math));
    return res.json({student: scores});
    } catch (error) {
        console.error('[lookup error]', err);
        return res.status(500).json({error: "Server Error"});
    }
}