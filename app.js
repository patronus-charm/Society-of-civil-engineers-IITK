const express=require('express');
const app=express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/activities',function(req,res){
    res.render("activities");
})
app.listen(3000,()=>{
    console.log("server started on port 3000");
});
