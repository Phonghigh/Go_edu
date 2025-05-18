import mongoose from 'mongoose';
import fs from 'fs';
import csv from 'csv-parser';
import fieldMapping from './utils/mapping.js';
import StudentScore from './models/studentScore.js';
import connectDB from './config/db.js';

async function seed() {
    connectDB();
    const docs =  [];
    fs.createReadStream('diem_thi_thpt_2024.csv').pipe(csv()).on('data', row =>{
        const doc={scores: {}};

        Object.keys(row).forEach( header=>{
            // Lấy header của từng row
            const header_mapping = fieldMapping[header];
            if (!header_mapping) return;
            // lấy dữ liệu của row
            const value = row[header];

            //xét trường hợp header là scores.môn học
            if (header_mapping.includes('.')){
                const [parent, child] = header_mapping.split('.');
                doc[parent] = doc[parent] || {};
                doc[parent][child] = Number(value);
            }
            //Trường hợp còn lại không cần tách.
            else{
                doc[header_mapping]= String(value) || null;
            }
        });
        docs.push(doc);
        // console.log(doc);
    }).on('end', async()=>{
        console.log('ups lene db')
        try{
            const BATCH_SIZE = 1000;
            for (let i = 0; i < docs.length; i += BATCH_SIZE) {
            const batch = docs.slice(i, i + BATCH_SIZE);
            await StudentScore.insertMany(batch);
            console.log(`Đã insert ${i + batch.length} bản ghi`);
            }
            console(docs.length);
        }
        catch(err){
            console.error(err);
        }
        finally{
            mongoose.disconnect();
        }
    });
}
seed();