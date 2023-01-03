const { Router } = require('express');
const express = require('express');
const router = express.Router()
const author = require("../controllers/authorController");
const blog = require("../controllers/blogControllers")
const {Authentication}=require("../middleware.js/auth")
const {autheraise}=require("../middleware.js/authorisation")



//        <<===>><<====>     <<==Author==>>       

router.post("/authors", author.createAuthor)
router.get("/authors", author.getAuthor)

//                             <<==Blog==>>       <<===>><<===>>

router.post("/blog", blog.createBlog)
router.get("/blogs",Authentication,blog.getBlog)

router.put("/blogis/:blogId",Authentication,autheraise,blog.updateBlog)
router.delete("/blogs/:blogId",Authentication,autheraise,blog.DELETEblogData)

router.delete("/blogs",Authentication,autheraise,blog.deleteunpublished)
router.post("/login",author.loginAuthor)




module.exports=router