const express = require('express')
const router = express.Router()

require('../db/conn')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
  res.send(`hello from server router js`)
})
router.post('/register', async (req, res) => {
  //object destructuring
  const { name, email, phone, work, password, cpassword } = req.body

  if (!name || !email)
    return res.status(422).json({ error: 'plz fill the data properly' })

  try {
    const userExist = await User.findOne({ email: email })

    if (userExist) {
      return res.status(422).json({ error: 'email already exists' })
    }

    const user = new User({ name, email, phone, work, password, cpassword })

    await user.save()

    res.status(201).json({ message: 'user resgistered successfully' })
  } catch (err) {
    console.log(err)
  }

  //login
  router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(422).json({ error: 'Please Fill All the fields..' })
      }
      const login = await Users.findOne({ $and: [{ email }, { password }] })
      if (login) {
        res.status(200).json({ message: 'Login Successfull' })
      } else {
        res.status(202).json({ message: 'Invalid Details' })
      }
    } catch (err) {
      console.log(err)
    }
  })
})
module.exports = router
