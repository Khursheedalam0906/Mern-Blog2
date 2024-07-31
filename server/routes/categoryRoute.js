import express from 'express'
import { addCategory, getCategory } from '../controllers/categoryController.js'
import checkIsUserAuthenticated from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post("/addcategory", checkIsUserAuthenticated, addCategory)
router.get("/getcategory", checkIsUserAuthenticated, getCategory)

export default router