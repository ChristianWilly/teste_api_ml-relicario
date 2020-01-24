const express = require('express')
const User = require("../Models/userModel.js")
const router = express.Router()

router.post("/registro", async (req, res) => {
	const { email } = req.body
	try {
		if(await User.findOne({email})){
			res.status(400).send({error: "Usuário ja existente"})
		}
		const user = await User.create(req.body)
		return res.send({user})
	}catch (err){
		return res.status(400).send({ error: "Registration failed"})
	}
})

module.exports = app => app.use("/auth", router)