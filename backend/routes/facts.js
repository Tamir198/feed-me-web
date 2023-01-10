import { Router } from "express";
const router = Router();

import { getFacts, newFact, deleteFact } from "../controllers/factController";

router.get("/facts", getFacts);
router.post("/newFact", newFact);
router.delete("/deleteFact", deleteFact);

export default router;
