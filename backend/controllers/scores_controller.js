import StudentScore from "../models/studentScore.js";

export const lookup = async(req,res) => {
    try {
    const {sbd} = req.params;
    const scores = await StudentScore.findOne({ registrationNumber: sbd }).select('registrationNumber scores -_id').lean();
    console.log(scores);
    if(!scores){
        return res.status(404).json({error: "Not found"});
    }
    return res.json({student: scores});
    } catch (error) {
        console.error('[lookup error]', err);
        return res.status(500).json({error: "Server Error"});
    }
}