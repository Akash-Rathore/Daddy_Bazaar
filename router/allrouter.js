const express=require('express')
var router=express.Router();
var user=require('../api/user');

router.get('/registration' , user.registration); 

module.exports = router;


