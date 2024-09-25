import express from "express";
import {
  createOrIncrementCounter,
  resetCounter,
} from "../controllers/counterController.js";

const router = express.Router();

// Crear, incrementar y devolver el badge SVG en una sola ruta
router.get('/hit/:namespace/:key', createOrIncrementCounter);

router.post("/reset/:namespace/:key", resetCounter);

export default router;
