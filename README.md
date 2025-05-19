# Student Scores Dashboard

A fullstack MERN project to import, query, and visualize high school student scores with over 1 million records.

---

## Project Overview

This application allows users to:
- Lookup student scores by registration number
- View a dashboard of score level distributions per subject
- See Top 10 students of group A
- Support responsive UI and API performance for large datasets

---

## Tasks Progress

| Ngày | ID   | Phần                       | Task                                | Yêu cầu chính                                           | Check |
|------|------|----------------------------|-------------------------------------|---------------------------------------------------------|-------|
| 1    | 1.1  | Thiết lập & Cấu hình       | Tạo Git repo & nhánh                | Main, Backend, Frontend branches                        | ✅     |
| 1    | 1.2  | Backend                    | Cấu trúc thư mục                    | models/, controllers/, routes/, utils/                  | ✅     |
| 1    | 1.3  | Frontend                   | Cấu trúc thư mục                    | components/, pages/, hooks/, services/                  | ✅     |
| 1    | 1.4  | Backend                    | Cài packages                        | express, mongoose, dotenv, joi, cors, nodemon           | ✅     |
| 1    | 1.5  | Frontend                   | Cài packages                        | react, react-dom, tailwindcss                           | ✅     |
| 1    | 2.1  | Database                   | Thiết kế Mongoose Schema           | StudentScore schema                                     | ✅     |
| 1    | 2.2  | Database                   | Viết script Seeder                 | CSV parser, insert batch                                | ✅     |
| 1    | 2.3  | Database                   | Chạy import subset                 | 100,000 records                                         | ✅     |
| 1    | 2.4  | Database                   | Chạy full import                   | ~1,048,576 records                                      | ✅     |
| 1    | 2.5  | Database                   | Tạo index                          | registrationNumber index                                | ✅     |
| 1    | 3.1  | Backend API                | Tra cứu điểm                       | GET /api/scores/:regNo                                  | ✅     |
| 1    | 3.2  | Backend API                | Logic phân cấp mức điểm           | Hàm helper phân loại level                              | ✅     |
| 1    | 3.3  | Backend API                | Báo cáo mức điểm (aggregate)      | GET /api/reports/levels                                 | ✅     |
| 1    | 3.4  | Backend API                | Top 10 nhóm A                      | GET /api/top10?group=A                                  | ✅     |
| 1    | 3.5  | Backend API                | Manual test                        | Postman Collection                                      | ✅     |
| 2    | 4.1  | Frontend                   | Form Tra cứu                       | Input SBD + fetch API                                   | ✅     |
| 2    | 4.2  | Frontend                   | Dashboard mức điểm                 | Bar chart theo từng môn                                 | ✅     |
| 2    | 4.3  | Frontend                   | Bảng Top 10 nhóm A                 | Table hiển thị top 10                                   | ✅     |
| 2    | 4.4  | Frontend                   | Responsive Design                  | Tailwind responsive                                     | ✅     |
| 2    | 4.5  | Frontend                   | Form validation                    | Không cho submit khi input sai                          | ✅     |
| 2    | 5.1  | Docker & Deploy (Optional) | Dockerfile Backend                 | Docker build file                                       | ✅      |
| 2    | 5.2  | Docker & Deploy (Optional) | Dockerfile Frontend                | Docker build file                                       | ✅      |
| 2    | 5.3  | Docker & Deploy (Optional) | docker-compose                     | Compose frontend + backend + MongoDB                    | ✅      |
| 2    | 5.4  | Docker & Deploy (Optional) | Deploy Backend                     | Heroku/Fly.io deployment                                | ✅      |
| 2    | 5.5  | Docker & Deploy (Optional) | Deploy Frontend                    | Vercel/Netlify deployment                               | ✅      |




