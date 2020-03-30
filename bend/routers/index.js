const express=require('express');
const router=express.Router();
const {createUser}= require('./api/signup')
const {signin}= require('./api/signin')
const {addActivity}= require('./api/addActivity')
const {getActivity}= require('./api/getActivity')
const {getReport}= require('./api/report')
const {forgot}=require('./api/forgot')
router.post('/signup',createUser)
 router.put('/signin',signin)
 router.post('/addactivity',addActivity);
 router.get('/activity/:user',getActivity)
 router.get('/report/:user',getReport);
 router.put('/forgot',forgot)
module.exports=router;