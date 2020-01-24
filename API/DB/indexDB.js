const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://userTeste:tesTe13@relicario-erp-cluster-ghhoq.mongodb.net/users?retryWrites=true&w=majority",
 { useNewUrlParser: true,
 	useCreateIndex: true,
 	useUnifiedTopology: true
 })

mongoose.Promise = global.Promise

module.exports = mongoose