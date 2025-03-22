import { FileModel } from "../models/fileModel.js";
import path from "path";
import fs from "fs/promises";

export const saveFileMetadata = async (file) => {
  try {
    const newFile = new FileModel({
        key: file.filename,
        size: file.size,
      name: file.originalname,
    
    });
    await newFile.save();
    return newFile;
  } catch (e) {
    throw new Error(`Failed to save file: ${e}`);
  }
};

export const getFileList = async () => {
  try {
    const files = await FileModel.find().sort({ uploadedAt: -1 });
    return files;
  } catch (e) {
    throw new Error(`Failed to fetch files: ${e}`);
  }
};

export const getFilePath = (filename) => {
  return path.join(process.cwd(), "uploads", filename);
};

export const getFileMetadata = async (filename) => {
  try {
    const file = await FileModel.findOne({ key: filename });
    if (!file) {

      throw new Error("File not found");
    }
    return file;
  } catch (error) {
    throw new Error(`Failed to fetch file: ${error.message}`);
  }
};

export const checkFileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};
