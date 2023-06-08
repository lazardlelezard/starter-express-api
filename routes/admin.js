const express = require('express')
const router = express.Router()
const authController = require('../controller/middleware/authentication')
const addProductController = require('../controller/admin/addProduct')

router.get('/add-product', authController.getAuth, addProductController.getAddProduct)
router.post('/add-product', authController.getAuth, addProductController.postAddProduct)

module.exports = router