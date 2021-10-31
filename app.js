const express=require('express');
const app=express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
const images=require('./data')

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/activities',function(req,res){
    res.render("activities",{images:images});
})
app.get('/department',function(req,res){
    res.render("department");
})
app.get('/student-section',function(res,res){
    res.render('student-section');
})
app.listen(3000,()=>{
    console.log("server started on port 3000");
});
