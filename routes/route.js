const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')



router.get('/', async (req, res) => {
    const data = {
        name :"Alice",
        lastname :"cool",
        email:'johndoe@gmail.com',
        age :18
    }

    data = req.body

    const { success } = await UserController.addUser(data)

    if (success) res.send('user saved with success')
    else res.send('Error during user saved')
})


router.get('/users', async (req, res) => {
    const users = await UserController.findUser()

    res.json(users)
})


router.get('/user', async (req, res) => {
    const users = await UserController.findUserById('60ef137725f3ac95102d73e8')

    res.json(users)
})


router.get('/delete-user', async (req, res) => {
    const users = await UserController.deleteUser('60ef137725f3ac95102d73e8')
    res.json(users)
})

router.get('/update-user', async (req, res) => {
    const user = await UserController.updateUser({id: '60ef0de91bd31491d77d6aaf' , age:23})
    res.json(user)
})



module.exports = router