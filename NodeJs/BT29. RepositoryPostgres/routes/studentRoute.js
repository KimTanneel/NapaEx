const express = require('express');
const router = express.Router();
const StudentCtrl = require('../controller/studentController')

router.post('/create',StudentCtrl.create)
router.post('/delete',StudentCtrl.delete)
router.post('/update/:id',StudentCtrl.update)
router.get('/index',StudentCtrl.findAll)
router.get('/:id',StudentCtrl.findById)

module.exports = router