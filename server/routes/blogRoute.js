import express from "express"
import { addBlog, getAllBlogs, getSingleBlog } from "../controllers/blogController.js"
import multer from 'multer'
import checkIsUserAuthenticated from "../middlewares/authMiddleware.js"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/uploads/`)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


const router = express.Router()

router.get("/getallblogs", checkIsUserAuthenticated, getAllBlogs)
router.post("/addblog", upload.single('thumbnail'), checkIsUserAuthenticated, addBlog)
router.get("/getblog/:id", checkIsUserAuthenticated, getSingleBlog)

export default router