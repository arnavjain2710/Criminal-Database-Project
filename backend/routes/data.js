import express from "express";
import { regComplaint , getAllCriminals, getCriminalsByCrime, getCriminalsByFilters, getCriminalsByGender, getCriminalsByLocation, getCriminalsByPrison, getCriminalsByStatus, getCriminalsByYear, register, login } from "../controllers/data.js"

const router = express.Router();



router.get("/",getAllCriminals)
router.get("/byCrimes",getCriminalsByCrime)
router.get("/byPrison",getCriminalsByPrison)
router.get("/byGender",getCriminalsByGender)
router.get("/byLocation",getCriminalsByLocation)
router.get("/byYear",getCriminalsByYear)
router.get("/byStatus",getCriminalsByStatus)
router.post("/byfilters",getCriminalsByFilters)
router.post("/regcomplaint",regComplaint)
router.post("/register",register)
router.post("/login",login)

export default router;