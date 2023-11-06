import express from "express";
import { getAllCriminals, getCriminalsByCrime, getCriminalsByFilters, getCriminalsByGender, getCriminalsByLocation, getCriminalsByPrison, getCriminalsByStatus, getCriminalsByYear } from "../controllers/data.js"

const router = express.Router();



router.get("/",getAllCriminals)
router.get("/byCrimes",getCriminalsByCrime)
router.get("/byPrison",getCriminalsByPrison)
router.get("/byGender",getCriminalsByGender)
router.get("/byLocation",getCriminalsByLocation)
router.get("/byYear",getCriminalsByYear)
router.get("/byStatus",getCriminalsByStatus)
router.post("/byfilters",getCriminalsByFilters)

export default router;