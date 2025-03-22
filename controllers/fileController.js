import {
  saveFileMetadata,
  getFileList,
  getFilePath,
  getFileMetadata,
  checkFileExists,
} from "../services/fileService.js";
import path from "path";

export const uploadFile = async (req, res) => {
  try {
    const { file } = req;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const savedFile = await saveFileMetadata(file);
    res.status(201).json({
      message: "File uploaded successfully",
      filename: file.filename,
      size: file.size,
      name: file.originalname,
    });
  } catch (err) {
    res.status(500).json({ error: "File upload failed", details: err.message });
  }
};

export const listFiles = async (req, res) => {
  try {
    const files = await getFileList();
    res.json(
      files.map((file) => ({
        name: file.name,
        key: file.key,
        size: file.size,
        uploadedAt: file.uploadedAt,
      }))
    );
  } catch (err) {
    res

      .status(500)
      .json({ error: "Error fetching file list", details: err.message });
  }
};

export const downloadFile = async (req, res) => {
  try {
    const filePath = getFilePath(req.params.filename);
    const fileExists = await checkFileExists(filePath);
 
    if (!fileExists) { 

      return res.status(404).json({ error: "File not found" });
    }

    const fileMetadata = await getFileMetadata(req.params.filename);
      res.download(filePath, fileMetadata.name);

  } catch (err) {
    res
      .status(500)
      .json({ error: "Error downloading file", details: err.message });
  }
};
