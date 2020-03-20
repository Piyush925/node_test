const express=require('express');
const router=express.Router();
const {createUser}= require('./api/signup')
const {signin}= require('./api/signin')
const {addActivity}= require('./api/addActivity')
const {getActivity}= require('./api/getActivity')
router.post('/signup',createUser)
 router.put('/signin',signin)
 router.post('/activity',addActivity);
 router.get('/activity/:user',getActivity)

module.exports=router;