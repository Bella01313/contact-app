const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/employee')
const UserSchema = require('./models/user') 

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post('/login',(req,res)=>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/createUser', (req,res)=>{
    UserSchema.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/', (req,res)=>{
    UserSchema.find({})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.get('/getUser/:id', (req,res)=>{
    const id = req.params.id;
    UserSchema.findById({_id:id})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.put('updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserSchema.findByIdAndUpdate({_id:id},{
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})


app.listen(3001, ()=>{
    console.log("server is running")
})