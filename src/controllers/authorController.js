const authorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken")


const createAuthor = async function (req, res) {
  try {
    const author_data = req.body

    if (Object.keys(author_data).length == 0) {
      return res.status(400).send({ status: false,msg: "Please Provide Data"})
    }

    let authorCreated = await authorModel.create(author_data)
    res.status(201).send({status: true,Message: "New author created successfully",
    author_data: authorCreated
    })

  } catch (error) {
    res.status(500).send({ status: false,Error: error.message})
  }
}

// ----------------------------------------- GET AUTHOR ------------------------------------------------------------

const getAuthor = async function (req, res) {
  let alldata = await authorModel.find()
  res.status(201).send({status: true,data: alldata})
}

//                <<<=========Login Author========>>>

const loginAuthor = async function (req, res) {

  let {  emailId,password} = req.body
  let status = await authorModel.findOne({email: emailId,password: password})
  if (!status) return res.status(400).send({
    msg: "Author is not found"
  })

  let token = jwt.sign({
      authorId: status._id
    }, "My first Project with My freind"

  )
  res.status(201).send({ token: token })
}

//               <<<==========Exports Module==========>>>

module.exports = {createAuthor,loginAuthor, getAuthor}
