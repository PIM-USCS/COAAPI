import { Router } from "express";
import path from "path";
import fs from "fs";

const uploadsRouter = Router();

uploadsRouter.get("/:filename", (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, "../../../../uploads", filename);

    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error(err);
        res
          .status(404)
          .json({ status: "error", message: "Arquivo não encontrado" });
      } else {
        res.sendFile(filePath);
      }
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", message: "Erro interno do servidor" });
  }
});

export default uploadsRouter;
