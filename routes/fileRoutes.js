import multer from "multer";
import {
  uploadFile,
  listFiles,
  downloadFile,
} from "../controllers/fileController.js";
import express from "express";

const router = express.Router();
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadFile);
router.get("/", listFiles);
router.get("/download/:filename", downloadFile);

export default router;
