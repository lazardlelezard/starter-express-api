const express = require('express')
const router = express.Router()
const homecontroller = require('../controller/user/home')
const inscriptionController = require('../controller/user/inscription')
const connexionController = require('../controller/user/connexion')
const authController = require('../controller/middleware/authentication')
const accountController = require('../controller/user/account')

router.get('/', homecontroller.getHome)
router.post('/', homecontroller.postHome)

router.get('/inscription', inscriptionController.getInscription)
router.post('/inscription', inscriptionController.postInscription)

router.get('/connexion', connexionController.getConnexion)
router.post('/connexion', connexionController.postConnexion)

router.get('/connexion', connexionController.getConnexion)
router.post('/connexion', connexionController.postConnexion)

router.get('/me', authController.getAuth, accountController.getCompte)
router.post('/me', authController.getAuth, accountController.postCompte)



module.exports = router