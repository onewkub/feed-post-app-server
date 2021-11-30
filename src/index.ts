import express, { Request, Response } from "express";
import router from "./router";
import morgan from "morgan";

// สร้าง Express app
const app = express();


// ใส่ Middleware 
// ได้แก่ express.urlencoded, express.json ไว้สำหรับรับ payload ที่เป็น Json
// morgan ใช้สำหรับ log สถามนะของ Request ที่เข้ามาใน Server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", router);

app.get("/", (_, res) => res.status(200).send("this is first page of extra api"));

app.use((_, res) => res.status(404).send("Not Found"));

app.use((err: Error, _: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// จอง Port สำหรับรัน Server
app.listen(3000, () => {
  console.log("This server running on http://localhost:3000");
});
