const path = require('path');
const fs = require('fs');
let db = require("../database/models");
const Op = db.Sequelize.Op

const apiController = {

	products: (req, res) => {
		db.Products.findAll()
			.then(products => {
				res.send({
					total: products.length,
					data: products
				});
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
			.then(users => {
				users.forEach(user => {
					let user = {
						id: user.id,
						name: user.name,
						email: user.email,
						detail: null
					}
				}
				)
			});
			
		res.send({
			count: users.length,
			users: {



			})
	}
},

	user: (req, res) => {
        db.Users.findByPk(req.params.id)
	.then(user =>
		res.send(user)
	)
    }




}

module.exports = apiController;