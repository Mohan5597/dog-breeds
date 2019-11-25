const express = require('express')
const router = express.Router()
const userController=require('../app/controllers/userController')

const {authenticateUser}=require('../app/middlewares/authentication')

router.get('/users/profile',authenticateUser,userController.list)
router.put('/users/profile/edit',authenticateUser,userController.update)
router.post('/users/register',userController.register)
router.post('/users/login',userController.create)
router.delete('/users/logout', authenticateUser,userController.destroy)



module.exports=router