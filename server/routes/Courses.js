const DB = require('../database/database');
//import DB from '../database';
const express = require('express');
const router = express.Router();
const Courses = require("../models/Courses");
// const { DATE } = require('sequelize/types');
router.get('/api/courses',async(req,res)=>{

    Courses.findAll({
      
    }).then(courses=>{
      if (courses) {
              res.json(courses)
              } else {
                 res.send('courses does not exist')
            }
    })
  
})

router.post('/addcourse',async(req,res)=>{
  const today= new Date();

  const newcourses={ 
    title:req.body.title,
    instructor:req.body.instructor ,
    upload_date: today,
    price: req.body.price,
    author_initial: req.body.author_initial,
    image: req.body.image,
    img_title:req.body.img_title 
  }
 

  Courses.findAll({
    where :{
      title: req.body.title
    }
  }).then(courses=>{
    if (!courses) {
      courses.create(newcourses)
      .then(courses=>{
        res.json({ status: courses.title +' course saved '})
      }).catch(err => {
        res.send('error: ' + err)
      })
          }
  })

})
module.exports = router;
