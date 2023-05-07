const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
const port=process.env.Port || 8000;

// public static path
// console.log(__dirname);
const static_path=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
console.log(__dirname,"../public");

app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/",(req,res)=>{
	res.render('index');
});

app.get("/about",(req,res)=>{
	res.render('about');
});

app.get("/weather",(req,res)=>{
	res.render('weather');
});
app.get("*",(req,res)=>{
	res.render('404error',{
		errorMsg:'Opps! Page Not Found'
	});
});
app.listen(port,()=>{
	console.log(`listening to the port ${port}`);

});