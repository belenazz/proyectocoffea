const path = require('path');
const fs = require('fs');
let db = require("../database/models");
const Op = db.Sequelize.Op

const apiController = {

	products: (req, res) => {
        db.Products.findAll()
        .then (products=> {
            res.send(products)
		})
	},

	detail: (req, res) => {
		db.Products.findByPk(req.params.id)
			.then(product =>
				res.send(product)
			)
	},

    users: (req, res) => {
        db.Users.findAll()
            .then (users=> {
            res.send(users)
		    })
	},

    user: (req, res) => {
        db.Users.findByPk(req.params.id)
			.then(user =>
				res.send(user)
			)
    }




}

module.exports = apiController;