const path = require('path');
const fs = require('fs');
let db = require("../database/models");
const Op = db.Sequelize.Op

const apiController = {

	products: (req, res) => {
		db.Products.findAll()
			.then(products => {
				let productos = []
				products.forEach(product => {
					let producto = {
						id: product.id,
						name: product.name,
						description: product.description,
						detail: "http://localhost:3000/api/products/" + product.id
					}
					productos.push(producto)
				})	
				res.send({
					count: products.length,
					products: productos
				})
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
				let usuarios = []
				users.forEach(user => {
					let usuario = {
						id: user.id,
						name: user.name,
						email: user.email,
						detail: "http://localhost:3000/api/users/" + user.id
					}
					usuarios.push(usuario)
					})
					res.send({
						count: users.length,
						users: usuarios
						})
				
			});
},

	user: (req, res) => {
        db.Users.findByPk(req.params.id)
		.then(user =>{
			let usuario = {
				id: user.id,
				name: user.name,
				email: user.email,
				telefono: user.tel,
				avatar: "http://localhost:3000/images/usersImages/" + user.avatar
			}
			res.send(usuario)
		}
		
	)
	
    }


}

module.exports = apiController;